export default async function apiWorker(path) {
  const { API_URL } = process.env;
  try {
    const response = await fetch(`${API_URL}${path}`);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
  return null;
}
