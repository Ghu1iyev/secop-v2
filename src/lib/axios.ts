import axios from "axios";

const HTTP = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const GetApi = async <T = unknown>(endpoint: string): Promise<T> => {
  try {
    const res = await HTTP.get<T>(endpoint);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching Get data:", error.message);
    } else if (error instanceof Error) {
      console.error("Error fetching Get data:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export const PostApi = async <T>(
  endpoint: string,
  data: unknown
): Promise<T> => {
  try {
    const res = await HTTP.post<T>(endpoint, data);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error posting data:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
