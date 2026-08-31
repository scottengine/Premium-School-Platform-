// Gallery functionality
class Gallery {
    constructor() {
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.init();
    }
    
    init() {
        this.galleryItems.forEach(item => {
            item.addEventListener('click', () => this.openLightbox(item));
        });
    }
    
    openLightbox(item) {
        const img = item.querySelector('img');
        const title = item.querySelector('h3').textContent;
        
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close">&times;</span>
                <img src="${img.src}" alt="${title}">
                <h2>${title}</h2>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        lightbox.style.display = 'flex';
        
        lightbox.querySelector('.close').addEventListener('click', () => {
            lightbox.remove();
        });
    }
}

if (document.querySelector('.gallery')) {
    new Gallery();
}