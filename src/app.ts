import express from 'express';
import userRoute from './models/user/user.route';
const app = express();

app.use(express.json())
app.use('/api/user', userRoute)

app.get('/', (req, res) => {
  res.send('Server is running');
});

export default app;
