document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form');

    if(form) {
        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            document.getElementById('form_submit').value = 'enviando...';
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

