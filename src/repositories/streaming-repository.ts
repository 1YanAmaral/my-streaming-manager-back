import prisma from "../../config/database.js";

async function findStreamings() {
    return prisma.streamings.findMany();
}

async function findStreamingsByUser(userId: number) {
    return prisma.users_streamings.findMany({
        where: {
            userId}
    });
}

const streamingRepository = {
    findStreamings,
    findStreamingsByUser
  };
  
  export default streamingRepository;