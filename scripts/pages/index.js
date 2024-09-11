import { getPhotographers } from '../models/photographersModel.js'
import photographerTemplate from '../templates/photographerTemplate.js'

    const photographersSection = document.querySelector(".photographer_section");

    let photographers = await getPhotographers()
    // console.log(photographers)

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    })