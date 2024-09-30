export default function lightboxTemplate(dataMedias, dataPhotographer) {

    //DOM ELEMENTS
    const main                  = document.getElementById("main-photographer")
    const lightbox              = document.querySelector(".lightbox")
    const closeLightboxButtons  = document.querySelectorAll('.fa-xmark')
    const previousButtons       = document.querySelectorAll('.fa-chevron-left')
    const nextButtons           = document.querySelectorAll('.fa-chevron-right')
    const allMediaCards         = document.querySelectorAll('.gallery-card a')

    //ALL MEDIA AND INDEX
    const mediasArray   = Array.from(dataMedias)
    let mediaIndex      = 0

    //EVENTLISTENERS
    //-----click events
    allMediaCards.forEach(mediaCard => {
        mediaCard.addEventListener('click', () => {
            let mediaId = mediaCard.dataset.media
            let mediaClicked = mediasArray.findIndex(media => media.id == mediaId)
            mediaIndex = mediaClicked
            displayLightbox()
        })
    })

    closeLightboxButtons.forEach(closeBtn => {
        closeBtn.addEventListener('click', closeLightbox)
    })

    previousButtons.forEach(prevBtn => {
        prevBtn.addEventListener('click', displayPrevMedia)
    })

    nextButtons.forEach(nextBtn => {
        nextBtn.addEventListener('click', displayNextMedia)
    })

    //-----key events
    document.addEventListener('keydown', e => {
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
        
            case 'ArrowLeft':
                displayPrevMedia();
                break;
            case 'ArrowRight':
                displayNextMedia();
                break;
        };
    });


    //FUNCTIONS
    //-----open lightbox
    function displayLightbox() {
        const figure = document.querySelector('.photo-container figure')
        const figcaption = document.querySelector('.photo-container figcaption')

        let currentMedia = mediasArray[mediaIndex]
        let content = `${currentMedia.image ? `
            <img src="assets/images/${dataPhotographer.name}/${currentMedia.image}" alt="${currentMedia.title}">` : 
            `<video controls aria-label="${currentMedia.title}">
                <source src="assets/images/${dataPhotographer.name}/${currentMedia.video}" type="video/mp4">
            </video>`}`;

        let title = `${currentMedia.title}`;

        figure.innerHTML = content 
        figcaption.textContent = title
        
        lightbox.style.display = 'flex'

        lightbox.setAttribute('aria-hidden', 'false')
        lightbox.setAttribute('aria-modal', 'true')
        main.setAttribute('aria-hidden', 'true')
        closeLightboxButtons.forEach(closeBtn => {
            closeBtn.focus()
        })
    }

    //-----close lightbox
    function closeLightbox() {
        lightbox.style.display = 'none'

        lightbox.setAttribute('aria-hidden', 'true')
        lightbox.setAttribute('aria-modal', 'false')
        main.setAttribute('aria-hidden', 'false')
    }

    //-----display previous media 
    function displayPrevMedia() {
        mediaIndex--;
        if(mediaIndex < 0) {
            mediaIndex = mediasArray.length-1
        }
        displayLightbox()
    }

    //-----display next media
    function displayNextMedia() {
        mediaIndex++;
        if(mediaIndex > mediasArray.length-1) {
            mediaIndex = 0
        }
        displayLightbox()
    }

    return { displayLightbox, closeLightbox, displayPrevMedia, displayNextMedia }
}    
