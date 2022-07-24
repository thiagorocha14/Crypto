import RailFence from "./metodos/Railfence.js";

const [
    rangeQuantidade,
    numberQuantidade,
    textoRail,
    btnCriptografarRail,
    textoCriptografadoRail,
    btnDescriptografarRail
] = document.querySelectorAll(
    "#rangeQuantidade, " +
        "#numberQuantidade, " +
        "#textoRail, " +
        "#btnCriptografarRail, " +
        "#textoCriptografadoRail, " +
        "#btnDescriptografarRail"
);

rangeQuantidade.addEventListener("input", () => {
    numberQuantidade.value = rangeQuantidade.value;
});

numberQuantidade.addEventListener("input", () => {
    rangeQuantidade.value = numberQuantidade.value;
});

btnCriptografarRail.addEventListener("click", () => {
    const railFence = new RailFence(textoRail.value, numberQuantidade.value);
    textoCriptografadoRail.value = railFence.criptografar();
    textoRail.value = "";
});

btnDescriptografarRail.addEventListener("click", () => {
    const railFence = new RailFence(
        textoCriptografadoRail.value,
        numberQuantidade.value
    );
    textoRail.value = railFence.descriptografar();
    textoCriptografadoRail.value = "";
});
