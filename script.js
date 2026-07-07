const caixa = document.getElementById("caixa");
const telaInicial = document.getElementById("telaInicial");
const convite = document.getElementById("convite");
const audio = document.getElementById("audio");

caixa.addEventListener("click", () => {

    // toca a música
    audio.play();

    // cria os confetes
    criarConfetes();

    // abre o convite
    setTimeout(() => {

        telaInicial.style.display = "none";
        convite.style.display = "flex";

    },1200);

});
function criarConfetes() {

    const container = document.getElementById("confetes");

    const rect = caixa.getBoundingClientRect();

    const origemX = rect.left + rect.width / 2;
    const origemY = rect.top + rect.height / 2;

    const cores = [
        "#ff6b00",
        "#FFD700",
        "#ffffff",
        "#ff3b3b",
        "#00d084"
    ];

    for (let i = 0; i < 250; i++) {

        const c = document.createElement("div");

        c.style.position = "fixed";

        c.style.left = origemX + "px";
        c.style.top = origemY + "px";

        c.style.width = (5 + Math.random() * 8) + "px";
        c.style.height = (10 + Math.random() * 12) + "px";

        c.style.background =
            cores[Math.floor(Math.random() * cores.length)];

        c.style.zIndex = "9999";

        container.appendChild(c);

        const angulo = Math.random() * Math.PI * 2;

        const distancia = 300 + Math.random() * 700;

        const dx = Math.cos(angulo) * distancia;
        const dy = Math.sin(angulo) * distancia + 700;

        c.animate([
            {
                transform: "translate(0,0) rotate(0deg)",
                opacity: 1
            },
            {
                transform: `translate(${dx}px, ${dy}px) rotate(${Math.random()*1800}deg)`,
                opacity: 0
            }
        ], {
            duration: 2500 + Math.random() * 2500,
            easing: "cubic-bezier(.15,.8,.25,1)"
        });

        setTimeout(() => c.remove(), 5000);
    }
}