const products = [
    // Og'riq qoldiruvchi
    {
        id: 1,
        name: "Nimesil dorisi",
        category: "Og'riq qoldiruvchi",
        price: 99000,
        oldPrice: 120000,
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/04b3e2169117703.Y3JvcCw5OTQsNzc4LDE0LDA.jpeg",
        description: "Og'riq qoldiruvchi kukun, 100mg x 30",
        rating: 4.8,
        reviews: 156,
        isNew: true,
        inStock: true,
        discount: 15,
        manufacturer: "Berlin-Chemie"
    },
    {
        id: 2,
        name: "Nurofen dorisi",
        category: "Og'riq qoldiruvchi",
        price: 45000,
        oldPrice: 55000,
        image: "https://avatars.mds.yandex.net/i?id=abadc0ab32af57cdabd61d76f77770d2_l-5250635-images-thumbs&n=13",
        description: "Og'riq qoldiruvchi gel, 5% 50g",
        rating: 4.8,
        reviews: 167,
        isNew: false,
        inStock: true,
        discount: 20,
        manufacturer: "Reckitt Benckiser"
    },

    // Vitaminlar
    {
        id: 3,
        name: "D3 vitamini",
        category: "Vitaminlar",
        price: 85000,
        oldPrice: 95000,
        image: "https://newage.bg/thumbs/3/holland-barrett-vitamin-d3-tablets-10ug-newage.png",
        description: "Vitamin D3 tomchi, 10ml",
        rating: 4.9,
        reviews: 89,
        isNew: true,
        inStock: true,
        discount: 10,
        manufacturer: "Nobel"
    },
    {
        id: 4,
        name: "Omega-3 baliq yog'i kapsulalari",
        category: "Vitaminlar",
        price: 120000,
        oldPrice: 150000,
        image: "https://ankarabaharat.com/wp-content/uploads/2022/02/omega-3-1000mg-200-softjel-aksu-vital-shiffa-home.jpg",
        description: "Baliq yog'i kapsulalari, 1000mg x 60",
        rating: 4.6,
        reviews: 92,
        isNew: true,
        inStock: true,
        discount: 20,
        manufacturer: "MyVitamins"
    },

    // Yurak dorilar
    {
        id: 5,
        name: "Aspirin Cardio dorisi",
        category: "Yurak dorilar",
        price: 65000,
        oldPrice: 75000,
        image: "https://api.gopharm.uz/media/drugs-thumbnail/dc4cbad3-4a72-4f82-b853-65435b2ed57d.jpg",
        description: "Yurak uchun aspirin, 100mg x 30",
        rating: 4.9,
        reviews: 234,
        isNew: false,
        inStock: true,
        discount: 15,
        manufacturer: "Bayer"
    },
    {
        id: 6,
        name: "Kardiomagnil dorisi",
        category: "Yurak dorilar",
        price: 55000,
        oldPrice: 65000,
        image: "https://iskamed.by/wp-content/uploads/67563.jpg",
        description: "Yurak uchun magnil, 75mg x 30",
        rating: 4.7,
        reviews: 178,
        isNew: true,
        inStock: true,
        discount: 15,
        manufacturer: "Nycomed"
    },

    // Shamollash
    {
        id: 7,
        name: "Grippostad preparati",
        category: "Shamollash",
        price: 55000,
        oldPrice: 65000,
        image: "https://www.grippostad.de/media/1781/020_grippostad_grippo_heiss_fb_cam_front0001.png",
        description: "Gripp va shamollash uchun kompleks preparat",
        rating: 4.5,
        reviews: 167,
        isNew: false,
        inStock: true,
        discount: 10,
        manufacturer: "Stada"
    },
    {
        id: 8,
        name: "TheraFlu preparati",
        category: "Shamollash",
        price: 45000,
        oldPrice: 52000,
        image: "https://neman.kg/images/landings/theraflu/teraflu_landing_product.jpg",
        description: "Isitma tushiruvchi kukun ichimlik uchun",
        rating: 4.6,
        reviews: 145,
        isNew: true,
        inStock: true,
        discount: 15,
        manufacturer: "GSK"
    },

    // Oshqozon
    {
        id: 9,
        name: "Mezim Forte dorisi",
        category: "Oshqozon",
        price: 35000,
        oldPrice: 42000,
        image: "https://avatars.mds.yandex.net/get-mpic/5221145/img_id3800012996884141966.png/orig",
        description: "Hazm qilish uchun ferment preparati",
        rating: 4.7,
        reviews: 145,
        isNew: false,
        inStock: true,
        discount: 15,
        manufacturer: "Berlin-Chemie"
    },
    {
        id: 10,
        name: "Omez dorisi",
        category: "Oshqozon",
        price: 48000,
        oldPrice: 55000,
        image: "https://hippo.md/storage/62c5a9bf5af6c.jpg",
        description: "Oshqozon kislotasini kamaytiruvchi",
        rating: 4.8,
        reviews: 167,
        isNew: true,
        inStock: true,
        discount: 12,
        manufacturer: "Dr. Reddy's"
    },

    // Allergiya
    {
        id: 11,
        name: "Setirizin dorisi",
        category: "Allergiya",
        price: 25000,
        oldPrice: 30000,
        image: "https://cdn.eapteka.ru/upload/offer_photo/526/540/2_331711a18e202f2dda77796c848c85b5.png?t=1742295861&_cvc=1747810727",
        description: "Allergiyaga qarshi tabletka, 10mg x 20",
        rating: 4.6,
        reviews: 88,
        isNew: true,
        inStock: true,
        discount: 15,
        manufacturer: "Darmonpharm"
    },
    {
        id: 12,
        name: "Zodak tomchisi",
        category: "Allergiya",
        price: 35000,
        oldPrice: 42000,
        image: "https://uteka.ru/media/big/1/ba/1bac14235d926fe18ec47894ff8f8ec8.jpg",
        description: "Allergiyaga qarshi tomchi, 10ml",
        rating: 4.7,
        reviews: 123,
        isNew: false,
        inStock: true,
        discount: 15,
        manufacturer: "Zentiva"
    },

    // Teri parvarishi
    {
        id: 13,
        name: "Bepanthen krem",
        category: "Teri parvarishi",
        price: 67000,
        oldPrice: 80000,
        image: "https://apothecary.rs/588-large_default/bayer-bepanthen-krema-5-30g.jpg",
        description: "Teri uchun tiklovchi krem, 30g",
        rating: 4.8,
        reviews: 110,
        isNew: true,
        inStock: true,
        discount: 16,
        manufacturer: "Bayer",
        isBestseller: true // <-- Qo'shildi
    },

    // Ko'z parvarishi
    {
        id: 14,
        name: "Visine ko'z tomchisi",
        category: "Ko'z parvarishi",
        price: 39000,
        oldPrice: 45000,
        image: "https://unifarma.ru/upload/iblock/fbf/fbf3a6956c426bc644522a6bb60a40e0.jpg",
        description: "Ko'z qizarishi va qichishishga qarshi tomchi, 15ml",
        rating: 4.7,
        reviews: 98,
        isNew: false,
        inStock: true,
        discount: 13,
        manufacturer: "Johnson & Johnson",
        isBestseller: true // <-- Qo'shildi
    },

    // Tish parvarishi
    {
        id: 15,
        name: "Parodontax tish pastasi",
        category: "Tish parvarishi",
        price: 29000,
        oldPrice: 35000,
        image: "https://dhb3yazwboecu.cloudfront.net/439/195467-PARODONTAX-ORIGINAL-75-ML-FARMACONFIANZA.png",
        description: "Tish go'shti uchun maxsus tish pastasi, 75ml",
        rating: 4.8,
        reviews: 120,
        isNew: true,
        inStock: true,
        discount: 17,
        manufacturer: "GSK",
        isBestseller: true
    },

    // Bolalar uchun
    {
        id: 16,
        name: "Panadol Baby sirop",
        category: "Bolalar uchun",
        price: 42000,
        oldPrice: 50000,
        image: "https://media.mydawa.com/Images/Products/9127a3ef-5938-4e70-83f7-32f7eaff8f34.JPG",
        description: "Bolalar uchun isitma va og'riqni kamaytiruvchi sirop, 100ml",
        rating: 4.9,
        reviews: 140,
        isNew: true,
        inStock: true,
        discount: 16,
        manufacturer: "GSK",
        isBestseller: true
    },

    // Immunitet
    {
        id: 17,
        name: "Immunal tomchisi",
        category: "Immunitet",
        price: 56000,
        oldPrice: 65000,
        image: "https://expertology.ru/upload/medialibrary/8d0/Immunal-plyus-S.webp",
        description: "Immunitetni oshiruvchi tomchi, 50ml",
        rating: 4.7,
        reviews: 112,
        isNew: false,
        inStock: true,
        discount: 14,
        manufacturer: "Sandoz",
        isBestseller: true
    },

    // Tibbiy jihozlar
    {
        id: 18,
        name: "Omron tanometri",
        category: "Tibbiy jihozlar",
        price: 320000,
        oldPrice: 350000,
        image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-37/031/969/992/811/50/600001228538b2.jpg",
        description: "Qon bosimini o'lchash uchun avtomatik tonometr",
        rating: 4.9,
        reviews: 80,
        isNew: true,
        inStock: true,
        discount: 9,
        manufacturer: "Omron",
        isBestseller: true
    },

    // Erkaklar salomatligi
    {
        id: 19,
        name: "Prostamol Uno kapsulalari",
        category: "Erkaklar salomatligi",
        price: 98000,
        oldPrice: 110000,
        image: "https://static.ananas.rs/assets/Product_Images/HealtNutrition/berlin_chemie_prostamol_uno_30_kapsuli/ff4be747668addae.webp",
        description: "Prostata uchun kapsulalar, 30 dona",
        rating: 4.6,
        reviews: 65,
        isNew: false,
        inStock: true,
        discount: 11,
        manufacturer: "Berlin-Chemie",
        isBestseller: true
    },

    // Ayollar salomatligi
    {
        id: 20,
        name: "Femibion vitamin kompleksi",
        category: "Ayollar salomatligi",
        price: 135000,
        oldPrice: 150000,
        image: "https://economapteka.ru/upload/iblock/04e/04ecbd3d8dd48449fa5f965756149c84.jpg",
        description: "Homilador va emizikli ayollar uchun vitaminlar",
        rating: 4.8,
        reviews: 77,
        isNew: true,
        inStock: true,
        discount: 10,
        manufacturer: "Merck",
        isBestseller: true
    }
];

// Categories array
const categories = [
    "Og'riq qoldiruvchi",
    "Vitaminlar",
    "Yurak dorilar",
    "Shamollash",
    "Oshqozon",
    "Allergiya",
    "Teri parvarishi",
    "Ko'z parvarishi",
    "Tish parvarishi",
    "Bolalar uchun",
    "Immunitet",
    "Tibbiy jihozlar",
    "Erkaklar salomatligi",
    "Ayollar salomatligi"
];

// Main functions
function getAllProducts() {
    return products;
}

function getCategories() {
    return categories;
}

function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

function getNewProducts() {
    return products.filter(product => product.isNew);
}

function getDiscountedProducts() {
    return products.filter(product => product.discount);
}

function getBestsellerProducts() {
    return products.filter(product => product.isBestseller);
}

// Export
export {
    getAllProducts,
    getCategories,
    getProductsByCategory,
    getNewProducts,
    getDiscountedProducts,
    getBestsellerProducts
};
