import "dotenv/config";
import axios from "axios";

//const {NODE_ENV} = process.env;
//const URL = "http://localhost:3001/api";
const URL = "https://projeto-spotify-qqg8.onrender.com/api"

const resArtists = await axios.get(`${URL}/artists`);
const resSongs = await axios.get(`${URL}/songs`);

export const artistArray = resArtists.data;
export const songsArray = resSongs.data;

console.log(resArtists);