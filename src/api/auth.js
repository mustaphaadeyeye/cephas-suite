
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const registerUser = async ({ fullName, email, password }) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: fullName,
      email,
      password,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    const error = new Error(
      result.message || "Unable to create your account."
    );

    error.details = result.errors || [];
    throw error;
  }

  return result;
};

export const loginUser = async ({ email, password }) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    const error = new Error(
      result.message || "Unable to sign in. Please try again."
    );

    error.details = result.errors || [];
    throw error;
  }

  return result;
};
