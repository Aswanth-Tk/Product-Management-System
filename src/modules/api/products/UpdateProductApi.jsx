import { API_URL } from "../../utils/api";

export async function updateProduct(
  id: string,
  product: {
    name?: string;
    price?: number;
    description?: string;
    category?: string;
    inStock?: boolean;
  }
) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (!res.ok) throw new Error('Failed to update product');

    return await res.json(); // updated product
  } catch (err) {
    console.error('updateProduct error:', err);
    throw err;
  }
}
