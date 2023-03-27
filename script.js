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
let ambos = qs("#ambos");

// ----toggle AMBOS --- 

ambos.onclick = (_ => {
    radioC3.forEach(el=> el.classList.toggle("marcado"));
})


// ----toggle normal --- 

radioC3.forEach(a => a.onclick = marcar) 

function marcar() {
    radioC3.forEach(_ => event.target.classList.toggle("marcado"))
}