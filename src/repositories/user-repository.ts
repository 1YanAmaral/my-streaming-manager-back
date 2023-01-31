import prisma from "../../config/database.js";
import { Prisma } from "@prisma/client";


async function create(data: Prisma.UsersUncheckedCreateInput) {
    return prisma.users.create({
      data,
    });
  }
  
async function findByEmail(email: string) {
    const user = await prisma.users.findUnique({ where: { email } });
    return user;
}  
const userRepository = {
    create,
    findByEmail
  }
  
export default userRepository;