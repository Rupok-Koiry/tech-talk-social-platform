"use server";
import handleApiRequest from "../utils/handleApiRequest";
import api from "./api";

export async function getAllCategories() {
  const response = await handleApiRequest(api.get("/categories"));
  return response.data.data;
}
