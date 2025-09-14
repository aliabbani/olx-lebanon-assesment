import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ad, SearchFilters } from '../core/Models';

interface AdsState {
  allAds: Ad[];
  filteredAds: Ad[];
  isLoading: boolean;
  searchFilters: SearchFilters;
  selectedAd: Ad | null;
}

const initialState: AdsState = {
  allAds: [],
  filteredAds: [],
  isLoading: false,
  searchFilters: {},
  selectedAd: null
};

const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    setAllAds: (state, action: PayloadAction<Ad[]>) => {
      state.allAds = action.payload;
      state.filteredAds = action.payload;
    },
    setSearchFilters: (state, action: PayloadAction<SearchFilters>) => {
      state.searchFilters = action.payload;
    },
    applyFilters: (state) => {
      let filtered = [...state.allAds];
      const filters = state.searchFilters;

      if (filters.query) {
        const query = filters.query.toLowerCase();
        filtered = filtered.filter(ad =>
          ad.title.toLowerCase().includes(query) ||
          ad.titleAr.includes(query) ||
          ad.description.toLowerCase().includes(query) ||
          ad.descriptionAr.includes(query)
        );
      }

      if (filters.categoryId) {
        filtered = filtered.filter(ad => ad.categoryId === filters.categoryId);
      }

      if (filters.locationId) {
        filtered = filtered.filter(ad => ad.locationId === filters.locationId);
      }

      if (filters.minPrice !== undefined) {
        filtered = filtered.filter(ad => ad.price >= filters.minPrice!);
      }

      if (filters.maxPrice !== undefined) {
        filtered = filtered.filter(ad => ad.price <= filters.maxPrice!);
      }

      if (filters.condition) {
        filtered = filtered.filter(ad => ad.condition === filters.condition);
      }

      if (filters.sortBy) {
        switch (filters.sortBy) {
          case 'price_low':
            filtered.sort((a, b) => a.price - b.price);
            break;
          case 'price_high':
            filtered.sort((a, b) => b.price - a.price);
            break;
          case 'newest':
            filtered.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
            break;
          default:
            break;
        }
      }

      state.filteredAds = filtered;
    },
    setSelectedAd: (state, action: PayloadAction<Ad | null>) => {
      state.selectedAd = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    clearFilters: (state) => {
      state.searchFilters = {};
      state.filteredAds = state.allAds;
    }
  }
});

export const {
  setAllAds,
  setSearchFilters,
  applyFilters,
  setSelectedAd,
  setLoading,
  clearFilters
} = adsSlice.actions;

export default adsSlice.reducer;