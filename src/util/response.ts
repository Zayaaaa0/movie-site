import { TOKEN } from "./constants";
export default async function response(endpoints: string) {
  const response = await fetch(`https://api.themoviedb.org/3${endpoints}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
