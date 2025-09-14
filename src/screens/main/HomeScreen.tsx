import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Category } from '../../core/Models';
import { AdsService, CategoriesService } from '../../core/services';
import { setAllAds } from '../../redux/adsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import CategoryAdCard from '../../shared/components/CategoryAdCard';
import { CategoryAd, categorySections } from '../../shared/data/categorySections';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(state => state.language.currentLanguage);
  const isRTL = currentLanguage.isRTL;

  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const categoriesResponse = await CategoriesService.getAllCategories();
        if (categoriesResponse.success) {
          setCategories(categoriesResponse.data);
        }
        setIsLoadingCategories(false);

        const adsResponse = await AdsService.getAllAds();
        if (adsResponse.success) {
          dispatch(setAllAds(adsResponse.data));
        }
      } catch (error) {
        console.error('Error loading data:', error);
        setIsLoadingCategories(false);
        Alert.alert('Error', 'Failed to load data. Please try again.');
      }
    };

    loadData();
  }, [dispatch]);

  const handleCategoryPress = (category: Category) => {
    navigation.navigate('Search', { categoryId: category.id });
  };

  const handleCategoryAdPress = (ad: CategoryAd) => {
    navigation.navigate('AdDetails', { adId: ad.id });
  };

  const renderCategoryAdItem = ({ item }: { item: CategoryAd }) => (
    <CategoryAdCard ad={item} onPress={handleCategoryAdPress} />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.customHeader}>
        <TouchableOpacity style={styles.headerLocationContainer}>
          <View style={styles.locationPin}>
            <Text style={styles.locationPinIcon}>📍</Text>
          </View>
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationLabel}>Lebanon</Text>
            <Text style={styles.arrowDown}>▼</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity
          style={styles.searchContainer}
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={styles.searchIcon}>🔍</Text>
          <Text style={[styles.searchPlaceholder, isRTL && styles.searchPlaceholderRTL]}>
            {currentLanguage.code === 'ar' ? 'عم تدور على ايه؟' : 'What are you looking for?'}
          </Text>
        </TouchableOpacity>

        <View style={styles.promoContainer}>
          <View style={styles.promoBanner}>
            <View style={styles.promoContent}>
              <Text style={styles.promoTitle}>SELF-DELIVERY</Text>
              <Text style={styles.promoSubtitle}>NOW AVAILABLE!</Text>
              <Text style={styles.promoDescription}>Select & Manage Your Delivery</Text>
            </View>
            <View style={styles.promoImageContainer}>
              <Text style={styles.promoImagePlaceholder}>📦🚚</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, isRTL && styles.sectionTitleRTL]}>
              {currentLanguage.code === 'ar' ? 'جميع الفئات' : 'All categories'}
            </Text>
            <TouchableOpacity>
              <Text style={styles.seeAllLink}>
                {currentLanguage.code === 'ar' ? 'عرض الكل' : 'See all'}
              </Text>
            </TouchableOpacity>
          </View>

          {isLoadingCategories ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#002F56" />
              <Text style={styles.loadingText}>
                {currentLanguage.code === 'ar' ? 'جاري التحميل...' : 'Loading...'}
              </Text>
            </View>
          ) : (
            <FlatList
              data={categories.slice(0, 5)}
              renderItem={({ item }) => {
                const iconMap: { [key: string]: string } = {
                  'car': '🚗',
                  'home': '🏢',
                  'phone': '📱',
                  'chair': '🪑',
                  'laptop': '💻',
                  'shirt': '👕'
                };
                const displayIcon = iconMap[item.icon] || '📦';

                const nameMap: { [key: string]: { en: string, ar: string } } = {
                  'cars': { en: 'Vehicles', ar: 'مركبات' },
                  'apartments': { en: 'Properties', ar: 'عقارات' },
                  'mobiles': { en: 'Mobiles & Accessories', ar: 'هواتف وإكسسوارات' },
                  'electronics': { en: 'Electronics & Applia...', ar: 'إلكترونيات وأجهزة' },
                  'furniture': { en: 'Furniture & Decor', ar: 'أثاث وديكور' }
                };
                const displayName = nameMap[item.id]
                  ? (currentLanguage.code === 'ar' ? nameMap[item.id].ar : nameMap[item.id].en)
                  : (currentLanguage.code === 'ar' ? item.nameAr : item.name);

                return (
                  <TouchableOpacity
                    style={styles.categoryItem}
                    onPress={() => handleCategoryPress(item)}
                    activeOpacity={0.7}
                  >
                    <View style={styles.categoryIconContainer}>
                      <Text style={styles.categoryIcon}>{displayIcon}</Text>
                    </View>
                    <Text style={[styles.categoryLabel, isRTL && styles.categoryLabelRTL]} numberOfLines={2}>
                      {displayName}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesHorizontalContainer}
            />
          )}
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.recentSearchContainer}>
            <Text style={styles.clockIcon}>🕐</Text>
            <View style={styles.recentSearchContent}>
              <Text style={[styles.recentSearchText, isRTL && styles.recentSearchTextRTL]}>
                {currentLanguage.code === 'ar' ? 'اهتزاز في الرياضة واللياقة البدنية' : 'vibration in Gym, Fitness & Combat sports'}
              </Text>
              <Text style={styles.moreFiltersText}>
                {currentLanguage.code === 'ar' ? '+1 مرشح إضافي' : '+1 more filters'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {categorySections.map((section) => (
          <View key={section.id} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, isRTL && styles.sectionTitleRTL]}>
                {currentLanguage.code === 'ar' ? section.titleAr : section.title}
              </Text>
              <TouchableOpacity>
                <Text style={styles.seeAllLink}>
                  {currentLanguage.code === 'ar' ? 'عرض الكل' : 'See all'}
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={section.ads}
              renderItem={renderCategoryAdItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.adsContainer}
            />
          </View>
        ))}

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 35,
  },
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  locationPin: {
    backgroundColor: '#FFD700',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  locationPinIcon: {
    fontSize: 12,
    color: '#333',
  },
  locationTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginRight: 4,
  },
  arrowDown: {
    fontSize: 12,
    color: '#666',
  },
  notificationButton: {
    padding: 8,
  },
  notificationIcon: {
    fontSize: 20,
    color: '#333',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 12,
    color: '#666',
  },
  searchPlaceholder: {
    fontSize: 16,
    color: '#999',
    flex: 1,
  },
  searchPlaceholderRTL: {
    textAlign: 'right',
  },
  promoContainer: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  promoBanner: {
    flexDirection: 'row',
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  promoContent: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFDD44',
    marginBottom: 4,
  },
  promoSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  promoDescription: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  promoImageContainer: {
    marginLeft: 16,
  },
  promoImagePlaceholder: {
    fontSize: 40,
  },
  section: {
    marginVertical: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionTitleRTL: {
    textAlign: 'right',
  },
  seeAllLink: {
    fontSize: 14,
    color: '#00A5A8',
    fontWeight: '600',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  categoriesContainer: {
    paddingHorizontal: 8,
  },
  categoriesHorizontalContainer: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    alignItems: 'center',
    width: 80,
  },
  categoryIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF4A3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryIcon: {
    fontSize: 28,
    color: '#333',
  },
  categoryLabel: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
  categoryLabelRTL: {
    textAlign: 'center',
  },
  recentSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  clockIcon: {
    fontSize: 20,
    marginRight: 12,
    color: '#666',
  },
  recentSearchContent: {
    flex: 1,
  },
  recentSearchText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  recentSearchTextRTL: {
    textAlign: 'right',
  },
  moreFiltersButton: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  moreFiltersText: {
    fontSize: 12,
    color: '#666',
  },
  adsContainer: {
    paddingLeft: 16,
    paddingRight: 32,
  },
  viewAllButton: {
    backgroundColor: '#002F56',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  viewAllButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSpacing: {
    height: 20,
  },
});

export default HomeScreen;