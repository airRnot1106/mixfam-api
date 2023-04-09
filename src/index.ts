import { Hono } from 'hono';
import { mixfam } from '@/api/v1/mixfam';
import { periods } from '@/api/v1/periods';

const app = new Hono();
app.route('api/v1/mixfam', mixfam);
app.route('api/v1/periods', periods);

export default app;
