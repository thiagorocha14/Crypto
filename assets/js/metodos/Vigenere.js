class Vigenere {
    constructor(mensagem, chave) {
        this.mensagem = mensagem.toUpperCase();
        this.chave = chave.toUpperCase();
        this.mensagemCriptografada = "";
    }

    criptografar() {
        let x = 0;
        for (let i = 0; i < this.mensagem.length; i++) {
            if (this.mensagem.charAt(i) == " ") {
                this.mensagemCriptografada += " ";
                continue;
            }

            if (x >= this.chave.length) {
                x = 0;
            }

            let caracterSenha = this.chave.charAt(x);
            x++;

            let caracter = this.mensagem.charAt(i);
            let code = caracter.charCodeAt();
            let codeSenha = caracterSenha.charCodeAt();
            let posicaoAlfabeto = codeSenha - 65;

            let codigoFinal = code + posicaoAlfabeto;

            if (codigoFinal > 90) {
                codigoFinal -= 26;
            }

            this.mensagemCriptografada += String.fromCodePoint(codigoFinal);
        }
        return this.mensagemCriptografada;
    }

    descriptografar() {
        let indexSenha = 0;
        for (let i = 0; i < this.mensagem.length; i++) {
            if (this.mensagem.charAt(i) == " ") {
                this.mensagemCriptografada += " ";
                continue;
            }

            if (indexSenha >= this.chave.length) {
                indexSenha = 0;
            }

            let caracter = this.mensagem.charAt(i);
            let caracterSenha = this.chave.charAt(indexSenha);
            indexSenha++;

            let code = caracter.charCodeAt();
            let codeSenha = caracterSenha.charCodeAt();
            let posicaoAlfabeto = codeSenha - 65;

            let codigoFinal = code - posicaoAlfabeto;

            if (codigoFinal < 65) {
                codigoFinal += 26;
            }

            this.mensagemCriptografada += String.fromCodePoint(codigoFinal);
        }
        return this.mensagemCriptografada;
    }
}

export default Vigenere;
