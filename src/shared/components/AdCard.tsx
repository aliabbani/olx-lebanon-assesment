import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ad } from '../../core/Models';
import { useAppSelector } from '../../redux/hooks';

interface AdCardProps {
  ad: Ad;
  onPress: (ad: Ad) => void;
}

const { width: screenWidth } = Dimensions.get('window');
const cardWidth = (screenWidth - 48) / 2;

const AdCard: React.FC<AdCardProps> = ({ ad, onPress }) => {
  const currentLanguage = useAppSelector(state => state.language.currentLanguage);
  const isRTL = currentLanguage.isRTL;

  const displayTitle = currentLanguage.code === 'ar' ? ad.titleAr : ad.title;
  const displayPrice = `${ad.price.toLocaleString()} ${ad.currency}`;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 3600 * 24));

    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    return `${diffInDays} days ago`;
  };

  return (
    <TouchableOpacity
      style={[styles.container, { width: cardWidth }]}
      onPress={() => onPress(ad)}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>📷</Text>
        </View>
        {ad.isFeatured && (
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredText}>Featured</Text>
          </View>
        )}
      </View>

      <View style={styles.contentContainer}>
        <Text style={[styles.title, isRTL && styles.titleRTL]} numberOfLines={2}>
          {displayTitle}
        </Text>

        <Text style={[styles.price, isRTL && styles.priceRTL]}>
          {displayPrice}
        </Text>

        <View style={styles.metaContainer}>
          <Text style={[styles.condition, isRTL && styles.conditionRTL]}>
            {ad.condition}
          </Text>
          <Text style={[styles.date, isRTL && styles.dateRTL]}>
            {formatDate(ad.postedDate)}
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
    marginVertical: 8,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
  },
  imagePlaceholder: {
    height: 120,
    backgroundColor: '#f0f0f0',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholderText: {
    fontSize: 30,
    opacity: 0.3,
  },
  featuredBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#ff6b35',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
  },
  featuredText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    lineHeight: 18,
  },
  titleRTL: {
    textAlign: 'right',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002F56',
    marginBottom: 8,
  },
  priceRTL: {
    textAlign: 'right',
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  condition: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    textTransform: 'capitalize',
  },
  conditionRTL: {
    textAlign: 'right',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  dateRTL: {
    textAlign: 'left',
  },
});

export default AdCard;