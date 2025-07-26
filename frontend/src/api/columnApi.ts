import type { TCreateColumnData } from "../features/Columns/useCreateColumn";
import { API_URL } from "../utils/envVariables";

export async function createColumnApi(createColumnData: TCreateColumnData) {
  try {
    const res = await fetch(`${API_URL}/api/column/column`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      body: JSON.stringify(createColumnData),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
