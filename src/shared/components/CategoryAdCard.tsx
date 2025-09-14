import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector } from '../../redux/hooks';
import { CategoryAd, getDaysAgo } from '../data/categorySections';

interface CategoryAdCardProps {
  ad: CategoryAd;
  onPress?: (ad: CategoryAd) => void;
}

const CategoryAdCard: React.FC<CategoryAdCardProps> = ({ ad, onPress }) => {
  const navigation = useNavigation<any>();
  const currentLanguage = useAppSelector(state => state.language.currentLanguage);
  const isRTL = currentLanguage.isRTL;

  const displayTitle = currentLanguage.code === 'ar' ? ad.titleAr : ad.title;
  const displayLocation = currentLanguage.code === 'ar' ? ad.locationAr : ad.location;
  const daysAgo = getDaysAgo(ad.postedDate);

  const formatPrice = (price: number, currency: string) => {
    return `${currency} ${price.toLocaleString()}`;
  };

  const handlePress = () => {
    if (onPress) {
      onPress(ad);
    } else {
      navigation.navigate('AdDetails', { adId: ad.id });
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageIcon}>📷</Text>
        </View>

        {/* Featured Badge */}
        {ad.isFeatured && (
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredText}>Featured</Text>
          </View>
        )}
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Price and Favorite */}
        <View style={styles.priceRow}>
          <Text style={[styles.price, isRTL && styles.priceRTL]}>
            {formatPrice(ad.price, ad.currency)}
          </Text>
          <TouchableOpacity style={styles.favoriteButton}>
            <Text style={styles.favoriteIcon}>♡</Text>
          </TouchableOpacity>
        </View>

        {/* Title */}
        <Text style={[styles.title, isRTL && styles.titleRTL]} numberOfLines={2}>
          {displayTitle}
        </Text>

        {/* Location and Time */}
        <View style={styles.metaColumn}>
          <Text style={[styles.location, isRTL && styles.locationRTL]} numberOfLines={1}>
            {displayLocation}
          </Text>
          <Text style={[styles.timeAgo, isRTL && styles.timeAgoRTL]}>
            {daysAgo}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 16,
    marginBottom: 16,
    width: 280,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 160,
    backgroundColor: '#f0f0f0',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIcon: {
    fontSize: 50,
    opacity: 0.3,
  },
  featuredBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FF6B35',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  featuredText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E74C3C',
    flex: 1,
  },
  priceRTL: {
    textAlign: 'right',
  },
  favoriteButton: {
    padding: 4,
  },
  favoriteIcon: {
    fontSize: 20,
    color: '#999',
  },
  title: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    fontWeight: '500',
    lineHeight: 22,
  },
  titleRTL: {
    textAlign: 'right',
  },
  metaColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  locationRTL: {
    textAlign: 'right',
  },
  timeAgo: {
    fontSize: 12,
    color: '#999',
  },
  timeAgoRTL: {
    textAlign: 'right',
  },
});

export default CategoryAdCard;