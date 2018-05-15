import userRouter from '../routes/user';
import postRouter from '../routes/post';
import commentRouter from '../routes/comment';

const routesConfig = (app) => {
    app.use('/posts', postRouter);
    // app.use('/posts/:id', commentRouter);
    app.use('/users', userRouter);
};

export default routesConfig;