import { Ad, Category, Location } from '../../core/Models';

export const categories: Category[] = [
  {
    id: 'cars',
    name: 'Cars',
    nameAr: 'سيارات',
    icon: 'car',
    adCount: 1250
  },
  {
    id: 'apartments',
    name: 'Apartments for Rent',
    nameAr: 'شقق للإيجار',
    icon: 'home',
    adCount: 850
  },
  {
    id: 'mobiles',
    name: 'Mobile Phones',
    nameAr: 'هواتف محمولة',
    icon: 'phone',
    adCount: 2100
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    nameAr: 'أثاث وديكور منزلي',
    icon: 'chair',
    adCount: 650
  },
  {
    id: 'electronics',
    name: 'Electronics',
    nameAr: 'إلكترونيات',
    icon: 'laptop',
    adCount: 920
  },
  {
    id: 'fashion',
    name: 'Fashion & Beauty',
    nameAr: 'أزياء وجمال',
    icon: 'shirt',
    adCount: 1180
  }
];

export const locations: Location[] = [
  {
    id: 'beirut',
    name: 'Beirut',
    nameAr: 'بيروت',
    governorate: 'Beirut',
    governorateAr: 'بيروت'
  },
  {
    id: 'jounieh',
    name: 'Jounieh',
    nameAr: 'جونيه',
    governorate: 'Mount Lebanon',
    governorateAr: 'جبل لبنان'
  },
  {
    id: 'tripoli',
    name: 'Tripoli',
    nameAr: 'طرابلس',
    governorate: 'North Lebanon',
    governorateAr: 'لبنان الشمالي'
  },
  {
    id: 'sidon',
    name: 'Sidon',
    nameAr: 'صيدا',
    governorate: 'South Lebanon',
    governorateAr: 'لبنان الجنوبي'
  },
  {
    id: 'baalbek',
    name: 'Baalbek',
    nameAr: 'بعلبك',
    governorate: 'Bekaa',
    governorateAr: 'البقاع'
  },
  {
    id: 'zahle',
    name: 'Zahle',
    nameAr: 'زحلة',
    governorate: 'Bekaa',
    governorateAr: 'البقاع'
  },
  {
    id: 'achrafieh',
    name: 'Achrafieh',
    nameAr: 'الأشرفية',
    governorate: 'Beirut',
    governorateAr: 'بيروت'
  },
  {
    id: 'hamra',
    name: 'Hamra',
    nameAr: 'الحمرا',
    governorate: 'Beirut',
    governorateAr: 'بيروت'
  }
];

