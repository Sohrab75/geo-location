// weather data 

let x = document.getElementById('out');
            let y = document.getElementById('weather');
            function geolocation(){
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(showPosition);
                }else{
                    x.innerText = "Geo Not Supoorted"
                }
            }

            function showPosition(data){
                //alert("Hello")
                console.log(data)
                let lat = data.coords.latitude;
                let lon = data.coords.longitude;
                //x.innerText = `Latitude is ${lat} and longitude is ${lon}`;
                const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
                //api calling
                fetch(url,{method:"GET"})
                //return promise
                .then((res) => res.json())
                //resolve promise and get data
                .then((data) => {
                    console.log(data);
                    let cityName = data.city.name;
                    let temp = data.list[0].temp.day;
                    y.innerText= `Weather of ${cityName} is ${temp} °C`;
                })
            }

            
const Container = document.querySelector(".container");
const closeBtn = document.querySelector(".container .close");

function loadCoupon(){
  Container.classList.add("active");
  // document.getElementsByClassName('.container').style.display = 'block';
  // document.getElementById('body').style.opacity='0'
}

function closeCoupon(){
  Container.classList.remove("active");
}

var cpnBtn = document.getElementById("cpnBtn");
var cpnCode = document.getElementById("cpnCode");
cpnBtn.onclick = function(){
  navigator.clipboard.writeText(cpnCode.innerHTML);
  cpnBtn.innerHTML = "COPIED";
  setTimeout(function(){
    cpnBtn.innerHTML = "COPY CODE";

  }, 3000);
}




let searchForm= document.querySelector('.search-form');

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function myFunction1() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

document.querySelector('#search-btn').onclick =() => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove ('active');
    navbar.classList.remove ('active');
    loginForm.classList.remove ('active');
}

let shoppingCart= document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick =() => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove ('active');
    loginForm.classList.remove ('active');
}
let loginForm= document.querySelector('.login-form');

document.querySelector('#login-btn').onclick =() => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove ('active');
    navbar.classList.remove ('active');
}
let navbar= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =() => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove ('active');
    loginForm.classList.remove ('active');
}
window.onscroll =() => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove ('active');
    navbar.classList.remove ('active');
    loginForm.classList.remove ('active');
}


var swiper = new Swiper(".products-slider", {
    loop:true, 
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true, 
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });