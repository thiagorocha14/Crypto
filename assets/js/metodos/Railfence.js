class RailFence {
    constructor(mensagem, quantidade) {
        this.mensagem = mensagem;
        this.quantidade = Number(quantidade);
        this.mensagemCriptografada = "";
    }

    criptografar() {
        const espacos = this.gerarArrayDeEspacos(this.mensagem);
        let frases = new Array(this.quantidade).fill("");

        const mensagemSemEspaco = this.mensagem.replace(/ /g, "").toUpperCase();
        let indexFrase = 0;
        for (let i = 0; i < mensagemSemEspaco.length; i++) {
            let caracter = mensagemSemEspaco.charAt(i);

            if (indexFrase >= this.quantidade) {
                indexFrase = 0;
            }
            frases[indexFrase] = frases[indexFrase] + caracter;
            indexFrase++;
        }

        const mensagemCriptografadaSemEspaco = frases.join("");

        for (let i = 0; i < this.mensagem.length; i++) {
            let caracter = mensagemCriptografadaSemEspaco.charAt(i);
            if (espacos.includes(i)) {
                this.mensagemCriptografada += " ";
                i--;
                espacos.shift();
            } else {
                this.mensagemCriptografada += caracter;
            }
        }

        return this.mensagemCriptografada;
    }

    descriptografar() {
        let mensagemCriptografada = "";
        const espacos = this.gerarArrayDeEspacos(this.mensagem);
        const mensagemSemEspaco = this.mensagem.replace(/ /g, "").toUpperCase();
        const frases = this.dividirString(mensagemSemEspaco, this.quantidade);
        let x = 0;
        let indexs = new Array(this.quantidade).fill(0);

        for (let i = 0; i < mensagemSemEspaco.length; i++) {
            if (x == this.quantidade) {
                x = 0;
            }

            mensagemCriptografada += frases[x].charAt(indexs[x]);
            indexs[x]++;
            x++;
        }

        for (let i = 0; i < this.mensagem.length; i++) {
            let caracter = mensagemCriptografada.charAt(i);
            if (espacos.includes(i)) {
                this.mensagemCriptografada += " ";
                i--;
                espacos.shift();
            } else {
                this.mensagemCriptografada += caracter;
            }
        }
        return this.mensagemCriptografada;
    }

    dividirString(str, tamanho) {
        const tamanhos = this.dividirQuantidadeEmArrays(str.length, tamanho);
        let frases = [];
        let offset = 0;
        for (let i = 0; i < tamanho; i++) {
            frases[i] = str.substr(offset, tamanhos[i]);
            offset += tamanhos[i];
        }
        return frases;
    }

    dividirQuantidadeEmArrays(tamanho, quantidade) {
        let tamanhos = new Array(quantidade).fill(0);
        let x = 0;
        for (let i = 0; i < tamanho; i++) {
            if (x == quantidade) {
                x = 0;
            }
            tamanhos[x]++;
            x++;
        }
        return tamanhos;
    }

    gerarArrayDeEspacos(mensagem) {
        let espacos = [];

        //Detecta espacos e armazena o index
        for (let i = 0; i < mensagem.length; i++) {
            let caracter = mensagem.charAt(i);
            if (caracter == " ") {
                espacos.push(i);
            }
        }

        //Ordena o array de espacos para que os espacos fiquem na posição correta
        for (let i = 1; i < espacos.length; i++) {
            espacos[i] = espacos[i] - i;
        }

        return espacos;
    }
}

export default RailFence;
