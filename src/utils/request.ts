import axios from "axios";

async function get(url: string) {
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
   console.log(error)
  }
}

export const request = {
  get,
};