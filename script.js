let nome = document.getElementById("nome");
let cognome = document.getElementById("cognome");
let dataDiNascita = document.getElementById("data-di-nascita");
let submit = document.getElementById("submit");

class Persona {
    constructor(nome,cognome,data) {
        this.nome = nome;
        this.cognome = cognome;
        this.data = data;
    }
    createRow(howManyTd) {
        let tbody = document.querySelector("tbody");
        let tr = document.createElement("tr");
        tbody.appendChild(tr)
        for(let i = 0; i < howManyTd; i++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }
    }
}

let persone = []

submit.addEventListener("click", function() {
    new Persona().createRow(3);
    nuovaPersona = new Persona(nome.value , cognome.value , dataDiNascita.value);
    persone.push(nuovaPersona);
    let td = document.querySelectorAll("td");
    let ultimaPersonaInserita = persone[persone.length-1]
    td[td.length-3].innerHTML = ultimaPersonaInserita.nome
    td[td.length-2].innerHTML = ultimaPersonaInserita.cognome
    td[td.length-1].innerHTML = ultimaPersonaInserita.data
})
