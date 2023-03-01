import { axios } from "@/lib/axios";

export const like = (productId: string) =>
  axios.post(`/like/${productId}/like`);
