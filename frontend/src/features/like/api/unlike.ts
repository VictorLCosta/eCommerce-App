import { axios } from "@/lib/axios";

export const unlike = (productId: string) =>
  axios.delete(`/like/${productId}/unlike`);
