---
date: 2018-09-23 01:07:28
title: "Realizando uma chamada assícrona utilizando a API XMLHttpRequest"
description: "Como utilizar a API XMLHttpRequest para executar um AJAX e obter dados de uma API REST"
category: Javascript
color: "#F7DF1E"
---

# Introdução

Nessa série de 3 posts, primeiramente irei demonstrar como realizar uma chamada AJAX utilizando a API XMLHttpRequest para obter dados de um API REST de versículos bíblicos.

Não iremos focar na utilização da API REST e sim, exemplicar o uso de chamada assíncrona utilizando essa antiga API XMLHttpRequest (não tinha um nomezinho pior?), desenvolvida pela Microsoft da época do ronca.

O conjunto de métodos [XMLHttpRequest](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHTTPRequest) foi criado para possibilitar a transferência de dados cliente/servidor, possibilitando assim a recuperação de dados de uma URL sem a necessidade de atualizar uma página inteira. Dessa forma, apenas uma parte do conteúdo é mostrado e a página não é interrompida.

### E esse tal de AJAX?

JavaScript assíncrono + XML foi um acrônimo utilizado para aplicações WEB capazes de atualizar conteúdo apenas da parte de interesse do usuário, sem ter que recarregar a página inteira do navegador, tornando a aplicação mais rápida.

Criado inicialmente para atender o XML, hoje em dia o JSON é mais utilizado tendo em vista sua maior popularidade, além de possuir um código mais enxuto e menos verboso.

Sendo assim, no nosso exemplo utilizaremos uma chamada AJAX para obter dados aleatórios de uma API REST de textos bíblicos.

```html
<div class="box">
  <h3>
    Data:
    <span id="verse"></span>
  </h3>
  <button id="btn">Refresh Data</button>
</div>
```

#### Nossa encheção de linguiça.

```css
body {
  background-color: bisque;
}
.box {
  background-color: graytext;
  font-family: monospace, sans-serif;
  width: 60%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  border: 1px solid crimson;
  box-sizing: content-box;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
  h3 {
    margin: 20px;
    color: crimson;
  }
  span {
    color: white;
    font-weight: normal;
  }
  button {
    font-family: inherit;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: bold;
    outline: none;
    color: white;
    background-color: crimson;
    border: none;
    padding: 10px 0;
    cursor: pointer;
    text-transform: uppercase;
  }
}
```

#### O que realmente importa.

```javascript
// our selectors
const btn = document.querySelector("#btn")
const span = document.querySelector("#verse")

// a new event
btn.addEventListener("click", function() {
  // we create an instance of XMLHttpRequest
  let XHR = new XMLHttpRequest()

  XHR.onreadystatechange = function() {
    // 4 means complete or request finished and response is ready
    if (XHR.readyState == 4 && XHR.status == 200) {
      // JSON parse
      let data = JSON.parse(XHR.responseText)
      // function getData below
      let index = getData(data)
      console.log(`The Verse ${index.title} Says: ${index.preview}`)
      span.innerText = `The Verse of ${index.title} Says: ${index.preview}`
    }
  }
  // an exemple for calling the restful api
  XHR.open(
    "GET",
    "https://api.biblia.com/v1/bible/search/LEB.txt?query=bread&mode=verse&start=0&limit=100&key=fd37d8f28e95d3be8cb4fbc37e15e18e"
  )
  XHR.send()

  function getData(data) {
    return data.results[Math.floor(Math.random() * data.results.length)]
  }
})
```

### Resultado

![meu lindo versiculo em AJAX](/assets/images/verse-ajax.png)

### Código escrito no CodePen.io

https://codepen.io/dutraneto/pen/mjVjpX

## Conclusão

No segundo post da série AJAX, implementaremos a chamada utilizando JQuery
