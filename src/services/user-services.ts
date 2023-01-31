import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sessionRepository from "../repositories/session-repository.js";
import userRepository from "../repositories/user-repository.js";

async function signIn(params: SignInParams): Promise<SignInResult> {
    const { email, password } = params;
  
    const user = await getUserOrFail(email);
  
    await validatePasswordOrFail(password, user.password);
  
    const token = await createSession(user.id);
  
    return {
      user: exclude(user, "password"),
      token,
    };
  }

  async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
    const user = await userRepository.findByEmail(email);
    if (!user) throw invalidCredentialsError();
  
    return user;
  }
  
  async function createSession(userId: number) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    await sessionRepository.create({
      token,
      userId,
    });
  
    return token;
  }
  
  async function validatePasswordOrFail(password: string, userPassword: string) {
    const isPasswordValid = await bcrypt.compare(password, userPassword);
    if (!isPasswordValid) throw invalidCredentialsError();

  }

  export function exclude<T, Key extends keyof T>(entity: T, ...keys: Key[]): Omit<T, Key> {
    const newEntity = JSON.parse(JSON.stringify(entity));
    for (const key of keys) {
      delete newEntity[key];
    }
    return newEntity;
  }
  
  
  export type SignInParams = Pick<User, "email" | "password">;
  
  export type GitHubParams = {
    email: "email";
    password: "password";
    token: "token";
  };
  
  type SignInResult = {
    user: Pick<User, "id" | "email">;
    token: string;
  };
  
  type GetUserOrFailResult = Pick<User, "id" | "email" | "password">;
  
  const userService = {
    signIn,
    signInWithGoogle
  };
  
  export default userService;