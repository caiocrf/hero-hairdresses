import express, { Application } from 'express';

const app: Application = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const PORT = 3000
app.listen(PORT, () => console.log( `server is running on port:${PORT}`))

export { app };