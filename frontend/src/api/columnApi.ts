import type { TCreateColumnData } from "../features/Columns/useCreateColumn";
import type { TDeleteColumnData } from "../features/Columns/useDeleteColumn";
import type { TEditColumnData } from "../features/Columns/useEditColumn";
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

export async function editColumnApi(editColumnData: TEditColumnData) {
  try {
    const res = await fetch(`${API_URL}/api/column/column`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "PUT",
      body: JSON.stringify(editColumnData),
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

export async function deleteColumnApi(deleteColumnData: TDeleteColumnData) {
  try {
    const res = await fetch(`${API_URL}/api/column/column`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "DELETE",
      body: JSON.stringify(deleteColumnData),
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
