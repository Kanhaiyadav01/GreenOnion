export interface RestaurantInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  address: string;
  addressShort: string;
  mapLink: string;
  mapEmbedUrl: string;
  instagram: string;
  facebook: string;
}

export interface BusinessHours {
  weekdays: string;
  weekends: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  isVeg: boolean;
  category: string;
  description?: string;
  image?: string;
  isPopular?: boolean;
  priceUnconfirmed?: boolean;
  halfPrice?: number;
  fullPrice?: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  date: string;
  location: string;
}

export const restaurantInfo: RestaurantInfo = {
  name: "Green Onions Restaurant",
  tagline: "Madhubani's Best Family Restaurant",
  phone: "+919155512345",
  phoneFormatted: "+91 91555 12345",
  whatsapp: "+919155512345",
  address: "Station Road, Near Station Chowk, Ward No. 12, Madhubani, Bihar 847211",
  addressShort: "Station Road, Madhubani, Bihar",
  mapLink: "https://maps.google.com/?q=Green+Onions+Restaurant+Station+Road+Madhubani",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.6083549249767!2d86.0792345!3d26.3479102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edc5eb051910ef%3A0xe4a193630f9a74de!2sStation+Chowk%2C+Madhubani%2C+Bihar+847211!5e0!3m2!1sen!2sin!4v1625780000000",
  instagram: "https://instagram.com/greenonions_madhubani",
  facebook: "https://facebook.com/greenonionsmadhubani",
};

export const businessHours: BusinessHours = {
  weekdays: "11:00 AM - 10:30 PM",
  weekends: "11:00 AM - 11:00 PM",
};

export const features: FeatureItem[] = [
  {
    id: "fresh",
    title: "100% Fresh Ingredients",
    description: "We source local organic produce daily to ensure maximum flavor and nutrition in every bite.",
    iconName: "Leaf"
  },
  {
    id: "family",
    title: "Family Friendly Seating",
    description: "Spacious, comfortable seating designed for family gatherings, celebrations, and warm memories.",
    iconName: "Users"
  },
  {
    id: "delivery",
    title: "Self Delivery in City",
    description: "Our in-house delivery agents guarantee hot, fresh food delivered straight to your doorstep.",
    iconName: "Bike"
  },
  {
    id: "hygiene",
    title: "Hygienic Kitchen",
    description: "Strict quality control, clean preparation surfaces, and routine safety audits are our top priority.",
    iconName: "Sparkles"
  },
  {
    id: "location",
    title: "Prime Station Road Location",
    description: "Centrally located near Station Chowk, with ample parking and easy access for all of Madhubani.",
    iconName: "MapPin"
  },
  {
    id: "hospitality",
    title: "Warm Bihari Hospitality",
    description: "A friendly and professional service team committed to giving you a high-class, memorable dining experience.",
    iconName: "Heart"
  }
];

