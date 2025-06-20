import { getArrayMax } from '../lib/util'

export default function handler(req, res) {
  // CORS ヘッダーなど、必要に応じて他のヘッダーを追加できます
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Vercel の API ルートでは、通常 `res.status().json()` を使用すると
  // 'Content-Type': 'application/json' ヘッダーが自動的に設定されます。
  // そのため、手動での `res.setHeader('Content-Type', 'application/json');` は不要です。
  res.status(200).json({
    author: 'usachoco',
    message: 'Hello from Vercel API!',
    max: getArrayMax([1, 2, 3, 4, 5]),
    timestamp: new Date().toISOString()
  });
}