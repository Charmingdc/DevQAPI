import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  try {
    // Resolve the path to your JSON file dynamically
    const filePath = path.join(process.cwd(), 'jsons', 'beginnner.json');
    const data = await fs.readFile(filePath, 'utf8');
    const questions = JSON.parse(data);
    
    // Send the questions as the response
    res.status(200).json(questions);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Failed to load questions' });
  }
}