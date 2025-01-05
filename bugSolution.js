const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is a valid number
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  // Fetch user data (replace with your actual data fetching logic)
  const user = users.find(user => user.id === parseInt(userId));

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];