import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAppSelector } from '../../redux/hooks';

interface RecentSearch {
  id: string;
  text: string;
  filters: string;
}

interface PopularCategory {
  id: string;
  name: string;
  nameAr: string;
}

const SearchScreen = () => {
  const navigation = useNavigation();
  const currentLanguage = useAppSelector(state => state.language.currentLanguage);
  const isRTL = currentLanguage.isRTL;

  const [searchText, setSearchText] = useState('');

  const recentSearches: RecentSearch[] = [
    {
      id: '1',
      text: 'iphone 14 in Mobile Phones',
      filters: '+1 more filters'
    }
  ];

  const popularCategories: PopularCategory[] = [
    { id: '1', name: 'Cars for Sale', nameAr: 'سيارات للبيع' },
    { id: '2', name: 'Apartments & Villas For Rent', nameAr: 'شقق وفيلل للإيجار' },
    { id: '3', name: 'Mobile Phones', nameAr: 'هواتف محمولة' },
    { id: '4', name: 'Apartments & Villas For Sale', nameAr: 'شقق وفيلل للبيع' },
    { id: '5', name: 'Motorcycles & ATVs', nameAr: 'دراجات نارية ومركبات' },
    { id: '6', name: 'AC, Cooling & Heating', nameAr: 'تكييف وتبريد وتدفئة' },
    { id: '7', name: 'Laptops, Tablets, Computers', nameAr: 'أجهزة كمبيوتر ولوحية' }
  ];

  const handleRemoveRecentSearch = (id: string) => {
    console.log('Remove recent search:', id);
  };

  const handleCategoryPress = (category: PopularCategory) => {
    console.log('Selected category:', category);
  };

  const renderRecentSearchItem = ({ item }: { item: RecentSearch }) => (
    <View style={styles.recentSearchItem}>
      <View style={styles.recentSearchContent}>
        <Text style={[styles.recentSearchText, isRTL && styles.textRTL]}>
          {item.text}
        </Text>
        <Text style={[styles.recentSearchFilters, isRTL && styles.textRTL]}>
          {item.filters}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemoveRecentSearch(item.id)}
      >
        <Text style={styles.removeButtonText}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCategoryItem = ({ item }: { item: PopularCategory }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handleCategoryPress(item)}
    >
      <Text style={[styles.categoryText, isRTL && styles.textRTL]}>
        {currentLanguage.code === 'ar' ? item.nameAr : item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, isRTL && styles.textRTL]}>
          {currentLanguage.code === 'ar' ? 'فلاتر سريعة' : 'Quick Filters'}
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={[styles.searchInput, isRTL && styles.searchInputRTL]}
              placeholder={currentLanguage.code === 'ar' ? 'ابحث عن سيارات، هواتف محمولة...' : 'Find Cars, Mobile Phones ...'}
              placeholderTextColor="#999"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearButtonText}>
              {currentLanguage.code === 'ar' ? 'مسح' : 'Clear'}
            </Text>
          </TouchableOpacity>
        </View>

        {recentSearches.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, isRTL && styles.textRTL]}>
              {currentLanguage.code === 'ar' ? 'عمليات البحث الأخيرة' : 'RECENT SEARCHES'}
            </Text>
            <FlatList
              data={recentSearches}
              renderItem={renderRecentSearchItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </View>
        )}

        <View style={[styles.section, styles.lastSection]}>
          <Text style={[styles.sectionTitle, isRTL && styles.textRTL]}>
            {currentLanguage.code === 'ar' ? 'الفئات الشائعة' : 'POPULAR CATEGORIES'}
          </Text>
          <FlatList
            data={popularCategories.slice(0, 5)}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  backArrow: {
    fontSize: 24,
    color: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
    marginBottom: 16,
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#B3E5E0',
    paddingHorizontal: 8,
    paddingVertical: 8,
    maxWidth: '80%',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
    color: '#666',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    paddingVertical: 0,
  },
  searchInputRTL: {
    textAlign: 'right',
  },
  clearButton: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  clearButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  section: {
    marginBottom: 0,
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
  },
  lastSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginHorizontal: 16,
    marginBottom: 12,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 1,
    padding: 12,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  recentSearchContent: {
    flex: 1,
  },
  recentSearchText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  recentSearchFilters: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    padding: 8,
    marginLeft: 12,
  },
  removeButtonText: {
    fontSize: 18,
    color: '#999',
  },
  categoryItem: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  textRTL: {
    textAlign: 'right',
  },
});

export default SearchScreen;