import fs from "fs/promises";

export async function readArtists() {
  const data = await fs.readFile("./data/artists.json", "utf-8");
  const artists = JSON.parse(data);
  return artists;
}

export async function writeArtists(artists) {
  const data = JSON.stringify(artists, null, 2);
  await fs.writeFile("./data/artists.json", data, "utf-8");
}