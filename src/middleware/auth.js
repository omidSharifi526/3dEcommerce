// src/middleware/auth.js

import jwt from 'jsonwebtoken';

export function authMiddleware(handler) {
  return async (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1]; // توکن از هدر Authorization
    if (!token) {
      return new Response('Access denied', { status: 401 });
    }

    try {
      // اعتبارسنجی توکن
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      return handler(req, res);
    } catch (err) {
      return new Response('Invalid token', { status: 403 });
    }
  };
}
