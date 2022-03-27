const carrito = validandoCarrito();
function validandoCarrito() {
    if (localStorage.getItem("carrito") != null) {
        const productosParaElStorage = JSON.parse(localStorage.getItem("carrito"));
        return productosParaElStorage;
    }else{
        return [];
    }
}

document.getElementById("cantidad-prod").innerHTML=carrito;
