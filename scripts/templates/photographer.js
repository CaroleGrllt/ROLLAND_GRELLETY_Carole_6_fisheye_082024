export default function photographerTemplate(data) {
    const { name, id, tagline, city, country, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' )

        const link = document.createElement('a')
        link.setAttribute('aria-label', `visiter la page de ${name}`)
        link.setAttribute('href', `../../photographer.html?id=${id}`)

        const img = document.createElement( 'img' );
        img.setAttribute('aria-hidden', 'true')
        img.setAttribute("src", picture )
        img.setAttribute("alt", name)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const location = document.createElement('p')
        location.setAttribute('aria-label', 'localisation géographique du photographe')
        location.classList.add('location')
        location.textContent = city +", " + country

        const line = document.createElement('p')
        line.setAttribute('aria-label', 'slogan du photographe')
        line.classList.add('tagline')
        line.textContent = tagline

        const cost = document.createElement('p')
        cost.setAttribute('aria-label', 'tarifs du photographe')
        cost.classList.add('price')
        cost.textContent = price +"€ / jour"


        article.appendChild(link)
        link.appendChild(img)
        link.appendChild(h2)
        article.appendChild(location)
        article.appendChild(line)
        article.appendChild(cost)


        return (article);
    }
    return { name, id, tagline, city, country, price, portrait, getUserCardDOM }
}