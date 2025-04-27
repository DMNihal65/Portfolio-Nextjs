import { Redis } from '@upstash/redis';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize Redis client
const redis = new Redis({
  url: "https://powerful-kid-29480.upstash.io",
  token: "AXMoAAIjcDFkY2UzYjEzMzQ5NzU0NWU0ODk1ZDYwOTAwNTg5YWU0YnAxMA",
});

const VISITOR_KEY = 'portfolio:visitors';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      // Increment the counter
      await redis.incr(VISITOR_KEY);
      return res.status(200).json({ success: true });
    } else if (req.method === 'GET') {
      // Get the current count
      const count = await redis.get(VISITOR_KEY) || 0;
      return res.status(200).json({ count });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error with visitor counter:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
} 