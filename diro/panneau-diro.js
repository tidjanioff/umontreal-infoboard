let rssDiro = 'https://diro.umontreal.ca/departement/nouvelles/rss/';

function extraire(url) {
	fetch(url)
    .then(response => response.text())
    .then(xmlText => {
    	let parser = new DOMParser();
    	let xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    	let items = xmlDoc.getElementsByTagName('item');
		let troisPremiersItems = Array.from(items).slice(0, 3);
    	let myContainer = document.getElementById('container');
    	troisPremiersItems.forEach(item => {
			let titre = item.getElementsByTagName('title')[0].textContent;
			let tagImage = item.getElementsByTagName('enclosure')[0];
			let urlImage = '';
			if (tagImage) {
				urlImage = tagImage.getAttribute('url');
			} else {
				urlImage = 'diro/udemlogo.png'; 
			}
			let nouvelleDiv = document.createElement('div');
			nouvelleDiv.classList.add('nouvelle');
			let titleDiv = document.createElement('div');
        	titleDiv.classList.add('titre');
			let titleParagraphe = document.createElement('p');
			titleParagraphe.textContent = titre;
			titleDiv.appendChild(titleParagraphe);

			let imageDiv = document.createElement('div');
			imageDiv.classList.add('image');
			let imageElement = document.createElement('img');
			imageElement.src = urlImage;
			imageDiv.appendChild(imageElement);
			nouvelleDiv.appendChild(titleDiv);
			nouvelleDiv.appendChild(imageDiv);
			myContainer.appendChild(nouvelleDiv);
		});
    })
    .catch(error => {
    	console.error('Erreur lors de la récupération du flux RSS:', error);
    });
}

extraire(rssDiro);


