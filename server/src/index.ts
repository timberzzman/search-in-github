import express from 'express';
import ApiWorker from './apiWorker';
import DbWorker from './dbWorker';

const app = express();
const db = new DbWorker();
const api = new ApiWorker();

app.get('/', (req, res) => {
  res.send('Hello from express and typescript');
});

app.get('/users/:id', async (req, res) => {
  let userData = await db.getUser(req.params.id);
  if (!userData) {
    userData = await api.getUser(req.params.id);
    if (!userData) {
      res.sendStatus(404);
      return;
    }
    await db.createUser(userData);
  }
  res.status(200).send({ data: userData });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
