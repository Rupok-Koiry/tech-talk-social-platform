import { AxiosError } from "axios";

// lib/exceptions.ts
export class ApiException extends Error {
  constructor(public message: string, public status: number = 500) {
    super(message);
    this.name = "ApiException";
  }
}

async function handleApiRequest<T>(apiCall: Promise<T>): Promise<T> {
  try {
    return await apiCall;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ApiException(
        error.response?.data?.message || "An error occurred",
        error.response?.status || 500
      );
    }
    throw new ApiException("An unexpected error occurred.");
  }
}

export default handleApiRequest;
