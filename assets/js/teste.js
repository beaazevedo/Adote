document.addEventListener('DOMContentLoaded', (event) => {
    var products = {
        "products": [
          {
            "name": "Doguinho 1",
            "image": "https://pbs.twimg.com/profile_images/908342792383950854/0EMo1dd1.jpg",
            "age": 2,
            "description": "Bonito",
            "price": 'Muito amor'
          },
          {
            "name": "Doguinho 2",
            "image": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
            "age": 5,
            "description": "Carinhoso",
            "price": 'Bastante amor'
          },
          {
            "name": "Doguinho 3",
            "image": "https://animais.culturamix.com/blog/wp-content/gallery/cachorros-para-adotar-1/Cachorros-Para-Adotar-2.jpg",
            "age": 8,
            "description": "Amigão",
            "price": 'Infinito de amor'
          },
        ]
    };

    [...products.products].map(elem => {
        if(elem) {
            var markup = `
                <div>
                    <img src="${elem.image}" alt="${elem.name}" title="${elem.name}"/>
                    <h2>${elem.name}</h2>
                    <p>${elem.price}</p>
                    <article>${elem.description}</article>
                    <button class="js--addToCart">Eu quero!</button>
                </div>
            `;
            document.querySelector('.insert-items').innerHTML += markup;
        }
    });

    const form = document.getElementById('form');

    if(form) {
        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            document.getElementByclass('js--addToCart').value = 'enviando...';
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let  data = {
                name, 
                email,
            }
    
            let convertData = JSON.stringify(data);
            localStorage.setItem('lead', convertData);
            document.getElementById('form_submit').value = 'enviado';
        })
    }
})

