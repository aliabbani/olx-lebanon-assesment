# OLX Lebanon Mobile Application

This is a React Native mobile application developed for OLX Lebanon, implementing core features for browsing and searching classified ads. The app includes authentication, home screen with category carousels, search functionality, and ad details viewing.

## 🚀 Quick Start 

### Prerequisites
- Node.js (v18 or higher recommended)
- React Native development environment set up
- Android Studio (for Android) or Xcode (for iOS)
- Android emulator or iOS simulator (or physical device)

### Installation & Setup

1. **Install Dependencies**
   ```sh
   npm install
   
   # For iOS only (if testing on iOS)
   cd ios && bundle install && bundle exec pod install && cd ..
   ```

2. **Start Metro Server**
   ```sh
   npm start
   ```

3. **Run the Application**
   
   **For Android:**
   ```sh
   npm run android
   ```
   
   **For iOS:**
   ```sh
   npm run ios
   ```

### 🔐 Authentication Credentials

The application uses predefined credentials for testing:

- **Username:** `olx_usr1`
- **Password:** `olx_pass`

Use these credentials on any of the login screens (main login, email login, or phone login).

## 📱 Application Features

### Core Screens Implemented

1. **Authentication Flow**
   - Login Screen with multiple login options
   - Email Login Screen
   - Phone Login Screen  
   - Create Account Screen

2. **Home Screen**
   - Custom header with search integration
   - 8 category carousels (Cars, Properties, Electronics, etc.)
   - Horizontal scrolling category sections
   - Featured ads and recent listings

3. **Search Screen**
   - Quick Filters section matching design
   - Recent searches functionality
   - Popular categories grid
   - Compact search input design

4. **Ad Details Screen**
   - Comprehensive property/item details
   - Image gallery
   - Contact seller functionality
   - Safety tips section
   - Related ads suggestions

5. **Profile Screen**
   - User profile management
   - Language switching (Arabic/English)
   - Authentication status display

### 🛠 Technology Stack

- **Framework:** React Native with TypeScript
- **State Management:** Redux Toolkit
- **Navigation:** React Navigation v6
- **Styling:** React Native StyleSheet
- **Language Support:** Bilingual (Arabic/English) with RTL support

### 📁 Project Structure

```
src/
├── core/
│   ├── Models.ts          # Type definitions
│   └── services.ts        # API service functions
├── navigation/
│   └── Navigation.tsx     # Navigation configuration
├── redux/
│   ├── store.ts          # Redux store setup
│   ├── authSlice.ts      # Authentication state
│   ├── languageSlice.ts  # Language state
│   ├── adsSlice.ts       # Ads data state
│   └── hooks.ts          # Redux hooks
├── screens/
│   ├── auth/             # Authentication screens
│   └── main/             # Main application screens
└── shared/
    ├── components/       # Reusable components
    ├── data/            # Static data
    └── colors.js        # Color constants
```


 **Node.js Warnings (v20+):**
   These are known compatibility warnings and don't affect functionality.
