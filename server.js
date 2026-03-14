const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const USERS = [
  { email: 'user@example.com', password: 'password123', name: 'Demo User' }
];

app.post('/login', (req, res) => {
  const { email, password } = req.body || {};
  if(!email || !password) return res.status(400).json({ ok: false, message: 'Email and password required' });
  const user = USERS.find(u => u.email === email && u.password === password);
  if(!user) return res.status(401).json({ ok: false, message: 'Invalid credentials' });
  const { password: _p, ...userSafe } = user;
  return res.json({ ok: true, user: userSafe });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Auth server listening on http://localhost:${port}`));
