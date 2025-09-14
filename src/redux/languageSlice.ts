import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppLanguage } from '../core/Models';

interface LanguageState {
  currentLanguage: AppLanguage;
  availableLanguages: AppLanguage[];
}

const availableLanguages: AppLanguage[] = [
  { code: 'en', name: 'English', isRTL: false },
  { code: 'ar', name: 'العربية', isRTL: true }
];

const initialState: LanguageState = {
  currentLanguage: availableLanguages[0],
  availableLanguages
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'ar'>) => {
      const language = state.availableLanguages.find(lang => lang.code === action.payload);
      if (language) {
        state.currentLanguage = language;
      }
    },
    toggleLanguage: (state) => {
      const currentIndex = state.availableLanguages.findIndex(
        lang => lang.code === state.currentLanguage.code
      );
      const nextIndex = (currentIndex + 1) % state.availableLanguages.length;
      state.currentLanguage = state.availableLanguages[nextIndex];
    }
  }
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;