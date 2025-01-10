import axios from "axios";
import dotEnv from "dotenv";
import { VipUser } from "./interfeces";

dotEnv.config();
const url = process.env.NEXT_PUBLIC_URL as string;

export async function fetchVipUser(): Promise<VipUser[]> {
  const response = await axios.get<VipUser[]>(`${url}/vip-users`);
  return response.data;
}
