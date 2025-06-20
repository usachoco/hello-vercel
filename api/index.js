module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    message: 'Hello from Vercel API!',
    timestamp: new Date().toISOString()
  });
};
