const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const searchBooks = async (query: string) => {
  const response = await fetch(`${BASE_URL}?q=${query}`);
  const data = await response.json();
  return data.items || [];
};

export const getBookById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
};
