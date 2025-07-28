document.addEventListener('DOMContentLoaded', function() {
    // Cover Screen
    const coverScreen = document.getElementById('coverScreen');
    const openInvitationBtn = document.getElementById('openInvitationBtn');
    const mainContainer = document.getElementById('mainContainer');
    
    openInvitationBtn.addEventListener('click', function() {
        coverScreen.classList.add('hidden');
        mainContainer.classList.add('show');
        
        // Play music automatically when opening invitation
        const playBtn = document.getElementById('playBtn');
        playBtn.click();
    });
    
    // Navigation
    const homeBtn = document.getElementById('homeBtn');
    const galleryBtn = document.getElementById('galleryBtn');
    const giftBtn = document.getElementById('giftBtn');
    const mapBtn = document.getElementById('mapBtn');
    const contactBtn = document.getElementById('contactBtn');
    
    const mainContent = document.getElementById('main-content');
    const galleryContent = document.getElementById('gallery-content');
    const giftContent = document.getElementById('gift-content');
    
    const navButtons = [homeBtn, galleryBtn, giftBtn, mapBtn, contactBtn];
    
    function resetActiveButtons() {
        navButtons.forEach(btn => {
            btn.classList.remove('active');
        });
    }
    
    function showSection(section) {
        mainContent.style.display = 'none';
        galleryContent.style.display = 'none';
        giftContent.style.display = 'none';
        
        section.style.display = 'block';
        section.classList.add('active');
    }
    
    homeBtn.addEventListener('click', function() {
        resetActiveButtons();
        this.classList.add('active');
        showSection(mainContent);
    });
    
    galleryBtn.addEventListener('click', function() {
        resetActiveButtons();
        this.classList.add('active');
        showSection(galleryContent);
    });
    
    giftBtn.addEventListener('click', function() {
        resetActiveButtons();
        this.classList.add('active');
        showSection(giftContent);
    });
    
    mapBtn.addEventListener('click', function() {
        resetActiveButtons();
        this.classList.add('active');
        alert('Anda akan diarahkan ke Google Maps');
        window.open('https://maps.google.com?q=Grand+Ballroom+Hotel+Majestic+Jakarta+Selatan');
    });
    
    contactBtn.addEventListener('click', function() {
        resetActiveButtons();
        this.classList.add('active');
        alert('Hubungi kami di:\n\nSarah: 0812 3456 7890\nBudi: 0813 4567 8901');
    });
    
    // RSVP Button
    const rsvpBtn = document.getElementById('rsvpBtn');
    rsvpBtn.addEventListener('click', function() {
        const name = prompt('Masukkan nama Anda:');
        if (name) {
            const attendance = confirm('Apakah Anda akan hadir?');
            alert(`Terima kasih ${name}! Konfirmasi kehadiran Anda telah ${attendance ? 'diterima' : 'dicatat'}.`);
        }
    });
    
    // Music Player
    const audio = new Audio('assets/audio/wedding-music.mp3');
    const playBtn = document.getElementById('playBtn');
    let isPlaying = false;
    
    playBtn.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            audio.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });
    
    // Countdown Timer
    function updateCountdown() {
        const weddingDate = new Date('December 12, 2023 10:00:00').getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
});