import { Prisma } from "@prisma/client";
import prisma from "../../config/database.js";



async function createUserStreamings(data) {
    return prisma.users_streamings.createMany({
        data
    });
}

async function updateUserStreamings(data, userId: number) {

    await prisma.$transaction([
        prisma.users_streamings.deleteMany({
            where: {
                userId,
            },
          }),
          prisma.users_streamings.createMany({
            data
        }),
      ],
      {
        isolationLevel: Prisma.TransactionIsolationLevel.Serializable, 
      })      
}

async function listUserStreamings(userId: number) {
    return prisma.users_streamings.findMany({
        where: {
            userId,
        },
        select: {
            Streamings: true,
        }
    });
}



const userStreamingRepository = {
    createUserStreamings,
    listUserStreamings,
    updateUserStreamings
  };
  
  export default userStreamingRepository;