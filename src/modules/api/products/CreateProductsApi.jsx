import { API_URL } from '../../utils/api';

export async function createProduct(product) {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (!res.ok) {
      throw new Error('Failed to create product');
    }

    const data = await res.json();
    return {
    statusCode: res.status,
    ok: res.ok,
    data,
  };
  } catch (err) {
    console.error('createProduct error:', err);
    throw err;
  }
}
