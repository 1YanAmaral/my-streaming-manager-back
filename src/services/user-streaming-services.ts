import axios from "axios";
import userStreamingRepository from "../repositories/user-streaming-repository.js";


async function insertUserStreamings(data) {
   
      const result = await userStreamingRepository.createUserStreamings(data);
      return result;
   
  }

  const userStreamingServices ={
    insertUserStreamings
}

export default userStreamingServices;