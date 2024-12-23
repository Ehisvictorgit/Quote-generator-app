'use strict' ;
const wrapper = document.getElementById('container')
const quote = document.querySelector('.quote-generator')
const btn = document.querySelector('.btn-btn')
const button = document.querySelector('.click')
const textQuote = document.querySelector('.quote-text')
const apiKey ='https://corsproxy.io/?url=https://zenquotes.io/api/quotes'

const fetchApi = async() =>{
    const result = await fetch(apiKey)
    const data = await result.json()
    const infos = data
    infos.map((infos) => {
        return displayQuote(infos)
    })

}
fetchApi()

//function to display quote
function displayQuote(infos) {
textQuote.innerHTML = infos.q
button.addEventListener('click',fetchApi)
}
displayQuote()
















 