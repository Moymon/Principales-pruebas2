document.querySelector('#genera-poke').addEventListener('click',MuestraPokedex);
document.querySelector('#genera-poke').addEventListener('touch',MuestraPokedex);

function MuestraPokedex(e)
{
    e.preventDefault();
    ///LeerVariable
    const Tipo = document.getElementById('Arquetipo');
    const TipoSeleccionado = Tipo.options[Tipo.selectedIndex].value;
    console.log(TipoSeleccionado);
    let url ='';
    url = 'pokedex.json';
    console.log(url);
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);

    xhr.onload= function()
    {
        if(this.status === 200)
        {
            const pokes = JSON.parse(this.responseText);
            console.log(pokes);
            let contenido ='';
            
            var i;
            for(i in pokes.pokemons)
            {
                var tam = pokes.pokemons[i].type;
                contenido += '<div class="textcenter">';
                if(TipoSeleccionado != 0)
                {
                    if(tam[0] == TipoSeleccionado)
                    {
                        console.log(pokes.pokemons[i].name);
                        contenido+=`<p> CP  ${pokes.pokemons[i].cp} </p>`;
                        contenido+= `<img src="${pokes.pokemons[i].sprite} ">`;
                        contenido+=`<p> ${pokes.pokemons[i].name} </p>`;
                    }
                    else if(tam[1] == TipoSeleccionado)
                        {
                            console.log(pokes.pokemons[i].name);
                            contenido+=`<p> CP  ${pokes.pokemons[i].cp} </p>`;
                            contenido+= `<img src="${pokes.pokemons[i].sprite} ">`;
                            contenido+=`<p> ${pokes.pokemons[i].name} </p>`;
                        }
                }else if(TipoSeleccionado == 0)
                {
                    console.log(pokes.pokemons[i].name);
                    contenido+=`<p> CP  ${pokes.pokemons[i].cp} </p>`;
                    contenido+= `<img src="${pokes.pokemons[i].sprite} ">`;
                    contenido+=`<p> ${pokes.pokemons[i].name} </p>`;
                }
                contenido += '</div>';
            }

            document.getElementById('Pokemon').innerHTML = contenido;
        }
    }
    xhr.send();
}
