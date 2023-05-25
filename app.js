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
// Função para enviar mensagem para o WhatsApp
function enviarMensagem() {
    // Número de telefone para enviar a mensagem
    var numeroTelefone = "+5517981646780";
    
    // Mensagem a ser enviada
    var mensagem = "Olá! Estou interessado em seus produtos.";
    
    // Gerar o link para o WhatsApp com o número de telefone e a mensagem
    var linkWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
    
    // Abrir o link do WhatsApp em uma nova janela ou aba
    window.open(linkWhatsApp);
  }
  
  // Obter o elemento do botão
  var botaoWhatsApp = document.querySelector('.rotate_btn .btn');
  
  // Adicionar o evento de clique ao botão para chamar a função enviarMensagem()
  botaoWhatsApp.addEventListener('click', enviarMensagem);
  
  window.addEventListener('DOMContentLoaded', function() {
    var bannerImage = document.getElementById('poster');
    var cardImages = document.querySelectorAll('.dis');
    var currentIndex = 0;
    var intervalId = null;
    var isCarouselActive = true;

  function changeBannerImage() {
    if (isCarouselActive) {
      bannerImage.src = cardImages[currentIndex].src;
      currentIndex = (currentIndex + 1) % cardImages.length;
    }
  }

  intervalId = setInterval(changeBannerImage, 4000);

  // Função para parar o carrossel quando o usuário clicar em um card
  function stopCarousel() {
    isCarouselActive = false;
  }

  // Adicionar um event listener a cada card para parar o carrossel quando clicado
  cardImages.forEach(function(cardImage) {
    cardImage.addEventListener('click', stopCarousel);
  });
});

  