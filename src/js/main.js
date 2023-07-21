ymaps.ready(init);
  function init(){
// Создание карты.
    var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.769470, 37.628966],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,

  });
    var myPlacemark = new ymaps.Placemark([55.769470, 37.638966], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map_point.png',

    iconImageSize: [12, 12],
  });

  // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
  // Отключение скролла
    myMap.behaviors.disable('scrollZoom');
    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
}

//
let validFollow = new JustValidate("#form-follow")
validFollow.addField("#email-follow",  [
  {
    rule: "required",
    errorMessage: "Введите email!"
  },
  {
    rule: "email",
    errorMessage: "Недопустимый формат!"
  }
])
.onSuccess(async function follow() {
  let follow = {
    email: document.getElementById("email-follow").value
  }
  let res = await fetch("mail.php", {
    method: "POST",
    body: JSON.stringify(follow),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
  let resultFollow = await res.text()
  alert(resultFollow)
})

let validation = new JustValidate("#form")

validation.addField("#name", [
  {
    rule: "required",
    errorMessage: "Введите имя!"
  },
  {
    rule: "minLength",
    value: 2,
    errorMessage: "Минимум 2 символа!"
  }

]).addField("#email", [
  {
    rule: "required",
    errorMessage: "Введите email!"
  },
  {
    rule: "email",
    errorMessage: "Недопустимый формат!"
  }
])
.onSuccess(async function request() {
  let data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    msg: document.getElementById("msg").value,
  }

  let response = await fetch("mail.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
  let result = await response.text()
  alert(result)
})

// бургер-меню
  if (window.matchMedia("(min-width: 577px)").matches) {

  } else {
    let menuTimeline = gsap.timeline({paused: true});
    const burgerBtn = document.querySelector(".menu-box__burger");
    const closeBtn = document.querySelector(".close");

    menuTimeline
    .fromTo(".menu-box__menu", 0.5, {display: "none"}, {display: "block"})
    .fromTo(".menu-box__menu", 0.5, {opacity: 0}, {opacity: 1})

    burgerBtn.addEventListener("click", () => menuTimeline.play())
    closeBtn.addEventListener("click", () => menuTimeline.reverse())
  }

let contactBlockClose = gsap.timeline({paused: true});
const contactClose = document.querySelector(".address-box__close");

contactBlockClose
  .fromTo(".address-box", 0.5, {opacity: 1}, {opacity: 0})

contactClose.addEventListener("click", () => contactBlockClose.play())

let searchTimeline = gsap.timeline({paused: true});
const searchBtn = document.querySelector(".search-box__btn");
const closeSearchBtn = document.querySelector(".form-close");

searchTimeline
.fromTo(".search-form", 0.5, {display: "none"}, {display: "flex"})
.fromTo(".search-form", 0.5, {opacity: 0}, {opacity: 1})

searchBtn.addEventListener("click", () => searchTimeline.play())
closeSearchBtn.addEventListener("click", () => searchTimeline.reverse())
