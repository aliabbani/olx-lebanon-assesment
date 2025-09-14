export interface CategoryAd {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  currency: string;
  images: string[];
  location: string;
  locationAr: string;
  category: string;
  categoryAr: string;
  condition: 'new' | 'used' | 'refurbished';
  postedDate: string;
  isFeatured: boolean;
  contactInfo: {
    phone: string;
    showPhone: boolean;
  };
  seller: {
    name: string;
    joinedDate: string;
    isVerified: boolean;
  };
  propertyDetails?: {
    size: number;
    bedrooms: number;
    bathrooms: number;
    furnished: 'furnished' | 'unfurnished' | 'semi-furnished';
    ownership: 'by-company' | 'by-individual';
    propertyType: 'apartment' | 'villa' | 'house' | 'office' | 'shop';
    paymentMethod: 'cash' | 'installments' | 'both';
    readyToMoveIn: boolean;
    hasVideo: boolean;
    hasVirtualTour: boolean;
    amenities: string[];
    adId: string;
  };
}

export interface CategorySection {
  id: string;
  title: string;
  titleAr: string;
  ads: CategoryAd[];
}

export const categorySections: CategorySection[] = [
  {
    id: 'international-properties',
    title: 'International Properties',
    titleAr: 'عقارات دولية',
    ads: [
      {
        id: 'intl-prop-1',
        title: 'Partial Sea view Apartment for Sale in Waterfront, Dbayeh',
        titleAr: 'شقة للبيع مع إطلالة جزئية على البحر في واترفرونت، الدبية',
        description: 'Partial Sea view Apartment for Sale in Waterfront, Dbayeh\nPrime location - Easy Access\n\nSpace: 350 Sqm',
        descriptionAr: 'شقة للبيع مع إطلالة جزئية على البحر في واترفرونت، الدبية\nموقع مميز - سهولة في الوصول\n\nالمساحة: 350 متر مربع',
        price: 1299000,
        currency: 'USD',
        images: [
          'https://example.com/apartment1.jpg',
          'https://example.com/apartment2.jpg',
          'https://example.com/apartment3.jpg'
        ],
        location: 'Dbaye, Metn',
        locationAr: 'الدبية، المتن',
        category: 'Properties',
        categoryAr: 'عقارات',
        condition: 'new',
        postedDate: '2024-09-09T00:00:00Z',
        isFeatured: true,
        contactInfo: {
          phone: '+961 1 234 567',
          showPhone: true
        },
        seller: {
          name: 'Modern Living',
          joinedDate: '2019-03-15',
          isVerified: true
        },
        propertyDetails: {
          size: 350,
          bedrooms: 3,
          bathrooms: 5,
          furnished: 'unfurnished',
          ownership: 'by-company',
          propertyType: 'apartment',
          paymentMethod: 'cash',
          readyToMoveIn: true,
          hasVideo: false,
          hasVirtualTour: false,
          amenities: [
            'Balcony',
            'Built in Wardrobes',
            'Central A/C & heating',
            'Covered Parking',
            'Maids Room'
          ],
          adId: '116075079'
        }
      },
      {
        id: 'intl-prop-2',
        title: 'Apartment for Sale in Dubai',
        titleAr: 'شقة للبيع في دبي',
        description: 'Modern apartment in downtown',
        descriptionAr: 'شقة حديثة في وسط المدينة',
        price: 165000,
        currency: 'USD',
        images: ['https://example.com/apt-dubai.jpg'],
        location: 'Dubai, UAE',
        locationAr: 'دبي، الإمارات',
        category: 'Properties',
        categoryAr: 'عقارات',
        condition: 'new',
        postedDate: '2024-09-11T00:00:00Z',
        isFeatured: true,
        contactInfo: {
          phone: '+971 4 123 4567',
          showPhone: true
        },
        seller: {
          name: 'Dubai Homes',
          joinedDate: '2019-06-20',
          isVerified: true
        }
      },
      {
        id: 'intl-prop-3',
        title: 'Villa for Rent in Cyprus',
        titleAr: 'فيلا للإيجار في قبرص',
        description: 'Beautiful villa with pool',
        descriptionAr: 'فيلا جميلة مع مسبح',
        price: 2500,
        currency: 'USD',
        images: ['https://example.com/villa-cyprus.jpg'],
        location: 'Limassol, Cyprus',
        locationAr: 'ليماسول، قبرص',
        category: 'Properties',
        categoryAr: 'عقارات',
        condition: 'used',
        postedDate: '2024-09-12T00:00:00Z',
        isFeatured: false,
        contactInfo: {
          phone: '+357 25 123 456',
          showPhone: true
        },
        seller: {
          name: 'Cyprus Real Estate',
          joinedDate: '2021-03-10',
          isVerified: true
        }
      },
      {
        id: 'intl-prop-4',
        title: 'Office Space in London',
        titleAr: 'مساحة مكتبية في لندن',
        description: 'Prime location office space',
        descriptionAr: 'مساحة مكتبية في موقع مميز',
        price: 5500,
        currency: 'USD',
        images: ['https://example.com/office-london.jpg'],
        location: 'London, UK',
        locationAr: 'لندن، بريطانيا',
        category: 'Properties',
        categoryAr: 'عقارات',
        condition: 'used',
        postedDate: '2024-09-10T00:00:00Z',
        isFeatured: false,
        contactInfo: {
          phone: '+44 20 1234 5678',
          showPhone: true
        },
        seller: {
          name: 'London Properties Ltd',
          joinedDate: '2018-11-05',
          isVerified: true
        }
      }
    ]
  },
  {
    id: 'cars-for-sale',
    title: 'Cars for Sale',
    titleAr: 'سيارات للبيع',
    ads: [
      {
        id: 'car-1',
        title: 'Toyota Corolla 2019',
        titleAr: 'تويوتا كورولا 2019',
        description: 'Excellent condition, low mileage',
        descriptionAr: 'حالة ممتازة، مسافة قليلة',
        price: 18500,
        currency: 'USD',
        images: ['https://example.com/corolla.jpg'],
        location: 'Beirut, Lebanon',
        locationAr: 'بيروت، لبنان',
        category: 'Cars',
        categoryAr: 'سيارات',
        condition: 'used',
        postedDate: '2024-09-10T00:00:00Z',
        isFeatured: true,
        contactInfo: {
          phone: '+961 1 234 567',
          showPhone: true
        },
        seller: {
          name: 'Ahmad Khalil',
          joinedDate: '2022-01-15',
          isVerified: true
        }
      },
      {
        id: 'car-2',
        title: 'Honda Civic 2020',
        titleAr: 'هوندا سيفيك 2020',
        description: 'Like new, single owner',
        descriptionAr: 'مثل الجديدة، مالك واحد',
        price: 22000,
        currency: 'USD',
        images: ['https://example.com/civic.jpg'],
        location: 'Jounieh, Lebanon',
        locationAr: 'جونيه، لبنان',
        category: 'Cars',
        categoryAr: 'سيارات',
        condition: 'used',
        postedDate: '2024-09-11T00:00:00Z',
        isFeatured: false,
        contactInfo: {
          phone: '+961 9 876 543',
          showPhone: true
        },
        seller: {
          name: 'Maroun Saab',
          joinedDate: '2021-08-20',
          isVerified: true
        }
      },
      {
        id: 'car-3',
        title: 'BMW X3 2018',
        titleAr: 'بي إم دبليو X3 2018',
        description: 'Luxury SUV in great condition',
        descriptionAr: 'سيارة دفع رباعي فاخرة بحالة ممتازة',
        price: 35000,
        currency: 'USD',
        images: ['https://example.com/bmw-x3.jpg'],
        location: 'Achrafieh, Lebanon',
        locationAr: 'الأشرفية، لبنان',
        category: 'Cars',
        categoryAr: 'سيارات',
        condition: 'used',
        postedDate: '2024-09-09T00:00:00Z',
        isFeatured: true,
        contactInfo: {
          phone: '+961 1 345 678',
          showPhone: true
        },
        seller: {
          name: 'Tony Motors',
          joinedDate: '2020-05-10',
          isVerified: true
        }
      },
      {
        id: 'car-4',
        title: 'Nissan Altima 2021',
        titleAr: 'نيسان التيما 2021',
        description: 'Low mileage, excellent condition',
        descriptionAr: 'مسافة قليلة، حالة ممتازة',
        price: 25000,
        currency: 'USD',
        images: ['https://example.com/altima.jpg'],
        location: 'Tripoli, Lebanon',
        locationAr: 'طرابلس، لبنان',
        category: 'Cars',
        categoryAr: 'سيارات',
        condition: 'used',
        postedDate: '2024-09-12T00:00:00Z',
        isFeatured: false,
        contactInfo: {
          phone: '+961 6 234 567',
          showPhone: true
        },
        seller: {
          name: 'Hassan Auto',
          joinedDate: '2019-12-01',
          isVerified: true
        }
      }
    ]
  },
  {
    id: 'apartments-villas-rent',
    title: 'Apartments & Villas For Rent',
    titleAr: 'شقق وفيلل للإيجار',
    ads: [
      {
        id: 'rent-apt-1',
        title: '2 Bedroom Apartment in Achrafieh',
        titleAr: 'شقة غرفتي نوم في الأشرفية',
        description: 'Furnished apartment with balcony',
        descriptionAr: 'شقة مفروشة مع شرفة',
        price: 1200,
        currency: 'USD',
        images: ['https://example.com/apt-achrafieh.jpg'],
        location: 'Achrafieh, Beirut',
        locationAr: 'الأشرفية، بيروت',
        category: 'Apartments',
        categoryAr: 'شقق',
        condition: 'new',
        postedDate: '2024-09-12T00:00:00Z',
        isFeatured: true,
        contactInfo: {
          phone: '+961 1 456 789',
          showPhone: true
        },
        seller: {
          name: 'Real Estate Plus',
          joinedDate: '2021-04-15',
          isVerified: true
        }
      },
      {
        id: 'rent-villa-1',
        title: 'Villa with Pool in Jounieh',
        titleAr: 'فيلا مع مسبح في جونيه',
        description: 'Luxury villa with sea view',
        descriptionAr: 'فيلا فاخرة مع إطلالة بحرية',
        price: 3500,
        currency: 'USD',
        images: ['https://example.com/villa-jounieh.jpg'],
        location: 'Jounieh, Mount Lebanon',
        locationAr: 'جونيه، جبل لبنان',
        category: 'Villas',
        categoryAr: 'فيلل',
        condition: 'used',
        postedDate: '2024-09-11T00:00:00Z',
        isFeatured: false,
        contactInfo: {
          phone: '+961 9 567 890',
          showPhone: true
        },
        seller: {
          name: 'Coastal Properties',
          joinedDate: '2020-07-22',
          isVerified: true
        }
      },
      {
        id: 'rent-apt-2',
        title: 'Studio Apartment in Hamra',
        titleAr: 'شقة استوديو في الحمرا',
        description: 'Cozy studio near AUB',
        descriptionAr: 'استوديو مريح قرب الجامعة الأمريكية',
        price: 800,
        currency: 'USD',
        images: ['https://example.com/studio-hamra.jpg'],
        location: 'Hamra, Beirut',
        locationAr: 'الحمرا، بيروت',
        category: 'Apartments',
        categoryAr: 'شقق',
        condition: 'used',
        postedDate: '2024-09-10T00:00:00Z',
        isFeatured: false,
        contactInfo: {
          phone: '+961 1 678 901',
          showPhone: true
        },
        seller: {
          name: 'Hamra Rentals',
          joinedDate: '2022-02-10',
          isVerified: false
        }
      },
      {
        id: 'rent-apt-3',
        title: '3 Bedroom Apartment in Verdun',
        titleAr: 'شقة 3 غرف نوم في فردان',
        description: 'Modern apartment with parking',
        descriptionAr: 'شقة حديثة مع موقف سيارة',
        price: 2000,
        currency: 'USD',
        images: ['https://example.com/apt-verdun.jpg'],
        location: 'Verdun, Beirut',
        locationAr: 'فردان، بيروت',
        category: 'Apartments',
        categoryAr: 'شقق',
        condition: 'new',
        postedDate: '2024-09-09T00:00:00Z',
        isFeatured: true,
        contactInfo: {
          phone: '+961 1 789 012',
          showPhone: true
        },
        seller: {
          name: 'Verdun Properties',
          joinedDate: '2019-11-30',
          isVerified: true
        }
      }
    ]
  },
  {
    id: 'mobile-phones',
    title: 'Mobile Phones',
    titleAr: 'هواتف محمولة',
    ads: [
      {
        id: 'phone-1',
        title: 'iPhone 14 Pro Max',
        titleAr: 'ايفون 14 برو ماكس',
        description: 'Brand new, 256GB, Space Black',
        descriptionAr: 'جديد تماماً، 256 جيجا، أسود فضائي',
        price: 1200,
        currency: 'USD',
        images: ['https://example.com/iphone14.jpg'],
        location: 'Beirut, Lebanon',
        locationAr: 'بيروت، لبنان',
        category: 'Mobile Phones',
        categoryAr: 'هواتف محمولة',
        condition: 'new',
        postedDate: '2024-09-13T00:00:00Z',
        isFeatured: true,
        contactInfo: {
          phone: '+961 1 987 654',
          showPhone: true
        },
        seller: {
          name: 'Tech Store',
          joinedDate: '2020-03-20',
          isVerified: true
        }
      },
      {
        id: 'phone-2',
        title: 'Samsung Galaxy S23',
        titleAr: 'سامسونغ غالاكسي S23',
        description: 'Excellent condition, 128GB',
        descriptionAr: 'حالة ممتازة، 128 جيجا',
        price: 800,
        currency: 'USD',
        images: ['https://example.com/galaxy-s23.jpg'],
        location: 'Jounieh, Lebanon',
        locationAr: 'جونيه، لبنان',
        category: 'Mobile Phones',
        categoryAr: 'هواتف محمولة',
        condition: 'used',
        postedDate: '2024-09-12T00:00:00Z',
        isFeatured: false,
        contactInfo: {
          phone: '+961 9 123 456',
          showPhone: true
        },
        seller: {
          name: 'Mobile World',
          joinedDate: '2021-07-10',
          isVerified: true
        }
      },
      {
        id: 'phone-3',
        title: 'Google Pixel 7',
        titleAr: 'جوجل بيكسل 7',
        description: 'Unlocked, great camera',
        descriptionAr: 'غير مقفل، كاميرا رائعة',
        price: 550,
        currency: 'USD',
        images: ['https://example.com/pixel7.jpg'],
        location: 'Tripoli, Lebanon',
        locationAr: 'طرابلس، لبنان',
        category: 'Mobile Phones',
        categoryAr: 'هواتف محمولة',
        condition: 'used',
        postedDate: '2024-09-11T00:00:00Z',
        isFeatured: false,
        contactInfo: {
          phone: '+961 6 789 012',
          showPhone: true
        },
        seller: {
          name: 'Phone Hub',
          joinedDate: '2022-05-15',
          isVerified: false
        }
      },
      {
        id: 'phone-4',
        title: 'OnePlus 11',
        titleAr: 'ون بلس 11',
        description: 'Fast charging, gaming phone',
        descriptionAr: 'شحن سريع، هاتف ألعاب',
        price: 700,
        currency: 'USD',
        images: ['https://example.com/oneplus11.jpg'],
        location: 'Sidon, Lebanon',
        locationAr: 'صيدا، لبنان',
        category: 'Mobile Phones',
        categoryAr: 'هواتف محمولة',
        condition: 'new',
        postedDate: '2024-09-10T00:00:00Z',
        isFeatured: true,
        contactInfo: {
          phone: '+961 7 345 678',
          showPhone: true
        },
        seller: {
          name: 'Digital Plus',
          joinedDate: '2021-12-01',
          isVerified: true
        }
      }
    ]
  },

  {
    id: 'apartments-villas-sale',
    title: 'Apartments & Villas For Sale',
    titleAr: 'شقق وفيلات للبيع',
    ads: [
      {
        id: 'sale-apt-1',
        title: 'Modern Apartment in Beirut',
        titleAr: 'شقة حديثة في بيروت',
        description: '3-bedroom apartment with modern amenities',
        descriptionAr: 'شقة 3 غرف نوم مع مرافق حديثة',
        price: 485000,
        currency: 'USD',
        images: ['https://example.com/apt1.jpg'],
        location: 'Beirut, Lebanon',
        locationAr: 'بيروت، لبنان',
        category: 'Real Estate',
        categoryAr: 'عقارات',
        condition: 'new',
        postedDate: '2024-09-10',
        isFeatured: true,
        contactInfo: {
          phone: '+961 1 456 789',
          showPhone: true
        },
        seller: {
          name: 'Beirut Properties',
          joinedDate: '2020-05-15',
          isVerified: true
        }
      },
      {
        id: 'sale-villa-1',
        title: 'Luxury Villa in Jounieh',
        titleAr: 'فيلا فاخرة في جونية',
        description: 'Stunning villa with panoramic sea view',
        descriptionAr: 'فيلا مذهلة مع إطلالة بحرية بانورامية',
        price: 850000,
        currency: 'USD',
        images: ['https://example.com/villa1.jpg'],
        location: 'Jounieh, Lebanon',
        locationAr: 'جونية، لبنان',
        category: 'Real Estate',
        categoryAr: 'عقارات',
        condition: 'new',
        postedDate: '2024-09-08',
        isFeatured: false,
        contactInfo: {
          phone: '+961 9 234 567',
          showPhone: true
        },
        seller: {
          name: 'Premium Homes',
          joinedDate: '2019-03-20',
          isVerified: true
        }
      },
      {
        id: 'sale-apt-2',
        title: 'Penthouse in Ashrafieh',
        titleAr: 'بنتهاوس في الأشرفية',
        description: 'Luxury penthouse with private terrace',
        descriptionAr: 'بنتهاوس فاخر مع تراس خاص',
        price: 720000,
        currency: 'USD',
        images: ['https://example.com/penthouse1.jpg'],
        location: 'Ashrafieh, Lebanon',
        locationAr: 'الأشرفية، لبنان',
        category: 'Real Estate',
        categoryAr: 'عقارات',
        condition: 'new',
        postedDate: '2024-09-05',
        isFeatured: true,
        contactInfo: {
          phone: '+961 1 789 123',
          showPhone: true
        },
        seller: {
          name: 'Elite Properties',
          joinedDate: '2021-01-10',
          isVerified: true
        }
      },
      {
        id: 'sale-apt-3',
        title: 'Apartment in Hamra',
        titleAr: 'شقة في الحمرا',
        description: '2-bedroom apartment in prime location',
        descriptionAr: 'شقة غرفتين نوم في موقع مميز',
        price: 320000,
        currency: 'USD',
        images: ['https://example.com/hamra1.jpg'],
        location: 'Hamra, Lebanon',
        locationAr: 'الحمرا، لبنان',
        category: 'Real Estate',
        categoryAr: 'عقارات',
        condition: 'used',
        postedDate: '2024-09-02',
        isFeatured: false,
        contactInfo: {
          phone: '+961 1 456 321',
          showPhone: true
        },
        seller: {
          name: 'Hamra Realty',
          joinedDate: '2020-11-08',
          isVerified: false
        }
      }
    ]
  },

  {
    id: 'motorcycles-atvs',
    title: 'Motorcycles & ATVs',
    titleAr: 'دراجات نارية ومركبات رباعية',
    ads: [
      {
        id: 'moto-1',
        title: 'Yamaha YZF-R3 2023',
        titleAr: 'ياماها YZF-R3 2023',
        description: 'Sport motorcycle in excellent condition',
        descriptionAr: 'دراجة نارية رياضية في حالة ممتازة',
        price: 4800,
        currency: 'USD',
        images: ['https://example.com/yamaha1.jpg'],
        location: 'Beirut, Lebanon',
        locationAr: 'بيروت، لبنان',
        category: 'Vehicles',
        categoryAr: 'مركبات',
        condition: 'used',
        postedDate: '2024-09-12',
        isFeatured: false,
        contactInfo: {
          phone: '+961 3 789 456',
          showPhone: true
        },
        seller: {
          name: 'Moto Expert',
          joinedDate: '2020-07-15',
          isVerified: true
        }
      },
      {
        id: 'atv-1',
        title: 'Honda TRX450R ATV',
        titleAr: 'هوندا TRX450R مركبة رباعية',
        description: 'Powerful ATV for off-road adventures',
        descriptionAr: 'مركبة رباعية قوية للمغامرات الوعرة',
        price: 6200,
        currency: 'USD',
        images: ['https://example.com/honda-atv1.jpg'],
        location: 'Jounieh, Lebanon',
        locationAr: 'جونية، لبنان',
        category: 'Vehicles',
        categoryAr: 'مركبات',
        condition: 'used',
        postedDate: '2024-09-09',
        isFeatured: true,
        contactInfo: {
          phone: '+961 9 654 321',
          showPhone: true
        },
        seller: {
          name: 'Adventure Rides',
          joinedDate: '2021-04-20',
          isVerified: true
        }
      },
      {
        id: 'moto-2',
        title: 'Kawasaki Ninja 300',
        titleAr: 'كاواساكي نينجا 300',
        description: 'Beginner-friendly sport bike',
        descriptionAr: 'دراجة رياضية مناسبة للمبتدئين',
        price: 3500,
        currency: 'USD',
        images: ['https://example.com/kawasaki1.jpg'],
        location: 'Tripoli, Lebanon',
        locationAr: 'طرابلس، لبنان',
        category: 'Vehicles',
        categoryAr: 'مركبات',
        condition: 'used',
        postedDate: '2024-09-06',
        isFeatured: false,
        contactInfo: {
          phone: '+961 6 987 654',
          showPhone: true
        },
        seller: {
          name: 'Speed Motors',
          joinedDate: '2019-09-12',
          isVerified: false
        }
      },
      {
        id: 'moto-3',
        title: 'Suzuki GSX-R600',
        titleAr: 'سوزوكي GSX-R600',
        description: 'High-performance racing motorcycle',
        descriptionAr: 'دراجة نارية عالية الأداء للسباق',
        price: 7800,
        currency: 'USD',
        images: ['https://example.com/suzuki1.jpg'],
        location: 'Sidon, Lebanon',
        locationAr: 'صيدا، لبنان',
        category: 'Vehicles',
        categoryAr: 'مركبات',
        condition: 'used',
        postedDate: '2024-09-03',
        isFeatured: true,
        contactInfo: {
          phone: '+961 7 345 789',
          showPhone: true
        },
        seller: {
          name: 'Racing Pro',
          joinedDate: '2020-12-05',
          isVerified: true
        }
      }
    ]
  },

  {
    id: 'ac-cooling-heating',
    title: 'AC, Cooling & Heating',
    titleAr: 'تكييف وتبريد وتدفئة',
    ads: [
      {
        id: 'ac-1',
        title: 'LG Dual Inverter AC 1.5 Ton',
        titleAr: 'مكيف LG دوال انفيرتر 1.5 طن',
        description: 'Energy efficient split AC unit',
        descriptionAr: 'وحدة تكييف منفصلة موفرة للطاقة',
        price: 650,
        currency: 'USD',
        images: ['https://example.com/lg-ac1.jpg'],
        location: 'Beirut, Lebanon',
        locationAr: 'بيروت، لبنان',
        category: 'Electronics',
        categoryAr: 'إلكترونيات',
        condition: 'new',
        postedDate: '2024-09-11',
        isFeatured: false,
        contactInfo: {
          phone: '+961 1 234 567',
          showPhone: true
        },
        seller: {
          name: 'Cool Tech',
          joinedDate: '2021-06-18',
          isVerified: true
        }
      },
      {
        id: 'heater-1',
        title: 'Electric Panel Heater 2000W',
        titleAr: 'سخان لوحة كهربائي 2000 واط',
        description: 'Wall-mounted electric heater with thermostat',
        descriptionAr: 'سخان كهربائي للحائط مع منظم حرارة',
        price: 120,
        currency: 'USD',
        images: ['https://example.com/heater1.jpg'],
        location: 'Jounieh, Lebanon',
        locationAr: 'جونية، لبنان',
        category: 'Electronics',
        categoryAr: 'إلكترونيات',
        condition: 'used',
        postedDate: '2024-09-07',
        isFeatured: false,
        contactInfo: {
          phone: '+961 9 876 543',
          showPhone: true
        },
        seller: {
          name: 'Home Comfort',
          joinedDate: '2020-10-25',
          isVerified: false
        }
      },
      {
        id: 'ac-2',
        title: 'Samsung Wind-Free AC 2 Ton',
        titleAr: 'مكيف سامسونج وند فري 2 طن',
        description: 'Advanced cooling technology without direct airflow',
        descriptionAr: 'تقنية تبريد متطورة بدون تدفق هواء مباشر',
        price: 890,
        currency: 'USD',
        images: ['https://example.com/samsung-ac1.jpg'],
        location: 'Ashrafieh, Lebanon',
        locationAr: 'الأشرفية، لبنان',
        category: 'Electronics',
        categoryAr: 'إلكترونيات',
        condition: 'new',
        postedDate: '2024-09-04',
        isFeatured: true,
        contactInfo: {
          phone: '+961 1 456 789',
          showPhone: true
        },
        seller: {
          name: 'Premium Electronics',
          joinedDate: '2019-08-14',
          isVerified: true
        }
      },
      {
        id: 'fan-1',
        title: 'Ceiling Fan with Remote Control',
        titleAr: 'مروحة سقف مع ريموت كنترول',
        description: '52-inch ceiling fan with LED lighting',
        descriptionAr: 'مروحة سقف 52 انش مع إضاءة LED',
        price: 85,
        currency: 'USD',
        images: ['https://example.com/ceiling-fan1.jpg'],
        location: 'Tripoli, Lebanon',
        locationAr: 'طرابلس، لبنان',
        category: 'Electronics',
        categoryAr: 'إلكترونيات',
        condition: 'used',
        postedDate: '2024-09-01',
        isFeatured: false,
        contactInfo: {
          phone: '+961 6 123 456',
          showPhone: true
        },
        seller: {
          name: 'Fan World',
          joinedDate: '2021-02-28',
          isVerified: false
        }
      }
    ]
  },

  {
    id: 'laptops-tablets-computers',
    title: 'Laptops, Tablets & Computers',
    titleAr: 'لابتوب وتابلت وكمبيوتر',
    ads: [
      {
        id: 'laptop-1',
        title: 'MacBook Pro 14" M2 Pro',
        titleAr: 'ماك بوك برو 14 انش M2 برو',
        description: 'Latest MacBook Pro with M2 Pro chip, 16GB RAM, 512GB SSD',
        descriptionAr: 'أحدث ماك بوك برو مع معالج M2 برو، 16 جيجا رام، 512 جيجا SSD',
        price: 2200,
        currency: 'USD',
        images: ['https://example.com/macbook1.jpg'],
        location: 'Beirut, Lebanon',
        locationAr: 'بيروت، لبنان',
        category: 'Electronics',
        categoryAr: 'إلكترونيات',
        condition: 'used',
        postedDate: '2024-09-13',
        isFeatured: true,
        contactInfo: {
          phone: '+961 3 567 890',
          showPhone: true
        },
        seller: {
          name: 'Tech Expert',
          joinedDate: '2020-04-12',
          isVerified: true
        }
      },
      {
        id: 'tablet-1',
        title: 'iPad Air 5th Gen 256GB',
        titleAr: 'آيباد إير الجيل الخامس 256 جيجا',
        description: 'Apple iPad Air with M1 chip and Apple Pencil support',
        descriptionAr: 'آيباد إير أبل مع معالج M1 ودعم قلم أبل',
        price: 650,
        currency: 'USD',
        images: ['https://example.com/ipad1.jpg'],
        location: 'Jounieh, Lebanon',
        locationAr: 'جونية، لبنان',
        category: 'Electronics',
        categoryAr: 'إلكترونيات',
        condition: 'used',
        postedDate: '2024-09-10',
        isFeatured: false,
        contactInfo: {
          phone: '+961 9 234 567',
          showPhone: true
        },
        seller: {
          name: 'Mobile Plus',
          joinedDate: '2021-07-22',
          isVerified: true
        }
      },
      {
        id: 'desktop-1',
        title: 'Gaming PC - RTX 4070 + i7',
        titleAr: 'كمبيوتر العاب - RTX 4070 + i7',
        description: 'High-end gaming desktop with RTX 4070, Intel i7-13700K, 32GB RAM',
        descriptionAr: 'كمبيوتر العاب عالي الجودة مع RTX 4070، Intel i7-13700K، 32 جيجا رام',
        price: 1850,
        currency: 'USD',
        images: ['https://example.com/gaming-pc1.jpg'],
        location: 'Ashrafieh, Lebanon',
        locationAr: 'الأشرفية، لبنان',
        category: 'Electronics',
        categoryAr: 'إلكترونيات',
        condition: 'new',
        postedDate: '2024-09-08',
        isFeatured: true,
        contactInfo: {
          phone: '+961 1 789 012',
          showPhone: true
        },
        seller: {
          name: 'Gaming Zone',
          joinedDate: '2019-11-30',
          isVerified: true
        }
      },
      {
        id: 'laptop-2',
        title: 'ASUS ROG Strix G15',
        titleAr: 'اسوس ROG Strix G15',
        description: 'Gaming laptop with RTX 3060, AMD Ryzen 7, 16GB RAM',
        descriptionAr: 'لابتوب العاب مع RTX 3060، AMD Ryzen 7، 16 جيجا رام',
        price: 1200,
        currency: 'USD',
        images: ['https://example.com/asus-rog1.jpg'],
        location: 'Sidon, Lebanon',
        locationAr: 'صيدا، لبنان',
        category: 'Electronics',
        categoryAr: 'إلكترونيات',
        condition: 'used',
        postedDate: '2024-09-05',
        isFeatured: false,
        contactInfo: {
          phone: '+961 7 456 123',
          showPhone: true
        },
        seller: {
          name: 'Laptop Store',
          joinedDate: '2020-09-17',
          isVerified: false
        }
      }
    ]
  }
];

export const getDaysAgo = (dateString: string): string => {
  const posted = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - posted.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return '1 day ago';
  return `${diffDays} days ago`;
};