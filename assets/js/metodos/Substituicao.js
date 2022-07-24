class Substituicao {
    constructor(mensagem) {
        this.mensagem = mensagem;
        this.mensagemCriptografada = "";
    }

    criptografar() {
        this.mensagemCriptografada = this.trocarLetras(this.mensagem);
        return this.mensagemCriptografada;
    }

    descriptografar() {
        this.mensagemCriptografada = this.trocarLetras(this.mensagem);
        return this.mensagemCriptografada;
    }

    trocarLetras(mensagem) {
        mensagem = mensagem.toUpperCase();
        const letras = {
            A: "V",
            V: "A",
            D: "X",
            X: "D",
            H: "B",
            B: "H",
            I: "G",
            G: "I",
            K: "J",
            J: "K",
            M: "C",
            C: "M",
            O: "Q",
            Q: "O",
            R: "L",
            L: "R",
            S: "N",
            N: "S",
            U: "E",
            E: "U",
            W: "F",
            F: "W",
            Y: "P",
            P: "Y",
            Z: "T",
            T: "Z"
        };
        let mensagemCriptografada = "";
        for (let i = 0; i < mensagem.length; i++) {
            if (letras.hasOwnProperty(mensagem.charAt(i))) {
                mensagemCriptografada += letras[mensagem.charAt(i)];
            } else {
                mensagemCriptografada += mensagem.charAt(i);
            }
        }
        return mensagemCriptografada;
    }
}

export default Substituicao;
