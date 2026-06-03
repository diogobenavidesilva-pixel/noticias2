class Carro {
    constructor(modelo, cor, ano, velocidadeMaxima) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log(`O ${this.modelo} foi ligado.`);
    }

    acelerar(incremento) {
        if (!this.ligado) {
            console.log("O carro está desligado!");
            return;
        }
        
        this.velocidadeAtual += incremento;
        if (this.velocidadeAtual > this.velocidadeMaxima) {
            this.velocidadeAtual = this.velocidadeMaxima;
        }
        console.log(`Velocidade atual: ${this.velocidadeAtual} km/h`);
    }

    frear() {
        this.velocidadeAtual -= 10;
        if (this.velocidadeAtual < 0) {
            this.velocidadeAtual = 0;
        }
        console.log(`Velocidade atual após frear: ${this.velocidadeAtual} km/h`);
    }

    desligar() {
        this.velocidadeAtual = 0;
        this.ligado = false;
        console.log(`O ${this.modelo} foi desligado.`);
    }
}

// Criando e testando um objeto Carro
const meuCarro = new Carro("Civic", "Prata", 2022, 200);
meuCarro.ligar();
meuCarro.acelerar(50);
meuCarro.frear();
meuCarro.desligar();
// Variáveis do Carro
let xCarro = 600;
let yCarro = 40;
let velocidadeCarro = 2;

function mostraCarro() {
    // Exemplo usando funções (Canvas/p5.js)
    // fill("red");
    // rect(xCarro, yCarro, 50, 40);
}

function movimentaCarro() {
    xCarro -= velocidadeCarro;
    if (xCarro < -50) {
        xCarro = 600; // Retorna à posição inicial
    }
}