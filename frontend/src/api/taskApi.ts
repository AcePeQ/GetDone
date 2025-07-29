import { API_URL } from "../utils/envVariables";
import type { TAddTaskData } from "../features/Tasks/useAddTask";

export async function createTaskApi(addTaskData: TAddTaskData) {
  try {
    const res = await fetch(`${API_URL}/api/task/task`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      body: JSON.stringify(addTaskData),
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
