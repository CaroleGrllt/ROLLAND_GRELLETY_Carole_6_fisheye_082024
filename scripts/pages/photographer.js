import { getPhotographerInfo } from '../models/photographersModel.js'
import photographerTemplate from '../templates/photographerCard.js'

const photographersSection = document.querySelector(".photographer-information");

let idParam = new URLSearchParams(document.location.search)
let photographerId = idParam.get('id')

const photographerInfoById = await getPhotographerInfo(photographerId)

const photographer = photographerTemplate(photographerInfoById);
const photographerInfoDOM = photographer.getPhotographerInfo();
photographersSection.appendChild(photographerInfoDOM);