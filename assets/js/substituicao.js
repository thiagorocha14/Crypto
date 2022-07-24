import Substituicao from "./metodos/Substituicao.js";

const [
    textoSubstituicao,
    btnCriptografarSubstituicao,
    textoCriptografadoSubstituicao,
    btnDescriptografarSubstituicao
] = document.querySelectorAll(
    "#textoSubstituicao, " +
        "#btnCriptografarSubstituicao, " +
        "#textoCriptografadoSubstituicao, " +
        "#btnDescriptografarSubstituicao"
);

btnCriptografarSubstituicao.addEventListener("click", () => {
    const substituicao = new Substituicao(textoSubstituicao.value);
    textoCriptografadoSubstituicao.value = substituicao.criptografar();
    textoSubstituicao.value = "";
});

btnDescriptografarSubstituicao.addEventListener("click", () => {
    const substituicao = new Substituicao(textoCriptografadoSubstituicao.value);
    textoSubstituicao.value = substituicao.descriptografar();
    textoCriptografadoSubstituicao.value = "";
});
