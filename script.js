document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".ramo");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            if (boton.classList.contains("bloqueado")) return;

            if (!boton.classList.contains("cursada")) {
                boton.classList.add("cursada");
                desbloquear(boton.dataset.desbloqueaCursada, "verde-pastel");
            } else if (!boton.classList.contains("final")) {
                boton.classList.add("final");
                desbloquear(boton.dataset.desbloqueaFinal, "verde-final");
            }
        });
    });

    function desbloquear(lista, claseColor) {
        if (!lista) return;
        lista.split(",").forEach(id => {
            const ramo = document.getElementById(id);
            if (ramo && ramo.classList.contains("bloqueado")) {
                ramo.classList.remove("bloqueado");
                ramo.classList.add(claseColor);
                ramo.style.cursor = "pointer";
                ramo.style.opacity = "1";
            }
        });
    }
});
