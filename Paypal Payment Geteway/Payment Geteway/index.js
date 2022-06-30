import express from 'express';
import paymentRouter from './routes/payment.routes';
import morgan from 'morgan';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(paymentRouter);

app.listen(port);
console.log('server on port', port);