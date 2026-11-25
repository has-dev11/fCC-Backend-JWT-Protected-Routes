import express from "express";
import helmet from "helmet";
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';


const PORT = process.env.PORT;
const app = express();

app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Auth API is running" });
});

app.use((err, req, res, next) => {
  const status = err.status || err.statusCode || 500;
  return res.status(status).json({ error: err.message || 'Internal server error' });
});

app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

app.use('/api/auth', authRoutes);

