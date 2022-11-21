var container = document.querySelector('.container')
var form = document.querySelector('form')

async function Fetch() {
    for (let index = 1; index < 100; index++) {
        let data = await fetch(`https://dummyjson.com/products/${index}`)
        let res = await data.json();

        let div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
            <h3>${res.title}</h3>
            <img src='${res.thumbnail}' alt='' />
            <p>${res.description}</p>
            <strong>${res.price} USD</strong>
        `
        container.appendChild(div);
        console.log(res);
    }
}

function Search() {
    let search = document.querySelector('input').value;
    let item = document.querySelectorAll('h3');

    for (let index = 0; index < item.length; index++) {
        if (item[index].innerHTML.toLowerCase().includes(search.toLowerCase())) {
            item[index].scrollIntoView()
        }
    }
}