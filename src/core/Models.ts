export interface User {
  id: string;
  username: string;
  email?: string;
  isAuthenticated: boolean;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  icon: string;
  adCount: number;
}

export interface Location {
  id: string;
  name: string;
  nameAr: string;
  governorate: string;
  governorateAr: string;
}

export interface Ad {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  currency: string;
  categoryId: string;
  locationId: string;
  images: string[];
  postedDate: string;
  condition: 'new' | 'used' | 'refurbished';
  isFeatured: boolean;
  contactInfo: {
    phone: string;
    whatsapp?: string;
    showPhone: boolean;
  };
  seller: {
    name: string;
    joinedDate: string;
    isVerified: boolean;
  };
}

export interface SearchFilters {
  query?: string;
  categoryId?: string;
  locationId?: string;
  minPrice?: number;
  maxPrice?: number;
  condition?: string;
  sortBy?: 'newest' | 'price_low' | 'price_high' | 'relevance';
}

export interface AppLanguage {
  code: 'en' | 'ar';
  name: string;
  isRTL: boolean;
}

export class ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;

  constructor(success: boolean, data: T, message?: string) {
    this.success = success;
    this.data = data;
    this.message = message;
  }
}