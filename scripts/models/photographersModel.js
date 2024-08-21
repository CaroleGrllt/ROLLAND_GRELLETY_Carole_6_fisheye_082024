const jsonUrl = 'http://127.0.0.1:5500/data/photographers.json'

async function getData() {

    return await fetch(jsonUrl) 
    .then(res => res.json())
    .catch(err => console.log("Une erreur s'est produite : ", err))

}

export async function getPhotographers() {
    const data = await getData()
    return data.photographers
}

export async function getPhotographerInfo(idPhotographer) {

}

export async function getMediasByPhotographer(idPhotographer) {

}