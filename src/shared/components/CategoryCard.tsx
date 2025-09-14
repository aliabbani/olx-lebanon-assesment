import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Category } from '../../core/Models';
import { useAppSelector } from '../../redux/hooks';

interface CategoryCardProps {
  category: Category;
  onPress: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  const currentLanguage = useAppSelector(state => state.language.currentLanguage);
  const isRTL = currentLanguage.isRTL;

  const displayName = currentLanguage.code === 'ar' ? category.nameAr : category.name;

  return (
    <TouchableOpacity
      style={[styles.container, isRTL && styles.containerRTL]}
      onPress={() => onPress(category)}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.iconPlaceholder}>{category.icon}</Text>
      </View>
      <Text style={[styles.categoryName, isRTL && styles.categoryNameRTL]} numberOfLines={2}>
        {displayName}
      </Text>
      <Text style={[styles.adCount, isRTL && styles.adCountRTL]}>
        {category.adCount.toLocaleString()} ads
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minHeight: 120,
    flex: 1,
  },
  containerRTL: {
    marginLeft: 8,
    marginRight: 8,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  iconPlaceholder: {
    fontSize: 20,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  categoryNameRTL: {
    textAlign: 'center',
  },
  adCount: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  adCountRTL: {
    textAlign: 'center',
  },
});

export default CategoryCard;