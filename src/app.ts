import express from 'express';
import userRoute from './models/user/user.route';
import blogRoute from './models/blog/blog.router';
import { globalErrorHandler } from './globalErrorHandler/globalErrorHandler';
const app = express();

app.use(express.json());
app.use('/api/user', userRoute);
app.use('/api/blog', blogRoute);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use(globalErrorHandler);

export default app;
