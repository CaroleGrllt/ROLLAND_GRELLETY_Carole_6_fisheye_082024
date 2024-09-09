import displayByMedia from "../templates/mediaGrid.js"

export default function mediaFactory(datasMedia, identity) {

    const name = identity.name

    const content = datasMedia.map(data => {
        if(data.image) {
            const mediaContent = `
                <img src="assets/images/${name}/${data.image}" alt="${data.title}">
            `
            const imgMedia = displayByMedia(data, mediaContent)
            const imgDOM = imgMedia.displayMedia()
            return imgDOM
        }

        else if(data.video) {
            const mediaContent = `   
                <video controls aria-label="${data.title}">
                    <source src="assets/images/${name}/${data.video}" type="video/mp4">
                </video>
            `
            const videoMedia = displayByMedia(data, mediaContent)
            const videoDOM = videoMedia.displayMedia()
            return videoDOM
        }
    })

    return content
}