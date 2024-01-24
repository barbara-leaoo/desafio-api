const container = document.getElementById('container')

fetch('https://restcountries.com/v3.1/name/brazil')

    .then(response => response.json())

    .then(response => exibirDados(response))

    .catch(err => console.log(err))



function exibirDados(dados) {
    const elemento = document.createElement('div')
    elemento.innerHTML = `
    <img src="${dados[0].flags.png}" alt="${dados[0].flags.alt}"/>
    <p>${dados[0].capital}</p>
    <p>${dados[0].languages.por}</p>
    `
    container.append(elemento)

} 