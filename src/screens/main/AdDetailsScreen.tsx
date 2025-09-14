import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector } from '../../redux/hooks';
import { CategoryAd, categorySections } from '../../shared/data/categorySections';

const AdDetailsScreen = () => {
  const route = useRoute<any>();
  const { adId } = route.params;
  const currentLanguage = useAppSelector(state => state.language.currentLanguage);

  const findAd = (): CategoryAd | undefined => {
    for (const section of categorySections) {
      const foundAd = section.ads.find(item => item.id === adId);
      if (foundAd) return foundAd;
    }
    return undefined;
  };

  const ad = findAd();

  if (!ad) {
    return (
      <View style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {currentLanguage.code === 'ar' ? 'لم يتم العثور على الإعلان' : 'Ad not found'}
          </Text>
        </View>
      </View>
    );
  }

  const handleCall = () => {
    Linking.openURL(`tel:${ad.contactInfo.phone}`);
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in your ad: ${ad.title}`;
    const whatsappUrl = `whatsapp://send?phone=${ad.contactInfo.phone.replace(/\s/g, '')}&text=${encodeURIComponent(message)}`;
    Linking.openURL(whatsappUrl);
  };

  const handleChat = () => {
    console.log('Navigate to chat');
  };

  const renderPropertyDetails = () => {
    if (!ad.propertyDetails) return null;

    return (
      <>
        <View style={styles.propertyGrid}>
          <View style={styles.propertyItem}>
            <Text style={styles.propertyIcon}>🏠</Text>
            <View style={styles.propertyDetails}>
              <Text style={styles.propertyLabel}>
                {currentLanguage.code === 'ar' ? 'المساحة (م²)' : 'Size (m²)'}
              </Text>
              <Text style={styles.propertyValue}>{ad.propertyDetails.size}</Text>
            </View>
          </View>

          <View style={styles.propertyItem}>
            <Text style={styles.propertyIcon}>🛏️</Text>
            <View style={styles.propertyDetails}>
              <Text style={styles.propertyLabel}>
                {currentLanguage.code === 'ar' ? 'غرف النوم' : 'Bedrooms'}
              </Text>
              <Text style={styles.propertyValue}>{ad.propertyDetails.bedrooms}</Text>
            </View>
          </View>

          <View style={styles.propertyItem}>
            <Text style={styles.propertyIcon}>🚿</Text>
            <View style={styles.propertyDetails}>
              <Text style={styles.propertyLabel}>
                {currentLanguage.code === 'ar' ? 'الحمامات' : 'Bathrooms'}
              </Text>
              <Text style={styles.propertyValue}>{ad.propertyDetails.bathrooms}</Text>
            </View>
          </View>

          <View style={styles.propertyItem}>
            <Text style={styles.propertyIcon}>🪑</Text>
            <View style={styles.propertyDetails}>
              <Text style={styles.propertyLabel}>
                {currentLanguage.code === 'ar' ? 'المفروشات' : 'Furnished'}
              </Text>
              <Text style={styles.propertyValue}>
                {ad.propertyDetails.furnished === 'unfurnished'
                  ? (currentLanguage.code === 'ar' ? 'غير مفروش' : 'Unfurnished')
                  : (currentLanguage.code === 'ar' ? 'مفروش' : 'Furnished')
                }
              </Text>
            </View>
          </View>

          <View style={styles.propertyItem}>
            <Text style={styles.propertyIcon}>🏢</Text>
            <View style={styles.propertyDetails}>
              <Text style={styles.propertyLabel}>
                {currentLanguage.code === 'ar' ? 'الملكية' : 'Ownership'}
              </Text>
              <Text style={styles.propertyValue}>
                {ad.propertyDetails.ownership === 'by-company'
                  ? (currentLanguage.code === 'ar' ? 'من قبل شركة' : 'By Company')
                  : (currentLanguage.code === 'ar' ? 'من قبل فرد' : 'By Individual')
                }
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {currentLanguage.code === 'ar' ? 'التفاصيل' : 'Details'}
          </Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              {currentLanguage.code === 'ar' ? 'فيديو' : 'Video'}
            </Text>
            <Text style={styles.detailValue}>
              {ad.propertyDetails.hasVideo
                ? (currentLanguage.code === 'ar' ? 'متوفر' : 'Available')
                : (currentLanguage.code === 'ar' ? 'غير متوفر' : 'Not Available')
              }
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              {currentLanguage.code === 'ar' ? 'جولة افتراضية' : 'Virtual Tour'}
            </Text>
            <Text style={styles.detailValue}>
              {ad.propertyDetails.hasVirtualTour
                ? (currentLanguage.code === 'ar' ? 'متوفر' : 'Available')
                : (currentLanguage.code === 'ar' ? 'غير متوفر' : 'Not Available')
              }
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              {currentLanguage.code === 'ar' ? 'الحالة' : 'Condition'}
            </Text>
            <Text style={styles.detailValue}>
              {ad.propertyDetails.readyToMoveIn
                ? (currentLanguage.code === 'ar' ? 'جاهز للانتقال' : 'Ready to move in')
                : (currentLanguage.code === 'ar' ? 'غير جاهز' : 'Not ready')
              }
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              {currentLanguage.code === 'ar' ? 'نوع البائع' : 'Seller Type'}
            </Text>
            <Text style={styles.detailValue}>
              {currentLanguage.code === 'ar' ? 'وكالة' : 'Agency'}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              {currentLanguage.code === 'ar' ? 'نوع العقار' : 'Property Type'}
            </Text>
            <Text style={styles.detailValue}>
              {ad.propertyDetails.propertyType === 'apartment'
                ? (currentLanguage.code === 'ar' ? 'شقة' : 'Apartment')
                : (currentLanguage.code === 'ar' ? 'فيلا' : 'Villa')
              }
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              {currentLanguage.code === 'ar' ? 'طريقة الدفع' : 'Payment method'}
            </Text>
            <Text style={styles.detailValue}>
              {ad.propertyDetails.paymentMethod === 'cash'
                ? (currentLanguage.code === 'ar' ? 'نقد' : 'Cash')
                : (currentLanguage.code === 'ar' ? 'أقساط' : 'Installments')
              }
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {currentLanguage.code === 'ar' ? 'المرافق' : 'Amenities'}
          </Text>

          {ad.propertyDetails.amenities.map((amenity, index) => (
            <View key={index} style={styles.amenityRow}>
              <Text style={styles.checkIcon}>✓</Text>
              <Text style={styles.amenityText}>{amenity}</Text>
            </View>
          ))}

          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>
              {currentLanguage.code === 'ar' ? 'عرض الكل' : 'See all'}
            </Text>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imageIcon}>📷</Text>
          </View>

          {ad.isFeatured && (
            <View style={styles.eliteBadge}>
              <Text style={styles.eliteIcon}>👑</Text>
              <Text style={styles.eliteText}>Elite</Text>
            </View>
          )}

          <View style={styles.imageCounter}>
            <Text style={styles.imageCounterText}>1/20</Text>
          </View>
        </View>

        <View style={styles.mainInfo}>
          <Text style={styles.price}>
            {ad.currency} {ad.price.toLocaleString()}
          </Text>
          <Text style={styles.title}>
            {currentLanguage.code === 'ar' ? ad.titleAr : ad.title}
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {currentLanguage.code === 'ar' ? 'للبيع' : 'For sale'}
            </Text>
          </View>

          <View style={styles.locationRow}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.locationText}>
              {currentLanguage.code === 'ar' ? ad.locationAr : ad.location}
            </Text>
            <Text style={styles.dateText}>09/09/2025</Text>
          </View>
        </View>

        {renderPropertyDetails()}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {currentLanguage.code === 'ar' ? 'الوصف' : 'Description'}
          </Text>
          <Text style={styles.description}>
            {currentLanguage.code === 'ar' ? ad.descriptionAr : ad.description}
          </Text>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>
              {currentLanguage.code === 'ar' ? 'اقرأ المزيد' : 'Read more'}
            </Text>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {currentLanguage.code === 'ar' ? 'معلن بواسطة وكالة' : 'Listed by agency'}
          </Text>

          <View style={styles.sellerInfo}>
            <View style={styles.sellerLeft}>
              <Text style={styles.sellerName}>{ad.seller.name}</Text>
              {ad.seller.isVerified && (
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedIcon}>✓</Text>
                  <Text style={styles.verifiedText}>
                    {currentLanguage.code === 'ar' ? 'عمل موثق' : 'Verified Business'}
                  </Text>
                </View>
              )}
              <Text style={styles.sellerName2}>{ad.seller.name}</Text>
              <TouchableOpacity style={styles.seeProfileButton}>
                <Text style={styles.seeProfileText}>
                  {currentLanguage.code === 'ar' ? 'عرض الملف الشخصي' : 'See profile'}
                </Text>
                <Text style={styles.arrowIcon}>›</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sellerLogo}>
              <Text style={styles.logoText}>modern living</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {currentLanguage.code === 'ar' ? 'الموقع' : 'Location'}
          </Text>

          <View style={styles.locationInfo}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.locationName}>
              {currentLanguage.code === 'ar' ? ad.locationAr : ad.location}
            </Text>
            <Text style={styles.adId}>
              Ad ID: {ad.propertyDetails?.adId || ad.id}
            </Text>
          </View>

          <View style={styles.mapPlaceholder}>
            <TouchableOpacity style={styles.mapButton}>
              <Text style={styles.mapIcon}>📍</Text>
              <Text style={styles.mapButtonText}>
                {currentLanguage.code === 'ar' ? 'عرض الموقع' : 'See location'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.reportSection}>
          <TouchableOpacity style={styles.reportButton}>
            <Text style={styles.reportIcon}>📝</Text>
            <Text style={styles.reportText}>
              {currentLanguage.code === 'ar' ? 'الإبلاغ عن هذا الإعلان' : 'Report this ad'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.hideButton}>
            <Text style={styles.hideIcon}>🚫</Text>
            <Text style={styles.hideText}>
              {currentLanguage.code === 'ar' ? 'إخفاء هذا الإعلان' : 'Hide this ad'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.safetySection}>
          <Text style={styles.safetyTitle}>
            {currentLanguage.code === 'ar' ? 'سلامتك تهمنا!' : 'Your safety matters to us!'}
          </Text>

          <View style={styles.safetyTip}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.safetyText}>
              {currentLanguage.code === 'ar'
                ? 'التقي فقط في أماكن عامة / مزدحمة.'
                : 'Only meet in public / crowded places.'
              }
            </Text>
          </View>

          <View style={styles.safetyTip}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.safetyText}>
              {currentLanguage.code === 'ar'
                ? 'لا تذهب وحدك لمقابلة مشتري / بائع، خذ دائماً شخصاً معك.'
                : 'Never go alone to meet a buyer / seller, always take someone with you.'
              }
            </Text>
          </View>

          <View style={styles.safetyTip}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.safetyText}>
              {currentLanguage.code === 'ar'
                ? 'تحقق وافحص المنتج بشكل صحيح قبل شرائه.'
                : 'Check and inspect the product properly before purchasing it.'
              }
            </Text>
          </View>

          <View style={styles.safetyTip}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.safetyText}>
              {currentLanguage.code === 'ar'
                ? 'لا تدفع أي شيء مسبقاً أو تحول أموال قبل فحص المنتج.'
                : 'Never pay anything in advance or transfer money before inspecting the product.'
              }
            </Text>
          </View>
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsApp}>
          <View style={styles.whatsappIconContainer}>
            <Text style={styles.whatsappIcon}>�</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatButton} onPress={handleChat}>
          <Text style={styles.chatIcon}>💬</Text>
          <Text style={styles.chatText}>
            {currentLanguage.code === 'ar' ? 'دردشة' : 'Chat'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <Text style={styles.callIcon}>📞</Text>
          <Text style={styles.callText}>
            {currentLanguage.code === 'ar' ? 'اتصال' : 'Call'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    height: 250,
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
    fontSize: 60,
    opacity: 0.3,
  },
  eliteBadge: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  eliteIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  eliteText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  imageCounter: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  imageCounterText: {
    color: '#fff',
    fontSize: 14,
  },
  mainInfo: {
    padding: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E74C3C',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    lineHeight: 24,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginBottom: 12,
  },
  badgeText: {
    fontSize: 14,
    color: '#666',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  dateText: {
    fontSize: 14,
    color: '#999',
  },
  propertyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  propertyItem: {
    width: '50%',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  propertyIcon: {
    fontSize: 24,
    marginRight: 12,
    color: '#4A90E2',
  },
  propertyDetails: {
    flex: 1,
  },
  propertyLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  propertyValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#333',
  },
  detailValue: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  amenityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  checkIcon: {
    fontSize: 16,
    color: '#4CAF50',
    marginRight: 12,
  },
  amenityText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  seeAllText: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
  },
  arrowIcon: {
    fontSize: 16,
    color: '#4A90E2',
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 12,
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellerLeft: {
    flex: 1,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  sellerName2: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  verifiedIcon: {
    fontSize: 12,
    color: '#2196F3',
    marginRight: 4,
  },
  verifiedText: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: '600',
  },
  seeProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeProfileText: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
  },
  sellerLogo: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  logoText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  locationName: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    marginLeft: 8,
  },
  adId: {
    fontSize: 12,
    color: '#999',
  },
  mapPlaceholder: {
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mapIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  mapButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  reportSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  reportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 8,
  },
  reportIcon: {
    fontSize: 16,
    marginRight: 8,
    color: '#4A90E2',
  },
  reportText: {
    fontSize: 14,
    color: '#4A90E2',
  },
  hideButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 8,
  },
  hideIcon: {
    fontSize: 16,
    marginRight: 8,
    color: '#666',
  },
  hideText: {
    fontSize: 14,
    color: '#666',
  },
  safetySection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  safetyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  safetyTip: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginRight: 8,
    marginTop: 2,
  },
  safetyText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    lineHeight: 20,
  },
  bottomSpacing: {
    height: 150,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: 60,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    borderRadius: 50,
    padding: 12,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  whatsappIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  whatsappIcon: {
    fontSize: 24,
    color: '#fff',
  },
  chatButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  chatIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  chatText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  callButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 12,
    borderRadius: 8,
  },
  callIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  callText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#666',
  },
});

export default AdDetailsScreen;