export const fullMenu: MenuItem[] = [
  // --- BIRYANI ---
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    price: 210,
    isVeg: false,
    category: "Biryani",
    description: "Classic basmati rice biryani cooked dum-style with juicy chicken pieces, aromatic herbs, and standard spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "mutton-dum-biryani",
    name: "Mutton Dum Biryani",
    price: 265,
    isVeg: false,
    category: "Biryani",
    description: "Tender goat meat slow-cooked with basmati rice, saffron, and house biryani spices in a traditional sealed clay pot.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "egg-biryani",
    name: "Egg Biryani",
    price: 175,
    isVeg: false,
    category: "Biryani",
    description: "Fragrant basmati rice cooked with boiled eggs, crispy fried onions, and flavorful biryani spices."
  },
  {
    id: "veg-biryani",
    name: "Veg Dum Biryani",
    price: 175,
    isVeg: true,
    category: "Biryani",
    description: "Assorted fresh seasonal vegetables and soft paneer cooked with basmati rice, fresh mint, and dum spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "chefs-special-chicken-biryani",
    name: "Chef's Special Chicken Biryani",
    price: 275,
    isVeg: false,
    category: "Biryani",
    description: "Chef's signature biryani layered with extra chicken, boiled egg, rich spices, and saffron.",
    isPopular: true
  },
  {
    id: "extra-piece",
    name: "Extra Piece (Chicken/Mutton)",
    price: 75,
    isVeg: false,
    category: "Biryani",
    description: "Add an extra piece of succulent chicken or mutton to your biryani."
  },
  {
    id: "extra-raita",
    name: "Extra Raita",
    price: 20,
    isVeg: true,
    category: "Biryani",
    description: "Cool and refreshing yogurt whisked with cucumber, cumin, and coriander."
  },
  {
    id: "salan",
    name: "Mirchi Ka Salan",
    price: 20,
    isVeg: false,
    category: "Biryani",
    description: "Traditional spicy pepper and peanut gravy to pair with your biryani."
  },

  // --- HOT TANDOOR ---
  {
    id: "chicken-tandoori",
    name: "Chicken Tandoori",
    price: 225,
    isVeg: false,
    category: "Hot Tandoor",
    description: "Juicy chicken bone-in pieces marinated in tandoori yogurt spice blend, roasted in a clay oven.",
    halfPrice: 225,
    fullPrice: 390,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d90f9b?q=80&w=600&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "chicken-tangri-kebab",
    name: "Chicken Tangri Kebab",
    price: 225,
    isVeg: false,
    category: "Hot Tandoor",
    description: "Plump chicken drumsticks marinated in rich tandoori herbs, slow-cooked in the clay tandoor.",
    halfPrice: 225,
    fullPrice: 390
  },
  {
    id: "chicken-tikka",
    name: "Chicken Tikka",
    price: 225,
    isVeg: false,
    category: "Hot Tandoor",
    description: "Boneless chicken pieces skewered and roasted with spices, served with mint chutney."
  },
  {
    id: "chicken-hariyali-tikka",
    name: "Chicken Hariyali Tikka",
    price: 225,
    isVeg: false,
    category: "Hot Tandoor",
    description: "Skewered chicken chunks marinated in a vibrant green spinach, mint, and coriander paste."
  },
  {
    id: "chicken-kali-mirch-tikka",
    name: "Chicken Kali Mirch Tikka",
    price: 250,
    isVeg: false,
    category: "Hot Tandoor",
    description: "Roasted chicken chunks flavored heavily with freshly crushed black peppercorns and cream."
  },
  {
    id: "chicken-malai-tikka",
    name: "Chicken Malai Tikka",
    price: 250,
    isVeg: false,
    category: "Hot Tandoor",
    description: "Melt-in-your-mouth chicken bites marinated in cream, cheese, cardamom, and white pepper."
  },
  {
    id: "chicken-seekh-kebab",
    name: "Chicken Seekh Kebab",
    price: 250,
    isVeg: false,
    category: "Hot Tandoor",
    description: "Spiced minced chicken skewered and grilled, served with fresh onions and lemon."
  },
  {
    id: "chicken-reshmi-kebab",
    name: "Chicken Reshmi Kebab",
    price: 250,
    isVeg: false,
    category: "Hot Tandoor",
    description: "Skewered chicken marinated in curd, cream, and egg white to create a silky, smooth texture."
  },
  {
    id: "chicken-banzara-kebab",
    name: "Chicken Banzara Kebab",
    price: 250,
    isVeg: false,
    category: "Hot Tandoor",
    description: "Traditional spicy gypsy-style skewered chicken, roasted with rustic herbs."
  },
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    price: 125,
    isVeg: true,
    category: "Hot Tandoor",
    description: "Soft fresh paneer cubes skewered with bell peppers and onions, grilled with spices.",
    halfPrice: 125,
    fullPrice: 200,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "paneer-hariyali-tikka",
    name: "Paneer Hariyali Tikka",
    price: 135,
    isVeg: true,
    category: "Hot Tandoor",
    description: "Fresh paneer chunks marinated in herb-spinach paste, roasted in tandoor.",
    halfPrice: 135,
    fullPrice: 200
  },
  {
    id: "paneer-malai-tikka",
    name: "Paneer Malai Tikka",
    price: 250,
    isVeg: true,
    category: "Hot Tandoor",
    description: "Paneer marinated in rich cashew paste, cheese, and cream, grilled to a golden hue."
  },

  // --- SOUPS ---
  {
    id: "manchow-soup-veg",
    name: "Veg Manchow Soup",
    price: 100,
    isVeg: true,
    category: "Soups",
    description: "Hot and spicy dark brown soup loaded with minced vegetables, ginger, garlic, and crispy noodles."
  },
  {
    id: "manchow-soup-nonveg",
    name: "Chicken Manchow Soup",
    price: 120,
    isVeg: false,
    category: "Soups",
    description: "Spicy garlic-soy broth with chicken shreds, egg whites, and topped with fried noodles."
  },
  {
    id: "hot-n-sour-soup-veg",
    name: "Veg Hot-N-Sour Soup",
    price: 100,
    isVeg: true,
    category: "Soups",
    description: "Classic Chinese soup with hot vinegar and chili oil balance, chopped vegetables, and mushrooms."
  },
  {
    id: "hot-n-sour-soup-nonveg",
    name: "Chicken Hot-N-Sour Soup",
    price: 120,
    isVeg: false,
    category: "Soups",
    description: "Tangy and fiery pepper broth filled with chicken strips and chopped veggies."
  },
  {
    id: "sweet-corn-soup-veg",
    name: "Veg Sweet Corn Soup",
    price: 100,
    isVeg: true,
    category: "Soups",
    description: "Creamy, comforting soup made with sweet corn kernels and minced seasonal veggies."
  },
  {
    id: "sweet-corn-soup-nonveg",
    name: "Chicken Sweet Corn Soup",
    price: 120,
    isVeg: false,
    category: "Soups",
    description: "Delicate and sweet cream corn broth cooked with shredded chicken and egg drops."
  },
  {
    id: "lemon-coriander-soup-veg",
    name: "Veg Lemon Coriander Soup",
    price: 100,
    isVeg: true,
    category: "Soups",
    description: "Light, clear vegetable soup infused with fresh lime juice and freshly chopped green coriander."
  },
  {
    id: "lemon-coriander-soup-nonveg",
    name: "Chicken Lemon Coriander Soup",
    price: 120,
    isVeg: false,
    category: "Soups",
    description: "Zesty clear soup containing chicken bits, celery, lime juice, and loaded coriander."
  },
  {
    id: "cream-of-tomato",
    name: "Cream of Tomato Soup",
    price: 100,
    isVeg: true,
    category: "Soups",
    description: "Velvety puréed tomato soup seasoned with pepper, topped with crisp buttered croutons."
  },

  // --- NOODLES & FRIED RICE ---
  {
    id: "noodles-veg",
    name: "Veg Noodles",
    price: 125,
    isVeg: true,
    category: "Noodles & Fried Rice",
    description: "Stir-fried noodles with crisp carrot, cabbage, onion, and bell pepper, seasoned with soy sauce."
  },
  {
    id: "noodles-paneer",
    name: "Paneer Noodles",
    price: 150,
    isVeg: true,
    category: "Noodles & Fried Rice",
    description: "Delicious wok-tossed noodles stir-fried with paneer chunks and crunchy veggies."
  },
  {
    id: "fried-rice-veg",
    name: "Veg Fried Rice",
    price: 175,
    isVeg: true,
    category: "Noodles & Fried Rice",
    description: "Fluffy steamed rice stir-fried in a hot wok with finely chopped vegetables and soy sauce."
  },
  {
    id: "schezwan-rice-veg",
    name: "Schezwan Fried Rice (Veg)",
    price: 220,
    isVeg: true,
    category: "Noodles & Fried Rice",
    description: "Spicy wok-tossed rice flavored with fiery Schezwan paste and assorted vegetables."
  },
  {
    id: "noodles-chicken",
    name: "Chicken Noodles",
    price: 160,
    isVeg: false,
    category: "Noodles & Fried Rice",
    description: "Wok-tossed noodles cooked with egg shreds, shredded chicken, and fresh vegetables.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "noodles-egg",
    name: "Egg Noodles",
    price: 150,
    isVeg: false,
    category: "Noodles & Fried Rice",
    description: "Stir-fried noodles cooked with scrambled egg chunks, capsicum, and cabbage."
  },
  {
    id: "fried-rice-nonveg",
    name: "Chicken Fried Rice",
    price: 210,
    isVeg: false,
    category: "Noodles & Fried Rice",
    description: "Wok-tossed rice stir-fried with diced chicken pieces, egg shreds, and spices."
  },
  {
    id: "schezwan-rice-nonveg",
    name: "Schezwan Fried Rice (Chicken)",
    price: 240,
    isVeg: false,
    category: "Noodles & Fried Rice",
    description: "Spicy, zesty fried rice cooked with shredded chicken and hot Schezwan chilli garlic paste."
  },
  {
    id: "chicken-egg-noodles",
    name: "Chicken Egg Noodles",
    price: 165,
    isVeg: false,
    category: "Noodles & Fried Rice",
    description: "Egg-coated noodles stir-fried with chicken cubes, bell peppers, and soy sauce.",
    priceUnconfirmed: true /* Confirm price with owner */
  },

  // --- MOMOS ---
  {
    id: "momo-veg-steam",
    name: "Veg Momos (Steam/Fry)",
    price: 120,
    isVeg: true,
    category: "Momos",
    description: "Delicate dumplings stuffed with minced fresh cabbage, onion, and carrots. Available steamed or fried.",
    halfPrice: 120,
    fullPrice: 135
  },
  {
    id: "momo-paneer-steam",
    name: "Paneer Momos (Steam/Fry)",
    price: 140,
    isVeg: true,
    category: "Momos",
    description: "Dumplings stuffed with spiced grated paneer and herbs. Available steamed or fried.",
    halfPrice: 140,
    fullPrice: 150
  },
  {
    id: "momo-veg-kurkure",
    name: "Veg Kur-Kure Momos",
    price: 210,
    isVeg: true,
    category: "Momos",
    description: "Dumplings coated in a crispy, crunchy batter and deep-fried to golden brown."
  },
  {
    id: "momo-paneer-kurkure",
    name: "Paneer Kur-Kure Momos",
    price: 250,
    isVeg: true,
    category: "Momos",
    description: "Soft paneer momos dipped in tempura crunch batter and deep-fried."
  },
  {
    id: "momo-veg-jhol",
    name: "Jhol Momos (Veg)",
    price: 210,
    isVeg: true,
    category: "Momos",
    description: "Steamed momos served submerged in a cold, spicy sesame tomato sauce soup."
  },
  {
    id: "momo-veg-tandoori",
    name: "Tandoori Momos (Veg)",
    price: 210,
    isVeg: true,
    category: "Momos",
    description: "Dumplings marinated in tandoori yogurt mix and chargrilled in the tandoor oven."
  },
  {
    id: "momo-chicken-steam",
    name: "Chicken Momos (Steam/Fry)",
    price: 140,
    isVeg: false,
    category: "Momos",
    description: "Juicy minced chicken and herb-stuffed dumplings, steamed or fried.",
    halfPrice: 140,
    fullPrice: 150
  },
  {
    id: "momo-chicken-kurkure",
    name: "Chicken Kur-Kure Momos",
    price: 250,
    isVeg: false,
    category: "Momos",
    description: "Crispy-shelled deep-fried chicken momos coated in crunchy cornflakes batter."
  },
  {
    id: "momo-chicken-tandoori-placeholder",
    name: "Chicken Tandoori Momos",
    price: 260,
    isVeg: false,
    category: "Momos",
    description: "Chicken momos cooked in tandoor. (Item unlisted in photo - check with owner).",
    priceUnconfirmed: true
  },

  // --- CHINESE VEG ---
  {
    id: "honey-potato-chilli",
    name: "Honey Potato Crispy Chilli",
    price: 210,
    isVeg: true,
    category: "Chinese — Veg",
    description: "Crispy potato wedges tossed with green chillies, bell peppers, honey, and sesame seeds."
  },
  {
    id: "corn-salt-pepper-veg",
    name: "Corn Salt-N-Pepper",
    price: 240,
    isVeg: true,
    category: "Chinese — Veg",
    description: "Deep-fried sweet corn kernels tossed with black pepper, spring onions, garlic, and salt."
  },
  {
    id: "spring-roll-veg",
    name: "Spring Roll (Veg)",
    price: 190,
    isVeg: true,
    category: "Chinese — Veg",
    description: "Crispy thin wrappers rolled with sautéed julienne vegetables, served with sweet chilli dip."
  },
  {
    id: "paneer-chilli",
    name: "Paneer Chilli (Dry/Gravy)",
    price: 190,
    isVeg: true,
    category: "Chinese — Veg",
    description: "Paneer cubes tossed with onions and capsicum in green chilli, soy, and garlic sauce.",
    halfPrice: 130, // Gravy price
    fullPrice: 190, // Dry price
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "paneer-hong-kong",
    name: "Paneer Hong Kong Style",
    price: 210,
    isVeg: true,
    category: "Chinese — Veg",
    description: "Paneer wok-tossed with red dry chillies, cashew nuts, and sweet-spicy dark soy."
  },
  {
    id: "babycorn-chilli",
    name: "Baby Corn Crispy Chilli",
    price: 240,
    isVeg: true,
    category: "Chinese — Veg",
    description: "Crunchy batter-fried baby corn spears tossed with fresh capsicum and green chillies."
  },
  {
    id: "mushroom-chilli",
    name: "Mushroom Chilli (Dry/Gravy)",
    price: 240,
    isVeg: true,
    category: "Chinese — Veg",
    description: "Fresh button mushrooms tossed with green chillies, onions, garlic, and dark soy."
  },
  {
    id: "veg-manchurian",
    name: "Veg Manchurian (Dry/Gravy)",
    price: 225,
    isVeg: true,
    category: "Chinese — Veg",
    description: "Crispy mixed veg balls tossed in a thick soy ginger-garlic sauce.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "paneer-manchurian",
    name: "Paneer Manchurian (Dry/Gravy)",
    price: 240,
    isVeg: true,
    category: "Chinese — Veg",
    description: "Paneer dumplings fried and simmered in a savory, aromatic Manchurian gravy."
  },

  // --- CHINESE NON-VEG ---
  {
    id: "honey-crispy-chilli-chicken",
    name: "Honey Crispy Chilli Chicken",
    price: 260,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Crispy shredded chicken glazed in sweet honey and spicy red chilli sauce, sprinkled with sesame.",
    isPopular: true
  },
  {
    id: "corn-salt-pepper-chicken",
    name: "Corn Salt-N-Pepper (Chicken)",
    price: 240,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Crispy batter-fried chicken bites tossed with sweet corn, pepper, garlic, and scallions."
  },
  {
    id: "chicken-65",
    name: "Chicken 65",
    price: 220,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Fiery South-Indian style deep-fried chicken tempered with curry leaves and green chillies."
  },
  {
    id: "chicken-spring-roll",
    name: "Chicken Spring Roll",
    price: 210,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Crispy rolls filled with shredded roasted chicken, glass noodles, and vegetables."
  },
  {
    id: "chicken-hong-kong",
    name: "Chicken Hong Kong Style",
    price: 200,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Wok-tossed chicken chunks cooked with whole red chillies, cashew nuts, and dark soy."
  },
  {
    id: "chicken-chilli-boneless-dry",
    name: "Chicken Chilli Boneless (Dry)",
    price: 210,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Crispy boneless chicken chunks wok-tossed with capsicum, onion, and hot garlic soy sauce.",
    isPopular: true
  },
  {
    id: "chicken-chilli-boneless-gravy",
    name: "Chicken Chilli Boneless (Gravy)",
    price: 0,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Chicken Chilli in gravy. (Price cut off in photo - check with owner).",
    priceUnconfirmed: true
  },
  {
    id: "chicken-chilli-bone-dry",
    name: "Chicken Chilli Bone (Dry)",
    price: 210,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Bone-in fried chicken pieces tossed with thick soy chili glaze, garlic, and fresh peppers."
  },
  {
    id: "chicken-chilli-bone-gravy",
    name: "Chicken Chilli Bone (Gravy)",
    price: 0,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Chicken Chilli bone-in in gravy. (Price cut off in photo - check with owner).",
    priceUnconfirmed: true
  },
  {
    id: "chicken-lollipop",
    name: "Chicken Lollipop",
    price: 180,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Crispy chicken drums of heaven glazed in a spicy schezwan sauce. Available half (4 pcs) or full (8 pcs).",
    halfPrice: 180,
    fullPrice: 250,
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=600&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "chicken-garlic",
    name: "Chicken Garlic",
    price: 265,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Fried chicken pieces tossed in an intense sweet-and-sour ginger garlic glaze."
  },
  {
    id: "chicken-lemon",
    name: "Chicken Lemon",
    price: 265,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Tender chicken breasts wok-tossed in a zesty, fresh lemon juice sauce."
  },
  {
    id: "chicken-schezwan",
    name: "Chicken Schezwan",
    price: 240,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Wok-fried chicken strips cooked with fiery spicy Schezwan pepper sauce."
  },
  {
    id: "chicken-ginger",
    name: "Chicken Ginger",
    price: 265,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Aromatic chicken bites wok-tossed with freshly slivered ginger, onions, and scallions."
  },
  {
    id: "drums-of-heaven",
    name: "Drums of Heaven",
    price: 280,
    isVeg: false,
    category: "Chinese — Non-Veg",
    description: "Chicken lollipops tossed in a sweet, spicy, and tangy glazed sauce."
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    alt: "Green Onions Restaurant premium dining room ambiance",
    aspect: "landscape"
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
    alt: "Tandoori Chicken Tikka platter straight from our tandoor",
    aspect: "square"
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
    alt: "Hygienic kitchen preparation by our head chef",
    aspect: "portrait"
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
    alt: "Elegant, cozy family dining booth configuration",
    aspect: "landscape"
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop",
    alt: "Signature Chicken Biryani and Mutton platter served fresh",
    aspect: "portrait"
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop",
    alt: "Families sharing laughs and delicious food at Green Onions",
    aspect: "square"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Raman Mishra",
    location: "Madhubani Town",
    quote: "The best place to dine out with family in Madhubani! The Chicken Dum Biryani was extremely flavorful, and the paneer starters had a genuine smoky flavor. The staff is polite, and the hygiene is perfect.",
    rating: 5,
    date: "July 2, 2026"
  },
  {
    id: "t2",
    name: "Priya Sen",
    location: "Jhanjharpur, Bihar",
    quote: "We ordered their Special Dum Mutton Biryani via WhatsApp. The food was delivered piping hot within 35 minutes by their own rider. Tastes amazing, very hygienic packaging. Will definitely visit the restaurant next time!",
    rating: 5,
    date: "June 28, 2026"
  },
  {
    id: "t3",
    name: "Alok Kumar Jha",
    location: "Ward No 5, Madhubani",
    quote: "Wonderful ambiance and delicious food. It is rare to find this level of service and food quality in Madhubani. It feels premium but matches standard local pricing. Highly recommend Tandoori Chicken Tangri Kebab!",
    rating: 5,
    date: "June 15, 2026"
  }
];

// Extracted subset for home page popular dishes (8 items)
export const popularDishes: MenuItem[] = fullMenu.filter(item => item.isPopular === true).slice(0, 8);

export function getWhatsAppLink(dishName?: string, price?: number): string {
  const baseMessage = dishName && price
    ? `Hi Green Onions Restaurant! I would like to order one "${dishName}" (₹${price}) for delivery/takeaway. Please guide me with the order confirmation.`
    : `Hi Green Onions Restaurant! I would like to place a food order. Please share the menu and delivery options.`;
  return `https://wa.me/${restaurantInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(baseMessage)}`;
}
