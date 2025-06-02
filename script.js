document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const photos = document.querySelectorAll('.floating-photo');
    
    // Make photos interactive
    photos.forEach(photo => {
        photo.style.pointerEvents = 'none';
        
        // Add random subtle movement to initial positions
        const randomX = (Math.random() - 0.5) * 20;
        const randomY = (Math.random() - 0.5) * 20;
        photo.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.5) rotate(0deg)`;
    });

    envelope.addEventListener('click', () => {
        envelope.classList.toggle('opened');
        
        // If envelope is opened, make photos interactive after their animation
        if (envelope.classList.contains('opened')) {
            setTimeout(() => {
                photos.forEach(photo => {
                    photo.style.pointerEvents = 'auto';
                });
            }, 1000);
        } else {
            // If envelope is closed, remove photo interactivity
            photos.forEach(photo => {
                photo.style.pointerEvents = 'none';
            });
        }
    });
}); 