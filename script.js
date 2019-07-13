document.querySelector("#btn-start").addEventListener("click", () => {
    document.querySelector(".base-genrer").scrollIntoView({ behavior: "smooth" });
});

const stickers = document.querySelector('.stickers');
const search = document.getElementById('sticker');

const botao = document.querySelector('#btn-busca');

botao.addEventListener('click', (evento) => {
    evento.preventDefault();
    stickers.innerHTML = '';

    fetch(`http://api.giphy.com/v1/gifs/search?q=${search.value()}&api_key=P963A9NlSKYv7fOLRaTYob8TVoF5Eplh`)
    
        .then((response) => {
            return response.json()
        })

        .then((data) => {
            data.data.forEach((figuras) => {
                const box = document.createElement('div');
                box.setAttribute('class', 'box');
                box.setAttribute('data-id', figuras.id);
                stickers.appendChild(box);

                const gif = document.createElement('img');
                gif.setAttribute('src', figuras.images.fixed_height.url);
                box.appendChild(gif);
            })
        })

        .catch((erro) => {
            console.log(erro);
        })
})