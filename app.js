document.querySelector('#genera-poke').addEventListener('click',MuestraPokedex);
document.querySelector('#genera-poke').addEventListener('touch',MuestraPokedex);
/*document.querySelector('#Pokemon').addEventListener('click',Puchamon);
document.querySelector('#Pokemon').addEventListener('touch',Puchamon);
*/
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
            /*console.log(pokes);*/
            let contenido ='';
            
            var i;
            for(i in pokes.pokemons)
            {
                var tam = pokes.pokemons[i].type;
                
                if(TipoSeleccionado != 0)
                {
                    if(tam[0] == TipoSeleccionado)
                    {
                        contenido += `<div class=" border textcenter id="${pokes.pokemons[i].name}" onclick="Unique('${pokes.pokemons[i].name}')
                        ontouch=Unique('${pokes.pokemons[i].name}')"">`;
                        /*console.log(pokes.pokemons[i].name);*/
                        contenido+=`<p> CP  ${pokes.pokemons[i].cp} </p>`;
                        contenido+= `<img src="${pokes.pokemons[i].sprite} ">`;
                        contenido+=`<p> ${pokes.pokemons[i].name} </p>`;
                        contenido+=` <div class="fondoblanco border textcenter"> 
                        <div class="teal leng-box " style="width: 100%;"></div></div>`;
                    }
                    else if(tam[1] == TipoSeleccionado)
                        {
                            contenido += `<div class=" border textcenter id="${pokes.pokemons[i].name}" onclick="Unique('${pokes.pokemons[i].name}')"
                            ontouch=Unique('${pokes.pokemons[i].name}')">`;
                            /*console.log(pokes.pokemons[i].name);*/
                            contenido+=`<p> CP  ${pokes.pokemons[i].cp} </p>`;
                            contenido+= `<img src="${pokes.pokemons[i].sprite} ">`;
                            contenido+=`<p> ${pokes.pokemons[i].name} </p>`;
                            contenido+=` <div class="fondoblanco border textcenter"> 
                            <div class="teal leng-box " style="width: 100%;"></div></div>`;
                        }
                }else if(TipoSeleccionado == 0)
                {
                    contenido += `<div class=" border textcenter id="${pokes.pokemons[i].name}" onclick="Unique('${pokes.pokemons[i].name}')" 
                    ontouch=Unique('${pokes.pokemons[i].name}')">`;
                    /*console.log(pokes.pokemons[i].name);*/
                    contenido+=`<p> CP  ${pokes.pokemons[i].cp} </p>`;
                    contenido+= `<img src="${pokes.pokemons[i].sprite} ">`;
                    contenido+=`<p> ${pokes.pokemons[i].name} </p>`;
                    contenido+=` <div class="fondoblanco border textcenter"> 
                    <div class="teal leng-box " style="width: 100%;"></div></div>`;
                }
                contenido += '</div>';
            }

            document.getElementById('Pokemon').innerHTML = contenido;
        }
    }
    xhr.send();
    window.scroll(0, 0);
}

function Unique(e)
{
    let url ='';
    url = 'pokedex.json';
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);

    xhr.onload= function()
    {
        if(this.status === 200)
        {
            const pokes = JSON.parse(this.responseText);
        
            let contenido ='';
            var i;
            for(i in pokes.pokemons)
            {
                if(e == pokes.pokemons[i].name)
                {   contenido+='<div class="textcenter">';
                    contenido+=`<p> CP  ${pokes.pokemons[i].cp} </p>`;
                    contenido+= `<img src="${pokes.pokemons[i].sprite} ">`;
                    contenido+=`<p> ${pokes.pokemons[i].name} </p>`;
                    contenido+=`<div class="teal leng-box textverde" style="width: 100%;"></div>`;
                    contenido+=`<p> ${pokes.pokemons[i].hp} / ${pokes.pokemons[i].hp} HP </p>`;

                    contenido+=`<div class="Tip">`;

                    var arr = pokes.pokemons[i].type;
                    var long = arr.lenght;

                    for(j in pokes.types)
                    {
                        if(arr[0] == pokes.types[j].id)
                        {
                            contenido+=`<div class=" m-1 ${pokes.types[j].name}"> ${pokes.types[j].name} </div>`;
                        }
                            if(arr[1] == pokes.types[j].id)
                            {
                                contenido+=`<div class="m-1 ${pokes.types[j].name}"> ${pokes.types[j].name} </div>`;
                            }
                    }
                    contenido+=`</div>`;
                    contenido+=`<p> Attack ${pokes.pokemons[i].attack} / Defense ${pokes.pokemons[i].defense} </p>`;
                }
                contenido += '</div>';
            }

            document.getElementById('Unico').innerHTML = contenido;
        }
    }
    xhr.send(); 
}
