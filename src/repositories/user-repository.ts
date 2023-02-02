import prisma from "../../config/database.js";
import { Prisma } from "@prisma/client";


async function create(data: Prisma.UsersUncheckedCreateInput) {
  try {
    const user = await prisma.users.create({
      data
    });
    console.log(user)
    return user;
  } catch (error) {
    console.log(error)
  }
  
  }
  
async function findByEmail(email: string) {
    const user = await prisma.users.findUnique({ where: { email } });
    return user;
}  

async function findById(id: number) {
  const user = await prisma.users.findUnique({ where: { id } });
  return user;
}  

async function updateExpenses(expenses: number, userId: number) {
  return prisma.users.update({
    where: {
      id: userId,
    },
    data: {
      expenses: expenses,
    }
  })
}

const userRepository = {
    create,
    findByEmail,
    updateExpenses,
    findById
  }
  
export default userRepository;