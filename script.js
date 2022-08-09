class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calculaArea()
    }

    #calculaArea() {
        return this.altura * this.largura
    }
}

const soma = new Poligono(50, 60)

console.log(soma.area)

// exemplo de encapsulamento com function => (praticando o conceito dentro do POO)
function Password(mypassword, yourpassword) {
    this.mypassword = mypassword
    this.yourpassword = yourpassword

    let secretPassword = 12345

    this.getPassword = () => {
        return `Estou jogando para fora a senha ${secretPassword}`
    }

    this.twoPasswords = () => {
        return `Minhas principais senhas são ${this.mypassword + ' e ' + this.yourpassword}`
    }
}

const seePassword = new Password('macarraocomqueijo', 1007)
console.log(seePassword.getPassword(), seePassword.twoPasswords())

// Estruturado
// let valorHora = 50
// let tempoEstimado = 20
// let desconto = valorHora * tempoEstimado * (10 / 100)
// let custoEstimado = valorHora * tempoEstimado - desconto
// console.log(custoEstimado)

// Orientado a Objeto
let job = new job()
let valorHora = 50
let tempoEstimado = 20
let desconto = 10
const custoEstimado = job.calculatudo()

console.log(custoEstimado)




