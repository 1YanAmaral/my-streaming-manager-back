import axios from "axios";
import userStreamingRepository from "../repositories/user-streaming-repository.js";


async function insertUserStreamings(data) {   
      const result = await userStreamingRepository.createUserStreamings(data);
      return result;   
}

async function updateUserStreamings(data, userId: number) {   
  const result = await userStreamingRepository.updateUserStreamings(data,userId);
  return result;   
}


async function getUserStreamings(userId: number) {
    const query = await userStreamingRepository.listUserStreamings(userId);
    const result = query.map(value => value.Streamings);
    return result;
}
  const userStreamingServices ={
    insertUserStreamings,
    getUserStreamings,
    updateUserStreamings
}

export default userStreamingServices;