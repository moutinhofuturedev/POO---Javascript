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
        return secretPassword
    }

    this.twoPasswords = () => {
        return this.mypassword + ' e ' + this.yourpassword
    }
}

const seePassword = new Password('Lau&Duda2020', 1007)
console.log(seePassword.getPassword(), seePassword.twoPasswords())
