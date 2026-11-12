import { API_URL } from "../../utils/api";

export async function deleteProduct(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) throw new Error('Failed to delete product');
    const data = await res.json();

    return {
      statusCode: res.status,
      data
    } // { message: 'Product deleted successfully' }
  } catch (err) {
    console.error('deleteProduct error:', err);
    throw err;
  }
}
