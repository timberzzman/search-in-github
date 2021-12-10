export default async function apiWorker(path, options) {
  console.log(options);
  const { API_URL } = process.env;
  console.log(`${API_URL}${path}`);
  try {
    const response = await fetch(`${API_URL}${path}`);
    const data = await response.json();

    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
  return null;
}
