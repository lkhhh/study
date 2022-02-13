import express from 'express';
import fsAsync from 'fs/promises';

const app = express();

app.get('/', (req, res, next) => {
  return fsAsync.readFile('/file2.txt').catch(next);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
  next();
});


app.listen(8080);
