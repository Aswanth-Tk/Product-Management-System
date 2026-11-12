// import { API_URL } from "../utils/api";
import {API_URL} from '../../utils/api'

export async function getProducts() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('getProducts error:', err);
    throw err;
  }
}