
export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  featured: boolean;
  partnership: boolean;
  since: number;
}

// Interface for product categories
export interface Category {
  id: string;
  name: string;
}

// Interface for individual products
export interface Product {
  id: string;
  name: string;
  image?: string;
}

// Interface for a category with its products
export interface CategoryWithProducts {
  id: string;
  name: string;
  products: Product[];
}

// Interface for the complete product structure
export interface BrandProducts {
  brand: string;
  categories: CategoryWithProducts[];
}

// URL parameters for our routes
export interface BrandParams {
  brandSlug: string;
}

export interface CategoryParams {
  brandSlug: string;
  categoryId: string;
}