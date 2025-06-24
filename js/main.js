import { getAllProducts, getCategories, getProductsByCategory, getNewProducts, getDiscountedProducts } from './db.js';

// Dastlabki mahsulotlarni ko'rsatish
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const productsGrid = document.querySelector('.products-grid');
    
    // Qidiruv funksiyasi
    function searchProducts(query) {
        query = query.toLowerCase();
        const allProducts = getAllProducts();
        
        // Mahsulotlarni qidirish
        const searchResults = allProducts.filter(product => {
            const nameMatch = product.name.toLowerCase().includes(query);
            const categoryMatch = product.category.toLowerCase().includes(query);
            const descriptionMatch = product.description.toLowerCase().includes(query);
            
            // So'zlar orasidagi o'xshashlikni tekshirish
            const similarity = (str1, str2) => {
                const len1 = str1.length;
                const len2 = str2.length;
                const matrix = Array(len1 + 1).fill().map(() => Array(len2 + 1).fill(0));
                
                for (let i = 0; i <= len1; i++) matrix[i][0] = i;
                for (let j = 0; j <= len2; j++) matrix[0][j] = j;
                
                for (let i = 1; i <= len1; i++) {
                    for (let j = 1; j <= len2; j++) {
                        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
                        matrix[i][j] = Math.min(
                            matrix[i - 1][j] + 1,
                            matrix[i][j - 1] + 1,
                            matrix[i - 1][j - 1] + cost
                        );
                    }
                }
                return 1 - (matrix[len1][len2] / Math.max(len1, len2));
            };
            
            // Nomi bo'yicha o'xshashlik darajasi
            const nameSimilarity = similarity(product.name.toLowerCase(), query);
            
            return nameMatch || categoryMatch || descriptionMatch || nameSimilarity > 0.6;
        });

        displayProducts(searchResults.length > 0 ? searchResults : [], 'Qidiruv natijalari');
        
        // Natija yo'q bo'lsa
        if (searchResults.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-products">
                    <div class="no-products-content">
                        <div class="no-products-icon">
                            <i class="fas fa-search"></i>
                        </div>
                        <h2 class="no-products-category">Qidiruv natijalari</h2>
                        <p class="no-products-text">"${query}" so'rovi bo'yicha hech narsa topilmadi</p>
                        <p class="no-products-subtitle">Iltimos, boshqa kalit so'z bilan urinib ko'ring</p>
                    </div>
                </div>`;
        }
    }

    // Input o'zgarishini kuzatish
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();
        
        if (query.length >= 2) {
            searchTimeout = setTimeout(() => {
                searchProducts(query);
            }, 500); // 500ms kuting
        } else if (query.length === 0) {
            displayProducts(getAllProducts()); // Bo'sh bo'lsa hammasi ko'rsatilsin
        }
    });

    // Mahsulotlarni ko'rsatish funksiyasi
    function displayProducts(products, category) {
        const productsGrid = document.querySelector('.products-grid');
        if (products.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-products">
                    <div class="no-products-content">
                        <div class="no-products-icon">
                            <i class="fas fa-prescription-bottle-medical"></i>
                        </div>
                        <h2 class="no-products-category">${category}</h2>
                        <p class="no-products-text">Hozircha bu kategoriya bo'yicha dorilar mavjud emas</p>
                        <p class="no-products-subtitle">Boshqa kategoriyalarni ko'rib chiqishingiz mumkin</p>
                    </div>
                </div>`;
            return;
        }
        productsGrid.innerHTML = products.map(product => `
            <div class="product-card">
                ${ product.oldPrice && product.oldPrice > product.price 
                ? `<div class="product-badge"><i class="fas fa-tag"></i> -${ ((product.oldPrice - product.price) / product.oldPrice * 100).toFixed(2) }%</div>`
                : ''
            }
                <div class="product-thumb">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-buttons">
                        <button class="btn-wishlist" title="Sevimlilarga qo'shish">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="btn-quickview" title="Tezkor ko'rish">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-rating">
                        ${getStarRating(product.rating)}
                        <span>(${product.rating})</span>
                    </div>
                    <div class="product-price">
                        <span class="new-price">${formatPrice(product.price)}</span>
                        ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                    </div>
                    <button class="btn-add-to-cart">
                        <i class="fas fa-shopping-cart"></i>
                        Savatchaga
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Narxni formatlash funksiyasi
    function formatPrice(price) {
        return price.toLocaleString('uz-UZ', { 
            style: 'currency', 
            currency: 'UZS',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0 
        });
    }

    // Yulduzlarni chiqarish funksiyasi
    function getStarRating(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        return stars;
    }

    // Bosilgan kategoriya bo'yicha mahsulotlarni filtrlaymiz
    const catButtons = document.querySelectorAll('.categories-nav .cat-btn');
    catButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Barcha tugmalar aktiv holatdan chiqariladi
            catButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const catText = button.querySelector('span').textContent.trim();
            let filteredProducts = [];

            // Section sarlavhasini o'zgartiramiz
            const sectionTitle = document.querySelector('.section-header h2');

            if (catText === "Dorilar") {
                sectionTitle.textContent = "Mahsulotlarimiz";
                filteredProducts = getAllProducts();
            } else if (catText.toLowerCase() === "barchasi") {
                sectionTitle.textContent = "Mahsulotlarimiz";
                filteredProducts = getAllProducts();
            } else {
                sectionTitle.textContent = catText;
                filteredProducts = getProductsByCategory(catText);
            }

            // Filter buttonlarni yashiramiz yoki ko'rsatamiz
            const filterButtons = document.querySelector('.filter-buttons');
            filterButtons.style.display = catText === "Dorilar" ? "flex" : "none";

            displayProducts(filteredProducts, catText);
        });
    });

    // Dastlab Dorilar kategoriyasini tanlaymiz
    document.querySelector('.cat-btn.active').click();

    // Yonbosh menyuni yopish uchun X tugmasi funksiyasi
    const sideDrawer = document.querySelector('.side-drawer');
    const closeDrawerBtn = document.querySelector('.close-drawer');

    if (sideDrawer && closeDrawerBtn) {
        closeDrawerBtn.addEventListener('click', () => {
            sideDrawer.classList.remove('open');
        });
    }
});