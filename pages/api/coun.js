// pages/api/example.js

import nc from 'next-connect';

const handler = nc();

handler.get((req, res) => {
  // Gérer la requête GET
  res.json({ message: 'GET request received' });
});

handler.post((req, res) => {
  // Gérer la requête POST
  res.json({ message: 'POST request received' });
});

handler.delete((req, res) => {
  // Gérer la requête DELETE
  res.json({ message: 'DELETE request received' });
});

handler.put((req, res) => {
  // Gérer la requête PUT
  res.json({ message: 'PUT request received' });
});

export default handler;
//npm install next-connect

