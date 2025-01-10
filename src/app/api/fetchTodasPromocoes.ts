import axios from "axios";
import dotEnv from "dotenv";
import { Promocao } from "./interfeces";

dotEnv.config();
const url = process.env.NEXT_PUBLIC_URL as string;

export async function fetchTodasPromocoes(): Promise<Promocao[]> {
  const response = await axios.get<Promocao[]>(`${url}/promotions`);

  return response.data;
}
