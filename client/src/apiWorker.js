export default async function apiWorker(path, options) {
  console.log(options);
  const { API_URL } = process.env;
  const response = await fetch(`${API_URL}/${path}`);
  const data = await response.json();

  console.log(data);
  return data;
}
