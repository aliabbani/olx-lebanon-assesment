import { Ad, ApiResponse, Category, Location, SearchFilters, User } from '../core/Models';
import { ads, categories, locations } from '../shared/data/staticData';

const simulateDelay = (ms: number = 1000): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export class AuthService {
  static async login(username: string, password: string): Promise<ApiResponse<User>> {
    await simulateDelay(1500);

    if (username === 'olx_usr1' && password === 'olx_pass') {
      const user: User = {
        id: '1',
        username: 'olx_usr1',
        email: 'olx_usr1@olx.com.lb',
        isAuthenticated: true
      };

      return new ApiResponse(true, user, 'Login successful');
    } else {
      throw new ApiResponse(false, null as any, 'Invalid username or password');
    }
  }

  static async logout(): Promise<ApiResponse<boolean>> {
    await simulateDelay(500);
    return new ApiResponse(true, true, 'Logged out successfully');
  }

  static async register(userData: {
    fullName: string;
    email: string;
    phone: string;
    username: string;
    password: string;
  }): Promise<ApiResponse<User>> {
    await simulateDelay(2000);

    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      username: userData.username,
      email: userData.email,
      isAuthenticated: true
    };

    return new ApiResponse(true, user, 'Account created successfully');
  }
}

export class AdsService {
  static async getAllAds(): Promise<ApiResponse<Ad[]>> {
    await simulateDelay(1200);
    return new ApiResponse(true, ads, 'Ads fetched successfully');
  }

  static async getFeaturedAds(): Promise<ApiResponse<Ad[]>> {
    await simulateDelay(800);
    const featuredAds = ads.filter(ad => ad.isFeatured);
    return new ApiResponse(true, featuredAds, 'Featured ads fetched successfully');
  }

  static async getAdById(id: string): Promise<ApiResponse<Ad | null>> {
    await simulateDelay(600);
    const foundAd = ads.find(ad => ad.id === id);
    return new ApiResponse(true, foundAd || null, foundAd ? 'Ad found' : 'Ad not found');
  }

  static async getAdsByCategory(categoryId: string): Promise<ApiResponse<Ad[]>> {
    await simulateDelay(1000);
    const categoryAds = ads.filter(ad => ad.categoryId === categoryId);
    return new ApiResponse(true, categoryAds, 'Category ads fetched successfully');
  }

  static async searchAds(filters: SearchFilters): Promise<ApiResponse<Ad[]>> {
    await simulateDelay(1500);

    let filteredAds = [...ads];

    if (filters.query) {
      const query = filters.query.toLowerCase();
      filteredAds = filteredAds.filter(ad =>
        ad.title.toLowerCase().includes(query) ||
        ad.titleAr.includes(query) ||
        ad.description.toLowerCase().includes(query) ||
        ad.descriptionAr.includes(query)
      );
    }

    if (filters.categoryId) {
      filteredAds = filteredAds.filter(ad => ad.categoryId === filters.categoryId);
    }

    if (filters.locationId) {
      filteredAds = filteredAds.filter(ad => ad.locationId === filters.locationId);
    }

    if (filters.minPrice !== undefined) {
      filteredAds = filteredAds.filter(ad => ad.price >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      filteredAds = filteredAds.filter(ad => ad.price <= filters.maxPrice!);
    }

    if (filters.condition) {
      filteredAds = filteredAds.filter(ad => ad.condition === filters.condition);
    }

    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'price_low':
          filteredAds.sort((a, b) => a.price - b.price);
          break;
        case 'price_high':
          filteredAds.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          filteredAds.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
          break;
        default:
          break;
      }
    }

    return new ApiResponse(true, filteredAds, 'Search completed successfully');
  }
}

export class CategoriesService {
  static async getAllCategories(): Promise<ApiResponse<Category[]>> {
    await simulateDelay(800);
    return new ApiResponse(true, categories, 'Categories fetched successfully');
  }

  static async getCategoryById(id: string): Promise<ApiResponse<Category | null>> {
    await simulateDelay(400);
    const category = categories.find(cat => cat.id === id);
    return new ApiResponse(true, category || null, category ? 'Category found' : 'Category not found');
  }
}

export class LocationsService {
  static async getAllLocations(): Promise<ApiResponse<Location[]>> {
    await simulateDelay(600);
    return new ApiResponse(true, locations, 'Locations fetched successfully');
  }

  static async getLocationById(id: string): Promise<ApiResponse<Location | null>> {
    await simulateDelay(300);
    const location = locations.find(loc => loc.id === id);
    return new ApiResponse(true, location || null, location ? 'Location found' : 'Location not found');
  }
}