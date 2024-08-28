import { getPhotographerInfo, getMediasByPhotographer } from '../models/photographersModel.js'
import photographerTemplate from '../templates/photographerCard.js'
import { mediaFactory } from '../factory/media.js';

// RECUPERATION DE LA SECTION PERMETTANT D'AFFICHER LES DONNEES
const photographersSection = document.querySelector(".photographer-container");

// RECUPERATION DE L'ID DU PHOTOGRAPHE PASSE EN PARAMETRE DANS L'URL
let idParam = new URLSearchParams(document.location.search)
let photographerId = idParam.get('id')

// RECUPERATION DES INFORMATIONS (IDENTITE ET TRAVAUX) DU PHOTOGRAPHE EN FONCTION ID
const photographerInfoById = await getPhotographerInfo(photographerId)
const photographerMediaById = await getMediasByPhotographer(photographerId)

// CREATION DE LA PARTIE IDENTITE DE LA PAGE PHOTOGRAPHE
const photographer = photographerTemplate(photographerInfoById); //envoi + réception infos du photographe au template
const photographerInfoDOM = photographer.getPhotographerInfo(); // récupération du composant selon fonction demandée
photographersSection.appendChild(photographerInfoDOM); // affichage du composant sur la page

// CREATION DE LA PARTIE MEDIA DE LA PAGE PHOTOGRAPHE

const medias = await mediaFactory(photographerMediaById, photographerInfoById) //envoi des informations media à la factory + récupération du composant selon fonction demandée (tableau)
const section = document.createElement('section')
section.classList.add('works-container')
photographersSection.appendChild(section)
medias.forEach((media) => section.appendChild(media)) // affichage des composants sur la page photographe

