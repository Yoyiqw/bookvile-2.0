const footer = document.querySelector(".footer__li")

const data = [
    {
        icon: "../assets/img/bookvile.png",
    },
    {
        li: "О нас",
    },
    {
        li: "Мероприятия",
    },
    {
        li: "Скидки",
    },
    {
        li: "Доставка и оплата",
    },
    {
        li: "Блог",
    },
    {
        li: "Контакты",
    },
    {
        icon: "../assets/icons/phone.svg",
        num: " +7 999 140 00 00"
    },
]

//первый вариант

for (let i = 0; i < data.length; i++) {
    if(data[i].li) {
        footer.innerHTML +=
        `<li class="footer__info">${data[i].li}</li>`
    } else {
        footer.innerHTML +=
        `<li class="footer__phone">
        <img class="footer__icon" src="${data[i].icon}"alt="">${data[i].num ? data[i].num : ''}</li>`
    }
}



{/* <li class="footer__info">${data[i].img ? data[i].img : ''} ${data[i].li ? data[i].li : ''}${data[i].num ? data[i].num : '<img class="footer__icon" src="${data[i]}" alt=""'}  </li> */}
// footer.innerHTML += `<img class="footer__img" src="${data[0].img}" alt="">`
// footer.innerHTML += `<img class="footer__icon" src="${data[0].icon}" alt=""`