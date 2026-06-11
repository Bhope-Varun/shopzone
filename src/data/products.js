const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Phones",
    price: 129999,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
    description:
      "Apple's latest flagship smartphone with premium performance and camera."
  },
  {
    id: 2,
    name: "Apple Watch",
    category: "Wearables",
    price: 39999,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
    description:
      "Track fitness, health and notifications right from your wrist."
  },
  {
    id: 3,
    name: "AirPods Pro",
    category: "Audio",
    price: 24999,
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800",
    description:
      "Premium wireless earbuds with active noise cancellation."
  },
  {
    id: 4,
    name: "Gaming Mouse",
    category: "Accessories",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800",
    description:
      "High precision gaming mouse with RGB lighting."
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800",
    description:
      "Mechanical keyboard with tactile switches."
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800",
    description:
      "Portable speaker with powerful sound."
  },
  {
    id: 7,
    name: "Laptop",
    category: "Laptops",
    price: 64999,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    description:
      "High performance laptop for work and gaming."
  },
  {
    id: 8,
    name: "Smartphone",
    category: "Phones",
    price: 24999,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    description:
      "Feature packed smartphone at an affordable price."
  },

  {
    id: 9,
    name: "Samsung Galaxy S25",
    category: "Phones",
    price: 84999,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
    description: "Flagship Samsung smartphone with advanced AI features."
  },

  {
    id: 10,
    name: "MacBook Air M4",
    category: "Laptops",
    price: 114999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    description: "Ultra-thin laptop powered by Apple's M4 chip."
  },

  {
    id: 11,
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 28999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    description: "Industry-leading noise cancelling headphones."
  },

  {
    id: 12,
    name: "iPad Pro",
    category: "Tablets",
    price: 89999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800",
    description: "Powerful tablet for creativity and productivity."
  },

  {
    id: 13,
    name: "Dell XPS 15",
    category: "Laptops",
    price: 124999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    description: "Premium Windows laptop with stunning display."
  },

  {
    id: 14,
    name: "Canon EOS R50",
    category: "Cameras",
    price: 69999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    description: "Mirrorless camera for photography enthusiasts."
  },

  {
    id: 15,
    name: "PlayStation 5",
    category: "Gaming",
    price: 54999,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800",
    description: "Next-generation gaming console."
  },

  {
    id: 16,
    name: "Xbox Series X",
    category: "Gaming",
    price: 52999,
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800",
    description: "Powerful gaming console with 4K gaming support."
  },

  {
    id: 17,
    name: "JBL Flip 6",
    category: "Audio",
    price: 11999,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800",
    description: "Portable waterproof Bluetooth speaker."
  },

  {
    id: 18,
    name: "Apple Vision Pro",
    category: "Wearables",
    price: 349999,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800",
    description: "Mixed reality headset from Apple."
  },

  {
    id: 19,
    name: "Samsung Smart TV",
    category: "Entertainment",
    price: 65999,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
    description: "4K Ultra HD Smart Television."
  },

  {
    id: 20,
    name: "Logitech MX Master 3S",
    category: "Accessories",
    price: 9999,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800",
    description: "Professional productivity mouse."
  },

  {
    id: 21,
    name: "Samsung Galaxy Z Fold 6",
    category: "Phones",
    price: 164999,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
    description: "Premium foldable smartphone with multitasking features."
  },

  {
    id: 22,
    name: "OnePlus 13",
    category: "Phones",
    price: 69999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    description: "Flagship Android smartphone with blazing fast performance."
  },

  {
    id: 23,
    name: "Nothing Phone 3",
    category: "Phones",
    price: 45999,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800",
    description: "Unique transparent design with Glyph interface."
  },

  {
    id: 24,
    name: "ASUS ROG Strix G16",
    category: "Laptops",
    price: 129999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    description: "High-end gaming laptop for competitive gamers."
  },

  {
    id: 25,
    name: "Lenovo Legion 5 Pro",
    category: "Laptops",
    price: 119999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    description: "Powerful gaming laptop with RTX graphics."
  },

  {
    id: 26,
    name: "Sony PlayStation Portal",
    category: "Gaming",
    price: 19999,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800",
    description: "Remote play handheld device for PlayStation gamers."
  },

  {
    id: 27,
    name: "Apple AirTag (4 Pack)",
    category: "Accessories",
    price: 10999,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800",
    description: "Track your belongings with Apple's Find My network."
  },

  {
    id: 28,
    name: "GoPro Hero 13",
    category: "Cameras",
    price: 44999,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800",
    description: "Capture adventures in stunning 5.3K quality."
  },

  {
    id: 29,
    name: "DJI Mini 4 Pro",
    category: "Cameras",
    price: 89999,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
    description: "Compact drone with intelligent flight features."
  },

  {
    id: 30,
    name: "Amazon Kindle Paperwhite",
    category: "Tablets",
    price: 14999,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
    description: "Read thousands of books on a glare-free display."
  }
];

export default products;