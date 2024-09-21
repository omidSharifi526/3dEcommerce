// src/app/api/protected/route.ts
import { authMiddleware } from '../../../middleware/auth';

export const GET = authMiddleware(async (req, res) => {
  return new Response(JSON.stringify({ message: 'Protected content', user: req.user }));
});
