import { promises as fs } from 'fs';
import path from 'path'

export default async function handler(_req, res) {
  const jsonDirectory = path.join(process.cwd(), 'json');
  const file = await fs.readFile(`${jsonDirectory}/process.json`, 'utf8')
  return res.status(200).json(JSON.parse(file))
}