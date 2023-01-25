import axios from "axios";
import streamingRepository from "../repositories/streaming-repository.js";


async function getStreamings() {
  try {
    const result = await streamingRepository.findStreamings();
    return result;
  } catch (error) {
   console.log(error)
  }
}

async function searchTitles(search_value: string) {
try {
  const apiKey = 'kXvaMl52qNtdHRp3Or1s6nyu3R8zugfrtxCZrh13';
  const search_field = 'name';
  const result = await axios.get(`https://api.watchmode.com/v1/search/?apiKey=${apiKey}&search_field=${search_field}&search_value=${search_value}`)
  return result.data;
} catch (error) {
  console.log(error)
}
}

async function searchPopularTitles(streamingId: number) {
  try {    
    const result = await axios.get(`https://api.watchmode.com/v1/list-titles/?apiKey=kXvaMl52qNtdHRp3Or1s6nyu3R8zugfrtxCZrh13&source_ids=${streamingId}&sort_by=popularity_desc&limit=10`)
    return result.data;
  } catch (error) {
    console.log(error)
  }
  }

const streamingServices ={
    getStreamings,
    searchTitles,
    searchPopularTitles
}

export default streamingServices;