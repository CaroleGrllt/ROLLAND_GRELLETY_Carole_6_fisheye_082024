export default function displayLikes(photographerInfo, photographerMedia) {
    //DOM ELEMENTS
    const allLikesBtn = document.querySelectorAll('.likeBtn')
    const allLikesNbr = document.querySelectorAll('.likeNbr')

    //DISPLAY INITIAL DATA
    //-----nbr of likes
    allLikesNbr.forEach(likeNbr => {
        let mediaLike = photographerMedia.find(media => media.id == likeNbr.dataset.id)
        likeNbr.textContent = mediaLike.likes
    })

    //-----photographer's data
    const photographerPrice = photographerInfo.price
    let photographerLikes = photographerMedia.reduce((acc, media) => acc + media.likes, 0)

    //DISPLAY ASIDE WITH INITIAL DATA
    function displayAside () {

        //HTML ELEMENTS (ASIDE)
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

    // CHANGE NBR OF LIKES
    allLikesBtn.forEach(likeBtn => {
        likeBtn.addEventListener('click', () => {
            const totalLikesContent = document.querySelector('.totalLikeNbr')
            const mediaLiked = photographerMedia.find(media => media.id == likeBtn.dataset.id)

                if(!likeBtn.classList.contains("liked")) {
                    likeBtn.classList.add("liked")
                    mediaLiked.likes++
                    photographerLikes++
                    console.log(mediaLiked.likes)
                    allLikesNbr.forEach(likeNbr => {
                        let mediaLike = photographerMedia.find(media => media.id == likeNbr.dataset.id)
                        likeNbr.textContent = mediaLike.likes
                    })
                    totalLikesContent.textContent = photographerLikes
                                    
                } else {
                    likeBtn.classList.remove("liked")
                    mediaLiked.likes--
                    photographerLikes--
                    console.log(mediaLiked.likes)
                    allLikesNbr.forEach(likeNbr => {
                        let mediaLike = photographerMedia.find(media => media.id == likeNbr.dataset.id)
                        likeNbr.textContent = mediaLike.likes
                    })
                    totalLikesContent.textContent = photographerLikes
                }    
        })
    })

    return {displayAside}
}