export default function displayLikes(photographerInfo, photographerMedia) {
    const photographerPrice = photographerInfo.price
    const photographerLikes = photographerMedia.reduce((acc, media) => acc + media.likes, 0);

    function updateLikes () {
        const aside = document.createElement('aside')
        const likesContainer = document.createElement('div')
        likesContainer.classList.add('likes-container-aside')
        const priceContainer = document.createElement('div')
        priceContainer.classList.add('price-container-aside')

        const span = document.createElement('span')
        span.setAttribute('aria-label', 'nombre total de likes')
        span.classList.add('totalLikeNbr')
        span.textContent = photographerLikes
        
        const i = document.createElement('i')
        i.classList.add('fa-solid')
        i.classList.add('fa-heart')
        i.classList.add('fa-heart-aside')
        i.setAttribute('aria-hidden', 'true')

        const p = document.createElement('p')
        p.textContent = photographerPrice + "€ / jour"

        aside.appendChild(likesContainer)
        aside.appendChild(priceContainer)
        likesContainer.appendChild(span)
        likesContainer.appendChild(i)
        priceContainer.appendChild(p)
        
        return aside
    }

    return {updateLikes}
}