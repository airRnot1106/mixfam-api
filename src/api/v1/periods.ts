import type { PeriodResponse } from '@/types';
import { Hono } from 'hono';

const periods = new Hono();

periods.get('/', async (c) => {
  const ssRes = await fetch(
    `https://script.google.com/macros/s/AKfycbxJYynNnUVFszdRFpQlb4E6WMq8vtA4V7eFldPEsE1z4-LmJ4gCrHVBHS7hVeJy2QYV/exec?endpoint=period`,
    {
      method: 'GET',
    }
  );

  const ssData = await ssRes.json<PeriodResponse>();

  if (!ssRes.ok) {
    const res = {
      status: 500,
      error: 'internal server error',
    };
    return c.json(res);
  }

  if (ssData.state === 404) {
    const res = {
      status: 404,
      error: 'data not found',
    };
    return c.json(res);
  }

  const res = {
    status: 200,
    body: {
      periods: ssData.value,
    },
  };

  return c.json(res);
});

export { periods };
