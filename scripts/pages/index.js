import { getPhotographers } from '../models/photographersModel.js'
import photographerTemplate from '../templates/photographer.js'

    const photographersSection = document.querySelector(".photographer_section");

    let photographers = await getPhotographers()

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    })