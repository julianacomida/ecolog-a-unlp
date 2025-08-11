document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".ramo");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            if (boton.classList.contains("bloqueado")) return;

            if (!boton.classList.contains("cursada") && !boton.classList.contains("final")) {
                boton.classList.add("cursada");
                desbloquear(boton.dataset.desbloqueaCursada);
            } else if (boton.classList.contains("cursada") && !boton.classList.contains("final")) {
                boton.classList.remove("cursada");
                boton.classList.add("final");
                desbloquear(boton.dataset.desbloqueaFinal);
            }
        });
    });

    function desbloquear(lista) {
        if (!lista) return;
        lista.split(",").forEach(id => {
            const ramo = document.getElementById(id);
            if (ramo && ramo.classList.contains("bloqueado")) {
                ramo.classList.remove("bloqueado");
                ramo.style.cursor = "pointer";
            }
        });
    }
});

