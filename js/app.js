document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchMedicine');
    const searchBtn = document.getElementById('searchBtn');
    const medicineList = document.getElementById('medicineList');
    const userQuestion = document.getElementById('userQuestion');
    const askBtn = document.getElementById('askBtn');
    const chatMessages = document.getElementById('chatMessages');
    const cartBtn = document.getElementById('cartBtn');

    // Qidiruv funksiyasi
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        // TODO: Dori qidirish logikasi
        console.log('Qidirilmoqda:', searchTerm);
    });

    // AI bilan suhbat
    askBtn.addEventListener('click', () => {
        const question = userQuestion.value;
        if (question.trim()) {
            addMessage('user', question);
            // TODO: AI javob logikasi
            aiResponse(question);
            userQuestion.value = '';
        }
    });

    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function aiResponse(question) {
        // Demo uchun oddiy javob
        setTimeout(() => {
            addMessage('ai', 'Bu dori haqida ma\'lumot izlanmoqda...');
        }, 1000);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
});