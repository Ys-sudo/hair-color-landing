
console.log("Hello 🌎");



function beforeAfter() {
  document.getElementById('compare').style.width = document.getElementById('slider').value + "%";
}





function showModal(){ 
console.log('open iframe'); 
 document.getElementById('appwrap').style.display = 'block'; document.getElementById('appwrap').style.opacity = '0';
  document.getElementById('appwrap').style.transition = 'opacity 1s';

  setTimeout(function(){document.getElementById('appwrap').style.opacity = '1';},1000);
}


function hideModal(){ 
console.log('close iframe'); 
  document.getElementById('appwrap').style.transition = 'opacity 1s';

  setTimeout(function(){document.getElementById('appwrap').style.opacity = '0';},500);
  setTimeout(function(){document.getElementById('appwrap').style.display = 'none';},1000);
  
}






function showCard(x) {
  if ( document.getElementsByClassName('card-content')[x].style.display == 'none'
  ) {
    document.getElementsByClassName('card-content')[x].style.display = 'block';
  } else {
    document.getElementsByClassName('card-content')[x].style.display = 'none';
  }

  if (
    document.getElementsByClassName('icon-card')[x].style.transform ==
    'rotate(90deg)'
  ) {
    document.getElementsByClassName('icon-card')[x].style.transform =
      'rotate(270deg)';
  } else {
    document.getElementsByClassName('icon-card')[x].style.transform =
      'rotate(90deg)';
  }
}



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});



/*
const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'Jak stworzyć kalendarz za pomocą kreatora kalendarzy?',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Jak stworzyć kalendarz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>Lorem ipsum...</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'Jak spersonalizować kalendarz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>Lorem ipsum...</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'Jak wysłać zapytanie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>Lorem ipsum...</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'Jak wyeksportować plik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>Lorem ipsum...</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'Jaki format wybrać?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>Lorem ipsum...</p>',
      },
    },
  ],
};
  */