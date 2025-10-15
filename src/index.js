function search(event) {
    if (event.key === "Enter" || event.type === "click") {
        let query = document.getElementById("searchBox").value.toLowerCase();
        let pages = {
            "chocolate quente": "pages/chocolatequente.html",
            "panqueca": "pages/panqueca.html",
            "waffle": "pages/waffle.html"
        }
        if (pages[query]) {
            window.location.href = pages[query]; // Redireciona para a página correspondente
        } else {
            alert("Página não encontrada!");
        }
    }
}


