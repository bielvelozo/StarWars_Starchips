(function () {
  // config
  let $list

  
  // retorna os dados    
  function getData(callBack) {
    const url = "https://swapi.dev/api/starships/";

    
    fetch(url) // o fetch para requisicoes http atraves de promises
      .then((Response) => { //  o response e uma interface da fetch que representa um resposta a requisicao. Eu uso then para pegar o resultado da promessa quando ela for terminada
        return Response.json() // aqui e quis pegar os dados que estao no body que e uma string json
      })
      .then((data) => {
        
        callBack(data)
      })
  }

  function createListElement(data) {

    if (!data) return;

    data.results.forEach((item) => {
      const $li = document.createElement('li') 
      const $p = document.createElement('p') 
      const $p2 = document.createElement('p') 
      const $h1 = document.createElement('h1') 
      
      

      $h1.innerHTML = item.name 
      $p.innerHTML =  item.model
      $p2.innerHTML = item.manufacturer
    

      $list.appendChild($li) // junta isso no meu html
      $li.appendChild($h1) 
      
      $li.appendChild($p)
      $li.appendChild($p2)
    })
  }

  function getDOMElements() {
    $list = document.getElementById('ships');
    
  
  }


  // bootstrap
  function init() {
    getDOMElements();
     getData((data) => { // passo os conteudo do cb para o createListEment
      createListElement(data);
     });
  }
  
  window.onload = init;
})()

