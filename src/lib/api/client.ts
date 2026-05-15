// URL PHP бекенду на shared hosting
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://okta.ua';

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// Продукти / каталог
export const catalogApi = {
  getCategories: () =>
    apiFetch('/api/categories'),

  getCategory: (slug: string) =>
    apiFetch(`/api/categories/${slug}`),

  getProducts: (params?: Record<string, string | number>) => {
    const query = params ? '?' + new URLSearchParams(params as Record<string, string>).toString() : '';
    return apiFetch(`/api/products${query}`);
  },

  getProduct: (slug: string) =>
    apiFetch(`/api/products/${slug}`),

  searchProducts: (query: string) =>
    apiFetch(`/api/search?q=${encodeURIComponent(query)}`),
};

// Новини
export const newsApi = {
  getNews: (page = 1) =>
    apiFetch(`/api/news?page=${page}`),

  getNewsItem: (slug: string) =>
    apiFetch(`/api/news/${slug}`),
};

// Замовлення
export const orderApi = {
  createOrder: (data: Record<string, unknown>) =>
    apiFetch('/api/order', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// Користувач
export const userApi = {
  login: (phone: string, password: string) =>
    apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ phone, password }),
    }),

  register: (data: Record<string, unknown>) =>
    apiFetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  getProfile: () =>
    apiFetch('/api/auth/profile'),
};
