import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
 
const countriesList = document.querySelector(".countries__list")
const searchCountries = document.querySelector(".search-input")

defaultModules.set(PNotifyMobile, {});

searchCountries.addEventListener("input", onSearchInput)

function onSearchInput(event) {
    fetchCountriesByName(event.target.value) 
}


function fetchCountriesByName(name){
    return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
}

function showNotification(){
    alert({
        text: 'Notice me, senpai!'
      });
}

function  createCountriesList(countries){
    return countries.map((country) => {
        return `<li> 
            <p>${country.name.official}</p>
        </li>`
    })
}

function createCountryCard() {
    return ` <h1>Contries search</h1>
     <p class="capital">capital:${country.capital}</p>
      <p class="population">population${country.population}</p>
      <p>Languages: ${country.languages.map(lang =>`<li>${lang.name}</li> `).join(', ')}</p>
      <ul></ul>
      <img src="${country.flag}" alt="Flag of ${country.name}">`
}