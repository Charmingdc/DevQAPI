import beginner from '../jsons/beginner.js';

export default function handler(req, res) {
  // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(beginner);
}