import Vigenere from "./metodos/Vigenere.js";

const [
    chaveVigenere,
    textoVigenere,
    btnCriptografarVigenere,
    textoCriptografadoVigenere,
    btnDescriptografarVigenere
] = document.querySelectorAll(
    "#chaveVigenere, " +
        "#textoVigenere, " +
        "#btnCriptografarVigenere, " +
        "#textoCriptografadoVigenere, " +
        "#btnDescriptografarVigenere"
);

btnCriptografarVigenere.addEventListener("click", () => {
    const vigenere = new Vigenere(textoVigenere.value, chaveVigenere.value);
    textoCriptografadoVigenere.value = vigenere.criptografar();
    textoVigenere.value = "";
});

btnDescriptografarVigenere.addEventListener("click", () => {
    const vigenere = new Vigenere(
        textoCriptografadoVigenere.value,
        chaveVigenere.value
    );
    textoVigenere.value = vigenere.descriptografar();
    textoCriptografadoVigenere.value = "";
});
