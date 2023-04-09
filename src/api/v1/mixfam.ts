import type { MixfamResponse } from '@/types';
import { Hono } from 'hono';

const mixfam = new Hono();

mixfam.get('/', async (c) => {
  const period = c.req.query('period');
  if (!period) {
    const res = {
      status: 400,
      error: 'missing period query parameter',
    };
    return c.json(res);
  }
  const ssRes = await fetch(
    `https://script.google.com/macros/s/AKfycbxJYynNnUVFszdRFpQlb4E6WMq8vtA4V7eFldPEsE1z4-LmJ4gCrHVBHS7hVeJy2QYV/exec?endpoint=mixfam&period=${period}`,
    {
      method: 'GET',
    }
  );

  if (!ssRes.ok) {
    const res = {
      status: 404,
      error: 'data not found',
    };
    return c.json(res);
  }

  const ssData = await ssRes.json<MixfamResponse>();
  if (ssData.state === 404) {
    const res = {
      status: 404,
      error: 'data not found',
    };
    return c.json(res);
  }

  const res = {
    status: 200,
    body: ssData.value,
  };

  return c.json(res);
});

export { mixfam };
