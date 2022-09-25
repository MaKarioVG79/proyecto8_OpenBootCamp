
// - Una función sin parámetros que devuelva siempre "true"

function siempreTrue (verdad = true){
    console.log(verdad);
}

siempreTrue();


// - Una función asíncrona que utilice un setTimeout 
// y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

setTimeout (()=> {
    console.log( "Hola soy una promesa")
}, 5000 ) 


// - Una función generadora de índices pares automáticos

function* paresAut() {
    let id = 0;
    while(true){
        id = id +2  
        if (id > 16){
            return id
        }
        yield id
    }
}

    const gen = paresAut();

    console.log(gen.next().value)