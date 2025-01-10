import axios from "axios";
import dotEnv from "dotenv";
import { Promocao } from "./interfeces";

dotEnv.config();
const url = process.env.NEXT_PUBLIC_URL as string;

export async function fetchPromocoesPorLocalizacao(
  latitude: number,
  longitude: number
): Promise<Promocao[]> {
  const response = await axios.get<Promocao[]>(
    `${url}/promotions/location?latitude=${latitude}&longitude=${longitude}&radius=200.0`
  );

  return response.data;
}
