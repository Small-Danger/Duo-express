//pour la partie slides
document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        index = (index + 1) % slides.length;
    }
    
    setInterval(showSlide, 3000);  // Change slide every 3 seconds
});