export const ads: Ad[] = [
  {
    id: 'car-1',
    title: 'Toyota Corolla 2019',
    titleAr: 'تويوتا كورولا 2019',
    description: 'Excellent condition, low mileage, single owner. Full service history available.',
    descriptionAr: 'حالة ممتازة، مسافة قليلة، مالك واحد. تاريخ صيانة كامل متوفر.',
    price: 18500,
    currency: 'USD',
    categoryId: 'cars',
    locationId: 'beirut',
    images: ['https://via.placeholder.com/400x300/car1', 'https://via.placeholder.com/400x300/car1-2'],
    postedDate: '2025-09-10',
    condition: 'used',
    isFeatured: true,
    contactInfo: {
      phone: '+961 70 123 456',
      whatsapp: '+961 70 123 456',
      showPhone: true
    },
    seller: {
      name: 'Ahmad Khalil',
      joinedDate: '2023-01-15',
      isVerified: true
    }
  },
  {
    id: 'car-2',
    title: 'BMW 320i 2018',
    titleAr: 'بي إم دبليو 320i 2018',
    description: 'Luxury sedan, leather seats, navigation system, parking sensors.',
    descriptionAr: 'سيدان فاخرة، مقاعد جلدية، نظام ملاحة، حساسات ركن.',
    price: 28000,
    currency: 'USD',
    categoryId: 'cars',
    locationId: 'jounieh',
    images: ['https://via.placeholder.com/400x300/bmw1'],
    postedDate: '2025-09-08',
    condition: 'used',
    isFeatured: false,
    contactInfo: {
      phone: '+961 71 234 567',
      showPhone: true
    },
    seller: {
      name: 'Maria Jabbour',
      joinedDate: '2022-08-20',
      isVerified: true
    }
  },
  {
    id: 'apt-1',
    title: '2 Bedroom Apartment in Achrafieh',
    titleAr: 'شقة غرفتين نوم في الأشرفية',
    description: 'Modern 2BR apartment, furnished, balcony with city view, parking included.',
    descriptionAr: 'شقة حديثة بغرفتي نوم، مفروشة، شرفة بإطلالة على المدينة، موقف سيارة متضمن.',
    price: 1200,
    currency: 'USD',
    categoryId: 'apartments',
    locationId: 'achrafieh',
    images: ['https://via.placeholder.com/400x300/apt1', 'https://via.placeholder.com/400x300/apt1-2'],
    postedDate: '2025-09-12',
    condition: 'new',
    isFeatured: true,
    contactInfo: {
      phone: '+961 3 345 678',
      whatsapp: '+961 3 345 678',
      showPhone: true
    },
    seller: {
      name: 'Rami Properties',
      joinedDate: '2021-03-10',
      isVerified: true
    }
  },
  {
    id: 'apt-2',
    title: 'Studio Apartment Near AUB',
    titleAr: 'شقة استوديو قرب الجامعة الأمريكية',
    description: 'Cozy studio apartment, perfect for students, walking distance to AUB.',
    descriptionAr: 'شقة استوديو مريحة، مثالية للطلاب، على مسافة قريبة من الجامعة الأمريكية.',
    price: 650,
    currency: 'USD',
    categoryId: 'apartments',
    locationId: 'hamra',
    images: ['https://via.placeholder.com/400x300/studio1'],
    postedDate: '2025-09-11',
    condition: 'used',
    isFeatured: false,
    contactInfo: {
      phone: '+961 1 456 789',
      showPhone: true
    },
    seller: {
      name: 'Nour Mansour',
      joinedDate: '2023-06-05',
      isVerified: false
    }
  },
  {
    id: 'mobile-1',
    title: 'iPhone 14 Pro Max 256GB',
    titleAr: 'آيفون 14 برو ماكس 256 جيجا',
    description: 'Brand new, sealed box, Deep Purple color, comes with original accessories.',
    descriptionAr: 'جديد تماماً، صندوق مختوم، لون بنفسجي عميق، يأتي مع الملحقات الأصلية.',
    price: 1150,
    currency: 'USD',
    categoryId: 'mobiles',
    locationId: 'beirut',
    images: ['https://via.placeholder.com/400x300/iphone14', 'https://via.placeholder.com/400x300/iphone14-box'],
    postedDate: '2025-09-13',
    condition: 'new',
    isFeatured: true,
    contactInfo: {
      phone: '+961 76 567 890',
      whatsapp: '+961 76 567 890',
      showPhone: true
    },
    seller: {
      name: 'Tech Store Lebanon',
      joinedDate: '2020-11-15',
      isVerified: true
    }
  },
  {
    id: 'mobile-2',
    title: 'Samsung Galaxy S23 Ultra',
    titleAr: 'سامسونغ غالاكسي S23 الترا',
    description: 'Excellent condition, 512GB storage, includes S Pen, original box available.',
    descriptionAr: 'حالة ممتازة، 512 جيجا تخزين، يشمل S Pen، الصندوق الأصلي متوفر.',
    price: 850,
    currency: 'USD',
    categoryId: 'mobiles',
    locationId: 'tripoli',
    images: ['https://via.placeholder.com/400x300/samsung23'],
    postedDate: '2025-09-09',
    condition: 'used',
    isFeatured: false,
    contactInfo: {
      phone: '+961 6 678 901',
      showPhone: true
    },
    seller: {
      name: 'Hassan Mohamad',
      joinedDate: '2022-12-03',
      isVerified: true
    }
  }
];