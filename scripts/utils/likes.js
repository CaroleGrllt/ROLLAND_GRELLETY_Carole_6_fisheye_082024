import {photographerInfoById, photographerMediaById} from '../pages/photographer.js';

//DOM ELEMENTS
const allLikesBtn       = document.querySelectorAll('.likeBtn')
const allLikesNbr       = document.querySelectorAll('.likeNbr')
const totalLikesContent = document.querySelector('.totalLikeNbr') 
let photographerLikes   = totalLikesContent.textContent 

// CHANGE NBR OF LIKES

allLikesBtn.forEach(likeBtn => {
    likeBtn.addEventListener('click', () => {
        const mediaLiked = photographerMediaById.find(media => media.id == likeBtn.dataset.id)
        
        if(!likeBtn.classList.contains("liked")) {
                likeBtn.classList.add("liked")
                mediaLiked.likes++
                photographerLikes++
                allLikesNbr.forEach(likeNbr => {
                    let mediaLike = photographerMediaById.find(media => media.id == likeNbr.dataset.id)
                    likeNbr.textContent = mediaLike.likes
                })
                totalLikesContent.textContent = photographerLikes
                                
            } else {
                likeBtn.classList.remove("liked")
                mediaLiked.likes--
                photographerLikes--
                allLikesNbr.forEach(likeNbr => {
                    let mediaLike = photographerMediaById.find(media => media.id == likeNbr.dataset.id)
                    likeNbr.textContent = mediaLike.likes
                })
                totalLikesContent.textContent = photographerLikes
            }    
    })
})