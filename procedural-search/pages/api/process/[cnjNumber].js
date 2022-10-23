import { promises as fs } from 'fs';
import path from 'path'

export default async function getProcess(req, res) {
  const { cnjNumber } = req.query;
  const jsonDirectory = path.join(process.cwd(), 'json');
  const file = await fs.readFile(`${jsonDirectory}/process.json`, 'utf8')
  const jsonParsed = JSON.parse(file).find((v) => v.cnjNumber === cnjNumber);
  return res.status(200).json(jsonParsed);
}