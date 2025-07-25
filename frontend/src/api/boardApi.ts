import { API_URL } from "../utils/envVariables";
import type { TCreateBoardData } from "../features/Boards/useCreateBoard";

export async function createBoardApi(createBoardData: TCreateBoardData) {
  try {
    const res = await fetch(`${API_URL}/api/board/userBoard`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      body: JSON.stringify(createBoardData),
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

export async function getBoardsApi() {
  try {
    const res = await fetch(`${API_URL}/api/board/boards`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "GET",
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
