// Funciones de redireccionamiento

function redireccionarPagina(){
    location.href = "./pages/formulario.html";
}

function NuevaTemporada(){
    location.href = "./pages/nuevatemporada.html";
}

function Index(){
    location.href = ".index.html";
}

function NosotrosPage(){
    location.href = "./pages/nosotros.html";
}

function BolsosPage() {
    location.href = "./pages/bolsos.html";
}

function SosteniblePage(){
    location.href = "./pages/sostenible.html";
}

function MaletasPage(){
    location.href = "./pages/maletas.html";
}

function CarterasPage(){
    location.href = "./pages/carteras.html";
}

function OutletPage(){
    location.href = "./pages/outlet.html"
}


// Menu de hamburguesas 

document.querySelector(".cajaMenu").addEventListener("click", animate);

var linea1 = document.querySelector(".cajaMenuLinea1");
var linea2 = document.querySelector(".cajaMenuLinea2");
var linea3 = document.querySelector(".cajaMenuLinea3");
var containerMenu = document.querySelector(".cajamenu");

function animate(){
    linea1.classList.toggle("activecajaMenuLinea1");
    linea2.classList.toggle("activecajaMenuLinea2");
    linea3.classList.toggle("activecajaMenuLinea3");

    containerMenu.classList.toggle("cajamenu");
}