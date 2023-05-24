// add scroll function to little arrow
let left = document.getElementsByClassName('bi-caret-left-fill')[0];
let right = document.getElementsByClassName('bi-caret-right-fill')[0];
let cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})
right.addEventListener('click', () => {
    cards.scrollLeft += 140;
})

// change the content to be shown on the top
let poster = document.getElementById('poster');
let title = document.getElementById('title');
let price_cont = document.getElementById('price_cont');
let discription = document.getElementById('discription');

Array.from(document.getElementsByClassName('card')).forEach((ele, i) => {
    ele.addEventListener('click', ()=>{
        poster.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h5')[0].innerText;
        price_cont.innerText = ele.getElementsByTagName('h4')[0].innerText;
        discription.innerText = ele.getElementsByTagName('p')[0].innerText;
    })
})