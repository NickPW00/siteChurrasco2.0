let qs = id => document.querySelector(`${id}`);
let qsA = id => document.querySelectorAll(`${id}`);

// ----------------- Select ------------------

let select = qs("#select");
let selectBox = qs("#selectBox");
let selectBoxChildren = qsA("#selectBox div");

console.log(select);
console.log(selectBox.children);

select.addEventListener("click", _ => {
    selectBox.classList.toggle("hidden");
    selectBoxChildren.forEach(elemento => {
        elemento.onclick = _ =>{
        let alvo = event.target;
        select.innerHTML = alvo.innerHTML;
        selectBox.classList.toggle("hidden");
        }
    });
});

// ----------------- Radio ------------------

let radioC2 = qsA(".radioC2");
let radioC3 = qsA(".radioC3");
let ambos = qs(".ambos");
let todosMarcados = false

// ----toggle AMBOS --- 

ambos.onclick = marcarTodos

function marcarTodos() {
    if(ambos.classList.contains("marcado")){
        ambos.classList.toggle("marcado")
        radioC3.forEach(el => {el.classList.remove("marcado");})
    }
    else if(ambos.classList.contains("marcadoMetade")){
        ambos.classList.remove("marcadoMetade")
        radioC3.forEach(el => {el.classList.remove("marcado");})
    }
    else{
        ambos.classList.toggle("marcado")
        radioC3.forEach(el => {el.classList.toggle("marcado");})
    }

    /* ambos.classList.remove("marcadoMetade")
    ambos.classList.toggle("marcado")
    radioC3.forEach(el => {el.classList.toggle("marcado");}) */
    /* 
    if(todosMarcados == false){
        radioC3.forEach(el => {el.classList.add("marcado");})
        todosMarcados = true
    } else if(todosMarcados == true){
        radioC3.forEach(el => {el.classList.remove("marcado");})
        todosMarcados = false
    } */
}; 


// ----toggle normal --- 

radioC3.forEach(a => a.onclick = marcar) 

function marcar() {
    radioC3.forEach(a => a.classList.remove("marcado"));
    event.target.classList.toggle("marcado");
    ambos.classList.remove("marcado")
    ambos.classList.add("marcadoMetade")
};
