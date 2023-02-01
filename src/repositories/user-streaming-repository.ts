import prisma from "../../config/database.js";


async function createUserStreamings(data) {
    return prisma.users_streamings.createMany({
        data
    });
}



const userStreamingRepository = {
    createUserStreamings
  };
  
  export default userStreamingRepository;