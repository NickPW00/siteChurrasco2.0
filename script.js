let qs = id => document.querySelector(`${id}`);
let qsA = id => document.querySelectorAll(`${id}`);

// ----------------- Nome --------------------

let validacoes = {
    nome: false,
    email:false,
    telefone: false,
    check: false,
    cpf: false,
    data: false,
    endereco: false,
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
    let eAiOf = emailArray.indexOf("@")
    emailArray = email.value.split("")
    emailArray.forEach(el => {
        if(el === "@") {
        emailArray.forEach(le => {if(le === "."){chave1 = true}})
        }
    })
    if(emailArray.indexOf("@") < emailArray.indexOf(".", eAiOf + 1)){
        chave2 = true
    }
    if(chave1 && chave2){validacoes.email = true}
}

let telefone = qs("#telefone")

function validacaoTelefone() {
    let telefoneArray = telefone.value.replaceAll(/[()-]/g, "").split("");
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
            validacoes.check = true
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
    }
    else if(meios.classList.contains("marcadoMetade")){
        meios.classList.remove("marcadoMetade")
        check.forEach(el => {el.classList.remove("marcado");})
    }
    else{
        meios.classList.toggle("marcado")
        check.forEach(el => {el.classList.toggle("marcado");})
    }
}; 

let todosMarcados = false
let nenhumMarcado = true

check.forEach(a => a.onclick = marcar) 

function marcar() {
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
        }
        else{
            todosMarcados = false; break;
        }
    }
    for(let el of check){
        if(!el.classList.contains("marcado")){
            nenhumMarcado = true
        }
        else{
            nenhumMarcado = false; break;
        }
    }
}