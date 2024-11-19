const list = document.querySelector('ul')
let isRendered = false
let listHTML = '';
let descountOneTime = true
let priceCart = 0

function descount() {

    if (descountOneTime) {
        myOpitions = myOpitions.map(product => {
            const descountPrice = product.price - product.price / 10;
            return { ...product, price: descountPrice };
        });
        descountOneTime = false
    }
    listHTML = ''
    isRendered = false
    myMenu();

}



function myMenu() {

    if (isRendered) {
        listHTML = ''
        isRendered = false
        return
    }

    myOpitions.forEach((element) => {
        listHTML +=
            `<li>
            <img src=${element.src}>
            <p>${element.name}</p>
            <p class="item-price">R$:${element.price.toFixed(2)}</p>
        </li>`
    });

    list.innerHTML = listHTML;
    isRendered = true

}

function endCart() {
    const myValue = myOpitions.reduce((acc, element) => acc + element.price, 0);
    console.log(myValue);

    listHTML = ''
    listHTML +=
        `<li>
            <p>O valor total do seu carrinho ficou em :</p>
            <p class="item-price">${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: 'BRL'
        }).format(myValue)}</p>
        </li>`
    list.innerHTML = listHTML;
    isRendered = true
}

function vegFilter(){
    listHTML = ''
    const vegOptions = myOpitions.filter(value => value.vegan === true)
    vegOptions.forEach((element) => {
        listHTML +=
            `<li>
            <img src=${element.src}>
            <p>${element.name}</p>
            <p class="item-price">R$:${element.price.toFixed(2)}</p>
        </li>`
    });
    isRendered = true
    list.innerHTML = listHTML;
}