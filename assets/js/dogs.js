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

    [...products.products].map((elem, index) => {
        if(elem) {
            var markup = `
                <div class="dogs">
                    <img src="${elem.image}" alt="${elem.name}" title="${elem.name}"/>
                    <h2>${elem.name}</h2>
                    <p>${elem.price}</p>
                    <article>${elem.description}</article>
                    <button class="js--addToCart" data-index="${index}">Eu quero!</button>
                </div>
            `;
            document.querySelector('.insert-items').innerHTML += markup;
        }
    });

    const buttonDogs = document.querySelectorAll('.js--addToCart');
    if(buttonDogs) {
        [...buttonDogs].map(button => {
            button.addEventListener('click', (ev) => {
                ev.preventDefault();
                const $this = ev.currentTarget;
                const dogIndex = $this.getAttribute('data-index');
                const dogName  = $this.closest('.dogs').querySelector('h2').textContent;
                const dogDescription  = $this.closest('.dogs').querySelector('article').textContent;
                const dogPrice  = $this.closest('.dogs').querySelector('p').textContent;
                const dogPhoto  = $this.closest('.dogs').querySelector('img').getAttribute('src');
                console.log(dogPhoto);
                let currentDogs = {
                    "index": dogIndex,
                    "name": dogName,
                    "desc": dogDescription,
                    "price": dogPrice,
                    "photo": dogPhoto
                }
                let convertDataDogs = JSON.stringify(currentDogs);

                function appendToStorage(name, data) {
                    var old = localStorage.getItem('Products');
                    if(old == null) {
                        old = [];
                    } else {
                        old = JSON.parse(old);
                    }
                    localStorage.setItem('Products', JSON.stringify(old.concat(data)));
                }
                appendToStorage('Products', convertDataDogs);
                updateMiniCart();
            });
        });
    }

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
    };

    function updateMiniCart() {
        let getProducts =  (localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : '');
        [...getProducts].map(dogs => {
            const convertJson = JSON.parse(dogs);
            const dogIndexMiniCart = convertJson.index;
            const dogNameMiniCart = convertJson.name;
            const dogDescMiniCart = convertJson.desc;
            const dogPriceMiniCart = convertJson.price;
            const dogPhotoMiniCart = convertJson.photo;

            const markuptItems = `
                <div class="mini-cart__flex" data-index="${dogIndexMiniCart}">
                    <div class="mini-cart__image">
                        <img src="${dogPhotoMiniCart}" alt="${dogNameMiniCart}" title="${dogNameMiniCart}" />
                    </div>
                    <div class="mini-cart__wrapper">
                        <div class="mini-cart__name">
                            Nome: ${dogNameMiniCart}
                        </div>
                        <div class="mini-cart__desc">
                            Características: ${dogDescMiniCart}
                        </div>
                        <div class="mini-cart__price">
                            Preço: ${dogPriceMiniCart}
                        </div>
                    </div>
                </div>
            `;
            document.querySelector('.js--minicart').innerHTML += markuptItems;
            document.querySelector('.mini-cart').classList.add('is--active');
        })
    };

    updateMiniCart();

})

