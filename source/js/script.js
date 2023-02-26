const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const mapImage = document.querySelector('.map__image');
const mapLeaflet = document.querySelector('.map__leaflet');


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const swiper = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletElement: 'button',
    currentClass: `swiper-pagination-current`,
    bulletActiveClass: 'swiper-pagination-bullet-active'
  },
});

mapImage.classList.add('map__image--nojs');
mapLeaflet.classList.add('map__leaflet--nojs');

const map = L.map("map").setView({
  lat: 59.96838,
  lng: 30.31740,
}, 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

const mainPinIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.96832,
    lng: 30.31748,
  },
  {
    icon: mainPinIcon,
  },
);

marker.addTo(map);
