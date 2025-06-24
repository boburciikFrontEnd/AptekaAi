document.addEventListener('DOMContentLoaded', () => {
    class Carousel {
        constructor(element) {
            this.carousel = element;
            this.track = element.querySelector('.carousel-track');
            this.items = element.querySelectorAll('.carousel-item');
            this.prevButton = element.querySelector('.prev');
            this.nextButton = element.querySelector('.next');
            this.indicators = element.querySelectorAll('.indicator');
            
            this.currentIndex = 0;
            this.itemWidth = this.items[0].offsetWidth;
            this.touchStartX = 0;
            this.touchEndX = 0;

            this.initializeCarousel();
        }

        initializeCarousel() {
            this.prevButton.addEventListener('click', () => this.move('prev'));
            this.nextButton.addEventListener('click', () => this.move('next'));
            
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goToSlide(index));
            });

            // Touch events for mobile
            this.track.addEventListener('touchstart', (e) => {
                this.touchStartX = e.touches[0].clientX;
            });

            this.track.addEventListener('touchend', (e) => {
                this.touchEndX = e.changedTouches[0].clientX;
                this.handleSwipe();
            });

            // Auto play
            this.startAutoPlay();
        }

        move(direction) {
            if (direction === 'next') {
                this.currentIndex = (this.currentIndex + 1) % this.items.length;
            } else {
                this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
            }
            this.updateCarousel();
        }

        goToSlide(index) {
            this.currentIndex = index;
            this.updateCarousel();
        }

        updateCarousel() {
            const newTransform = -this.currentIndex * 100;
            this.track.style.transform = `translateX(${newTransform}%)`;
            
            this.indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === this.currentIndex);
            });
        }

        handleSwipe() {
            const swipeDistance = this.touchEndX - this.touchStartX;
            if (Math.abs(swipeDistance) > 50) {
                this.move(swipeDistance > 0 ? 'prev' : 'next');
            }
        }

        startAutoPlay() {
            setInterval(() => this.move('next'), 5000);
        }
    }

    // Initialize carousel when DOM is loaded
    const carousel = new Carousel(document.querySelector('.hero-carousel'));
});