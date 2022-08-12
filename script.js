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

    this.getPassword = () => { // referenciando funções com this
        return `Estou jogando para fora a senha ${secretPassword}`
    }

    this.twoPasswords = () => { // referenciando funções com this
        return `Minhas principais senhas são ${this.mypassword + ' e ' + this.yourpassword}`
    }
}

const seePassword = new Password('macarraocomqueijo', 1007)
console.log(seePassword.getPassword(), seePassword.twoPasswords())

//Conceito de Herança
class Veiculo {
    rodas = 4

    andar(direcao){}
    virar(direcao){}
}

class Moto extends Veiculo {
    constructor() {
        super() // o super puxa atributos e métodos do pai através do super
        this.rodas = 2
    }
}

// Exemplo e prática de Herança e Polimorfismo
class atleta {
    peso  
    categoria
    constructor(peso) {
        this.peso = peso
    }

    definirCategoria() {
        if(this.peso <= 50) {
            return this.categoria = 'infantil'
        } 
        else if(this.peso <=65) {
            return this.categoria = 'juvenil'
        }
        else{
            return this.categoria = 'adulto'
        }
    }
}

const categorias = new atleta(80)
console.log(`Este lutador está na categoria: ${categorias.definirCategoria()}`)

// hora de herdar os métodos e funções do pai - Herança e Polimorfismo
class Lutador extends atleta {
    constructor(peso) { 
        super(peso) // referência do peso herdado da classe pai atleta
    }

    definirCategoria() { // método herdado do pai 'class atleta'
        if(this.peso <= 54) {
            return this.categoria = 'pluma'
        }
        else if(this.peso <= 60) {
            return this.categoria = 'leve'
        }
        else if(this.peso <= 75) {
            return this.categoria = 'meio-leve'
        }
        else{
            return this.categoria = 'pesado'
        }
    }
}

const categoriaLutadores = new Lutador(87)
console.log(`Este lutador está na categoria: ${categoriaLutadores.definirCategoria()}`)