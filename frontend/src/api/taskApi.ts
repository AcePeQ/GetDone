import { API_URL } from "../utils/envVariables";
import type { TAddTaskData } from "../features/Tasks/useAddTask";
import type { TEditTaskData } from "../features/Tasks/useEditTask";
import type { TDeleteTaskData } from "../features/Tasks/useDeleteTask";

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

export async function editTaskApi(editTaskData: TEditTaskData) {
  try {
    const res = await fetch(`${API_URL}/api/task/task`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "PUT",
      body: JSON.stringify(editTaskData),
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

export async function deleteTaskApi(deleteTaskData: TDeleteTaskData) {
  try {
    const res = await fetch(`${API_URL}/api/task/task`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "DELETE",
      body: JSON.stringify(deleteTaskData),
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
