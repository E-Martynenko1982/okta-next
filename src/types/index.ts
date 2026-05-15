export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  old_price?: number;
  image: string;
  images?: string[];
  description?: string;
  category_id: number;
  category_slug?: string;
  in_stock: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  parent_id?: number;
  children?: Category[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface NewsItem {
  id: number;
  title: string;
  slug: string;
  content: string;
  preview: string;
  image?: string;
  created_at: string;
}

export interface Order {
  id?: number;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  comment?: string;
  items: CartItem[];
  total: number;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}
