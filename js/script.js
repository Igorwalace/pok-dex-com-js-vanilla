    
    var numero = document.getElementById('numero')
    numero.addEventListener('keyup', ()=>{
        ProcurarPokemons(Number(numero.value))
    })
    
    ProcurarPokemons(1)
    function ProcurarPokemons(numero){
        fetch('https://pokeapi.co/api/v2/pokemon?limit='+numero)
        .then(response => response.json())
        .then(nomePokemons => {
            var obj = [];

            nomePokemons.results.map((link)=>{

                fetch(link.url)
                .then(responseLink => responseLink.json())
                .then(imgPokemons => {
                    obj.push({nome:link.name, imagem:imgPokemons.sprites.front_default})
                        
                    if(obj.length == numero){

                        var boxPokemon = document.querySelector('.box-pokemon')
                        boxPokemon.innerHTML = '';

                        obj.map((link)=>{
                        boxPokemon.innerHTML += `
                        <div class="box-pokemon-single">
                        <img src="`+link.imagem+`" alt="">
                        <h1>`+link.nome+`</h1>
                        </div><!--box-pokemon-single-->
                        `
                        })

                    }
                       
                })
            })
        })
    }
