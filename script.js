let qs = id => document.querySelector(`${id}`);
let qsA = id => document.querySelectorAll(`${id}`);

// ----------------- Nome --------------------

let validacoes = {
    nome: false,
    email:false,
    telefone: false,
    radio:false,
    check: false,
    texto: false,
    selecionar: false
}

function validar() {
    validaNome()
    validacaoEmail()
    validacaoTelefone()
    validacaoTexto()
    validarSelecionar()
    verificar();
}

let input = qsA("input")

function verificar() {
    for(let el in validacoes){
        if(validacoes[el] == true) {
        checkValidacao = true
        } else if(validacoes[el] == false) {
        checkValidacao = false;
        alert(`O elemento ${el} está incorreto.`)
        break;
        }
    }
    if(checkValidacao == true){
        input.forEach(el => el.value = "") 
        alert("Você foi Cadastrado.")
    }
}


let nome = qs("#nome");

function validaNome() {
    let nomeArray = nome.value.split("")
    seEntao(nomeArray.indexOf(" ") > -1, "nome");
}

let email = qs("#email"); 

function validacaoEmail() {
    let chave1 = false
    let chave2 = false
    let emailArray = email.value.split("")
    let eAiOf = emailArray.indexOf("@")
    for(let el of emailArray) {
        if(el == "@") {
        for(let el of emailArray){if(el === "."){chave1 = true}
            }
        }
    }
    if(emailArray.indexOf("@") + 2 < emailArray.indexOf(".", "@")){
        chave2 = true
    }
    if(chave1 && chave2){validacoes.email = true}
}

let telefone = qs("#telefone")

function validacaoTelefone() {
    let telefoneArray = telefone.value.replaceAll(/[()-]/g, "").replaceAll(" ", "").split("");
    seEntao(telefoneArray.length === 11, "telefone")
}

function seEntao(sentenca, lugar) {
    if(sentenca) {validacoes[`${lugar}`] = true;} 
            else {validacoes[`${lugar}`] = false;}
}

// ----------------- Radio ------------------

let radioC3 = qsA(".radioC3");

radioC3.forEach(a => a.onclick = marcar) 

function marcar() {
    radioC3.forEach(a => a.classList.remove("marcado"));
    event.target.classList.toggle("marcado");
    for(let a of radioC3){
        if(a.classList.contains("marcado")){
            validacoes.radio = true
        }
    }
};

// CheckBox

let check = qsA(".check");
let meios = qs(".meios");

meios.onclick = marcarTodos

function marcarTodos() {
    if(meios.classList.contains("marcado")){
        meios.classList.toggle("marcado")
        check.forEach(el => {el.classList.remove("marcado");})
        validacoes.check = false;
    }
    else if(meios.classList.contains("marcadoMetade")){
        meios.classList.remove("marcadoMetade")
        check.forEach(el => {el.classList.remove("marcado");})
        validacoes.check = false;
    }
    else{
        meios.classList.toggle("marcado")
        check.forEach(el => {el.classList.toggle("marcado");})
        validacoes.check = true;
    }
}; 

let todosMarcados = false
let nenhumMarcado = true

check.forEach(a => a.onclick = marcarCheck) 

function marcarCheck() {
    if(event.target.classList.contains("marcado")){
        event.target.classList.remove("marcado");
        checagemDeTodos()
        if(todosMarcados === false){ 
            meios.classList.remove("marcado");
            meios.classList.add("marcadoMetade");
        }
        if(nenhumMarcado === true){
            meios.classList.remove("marcadoMetade");
        }
    } else {
        event.target.classList.add("marcado");
        checagemDeTodos()
        if(todosMarcados === true){
            meios.classList.add("marcado")
            meios.classList.remove("marcadoMetade")
        } else if(nenhumMarcado === false){
            meios.classList.add("marcadoMetade");
        }
    }
}; 

function checagemDeTodos(){
    for(let el of check){
        if(el.classList.contains("marcado")){
            todosMarcados = true
            validacoes.check = true;
        }
        else{
            todosMarcados = false; break;
        }
    }
    for(let el of check){
        if(!el.classList.contains("marcado")){
            nenhumMarcado = true; validacoes.check = false;
        }
        else{
            nenhumMarcado = false;
            validacoes.check = true;
            break;
        }
    }
}

let texto = qs("#texto")

function validacaoTexto() {
    let textoArray = texto.value.split("")
    seEntao(textoArray.length > 5, "texto");
}

let select = qs("#select")
let selectBox = qs("#selectBox")
let selectBoxFilhos = qsA("#selectBox div")

function selecionar() {
    selectBox.classList.toggle("hidden");
    selectBoxFilhos.forEach(el => {
        el.onclick = _ => {
            select.innerHTML = event.target.innerHTML;
            selectBox.classList.toggle("hidden");
    }})
}

select.onclick = selecionar

function validarSelecionar () {
    if(select.innerHTML != "Selecione"){
        validacoes.selecionar = true
    }
}