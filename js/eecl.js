// Enhanced video player functionality
document.addEventListener('DOMContentLoaded', function() {
    // Video player functionality
    const video = document.getElementById('main-video');
    const playButton = document.querySelector('.video-play-button');
    
    if (video && playButton) {
        playButton.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                playButton.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
        
        // Reset play button when video ends
        video.addEventListener('ended', function() {
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        });
    }
    
    // Language toggle functionality
    const enBtn = document.getElementById('en-btn');
    const arBtn = document.getElementById('ar-btn');
    
    if (enBtn && arBtn) {
        enBtn.addEventListener('click', function() {
            window.location.href = 'home.html';
        });
        
        arBtn.addEventListener('click', function() {
            window.location.href = 'home-ar.html';
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Interactive advantages
    const advantageItems = document.querySelectorAll('.advantage-item');
    
    if (advantageItems) {
        advantageItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.classList.add('active');
            });
            
            item.addEventListener('mouseleave', function() {
                this.classList.remove('active');
            });
        });
    }
});
