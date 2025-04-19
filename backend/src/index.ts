import express from 'express';
import { prisma } from './prisma';
import imageRoutes from './imageRoutes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.get('/api/users', async (_req, res) => {
  res.json(await prisma.user.findMany());
});

app.post('/api/users', async (req, res) => {
  const user = await prisma.user.create({ data: req.body });
  res.status(201).json(user);
});

app.use('/api/images', imageRoutes);

app.listen(3000, () => console.log('🚀 API on :3000'));