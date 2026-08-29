const path = require ('path')
const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/health', (req, res) => {
res.json({ status: 'Server is running smoothly' });
});

// Serve the frontend locally (Vercel serves public/ automatically in production)
if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(path.join(__dirname, '..', 'public')));
}



// Locally you need to listen; on Vercel this is ignored
if (process.env.NODE_ENV !== 'production') {
app.listen(3000, () => console.log('Local server on http://localhost:3000'));
}
module.exports = app;