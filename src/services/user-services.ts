import { Users } from "@prisma/client";
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

  async function signInWithGoogle(params: GoogleParams): Promise<SignInResult> {
    const {name, email, password, token } = params;
  
    let user = await getUserOrFail(email);
  
    if (!user) {
     
      const expenses = 0;      
      user = await userRepository.create({name, email, password, expenses});
      
    }
    
    const newSession = await sessionRepository.create({
      token,
      userId: user.id,
    });
    
    return {
      user: exclude(user, "password"),
      token,
    };
  }

  async function setExpenses(expenses: number, userId: number) {
    const result = await userRepository.updateExpenses(expenses, userId);
    return result;
  }

  async function getExpenses(id: number){
    const user = await userRepository.findById(id);  
    return exclude(user, "id", "name", "email", "password");
  }


  async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
    const user = await userRepository.findByEmail(email);
    //if (!user) throw invalidCredentialsError();
   
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
    //if (!isPasswordValid) throw invalidCredentialsError();

  }

  export function exclude<T, Key extends keyof T>(entity: T, ...keys: Key[]): Omit<T, Key> {
    const newEntity = JSON.parse(JSON.stringify(entity));
    for (const key of keys) {
      delete newEntity[key];
    }
    return newEntity;
  }
  
  
  export type SignInParams = Pick<Users, "email" | "password">;
  
  export type GoogleParams = {
    name: "name";
    email: "email";
    password: "password";
    token: "token";
  };
  
  type SignInResult = {
    user: Pick<Users, "id" | "email">;
    token: string;
  };
  
  type GetUserOrFailResult = Pick<Users, "id" | "email" | "password">;
  
   
  const userService = {
    signIn,
    signInWithGoogle,
    setExpenses,
    getExpenses
  };
  
  export default userService;