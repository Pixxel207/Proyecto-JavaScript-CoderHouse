// Validacion del carrito Inicio
var carrito = validandoCarrito();

function validandoCarrito() {
    if (localStorage.getItem("carrito") != null) {
        return JSON.parse(localStorage.getItem("carrito"));
    } else {
        return [];
    }
}

document.getElementById("cantidad-prod").innerHTML = carrito.length;

// Validacion del carrito Fin

//Arrays Inicio 
const productos = [{
        id: 1,
        titulo: 'Notebook Samsung',
        precio: 30000,
        stock: 0,
        precioNormal: 50000,
        imagen: "https://img.global.news.samsung.com/pe/wp-content/uploads/2018/05/62-1024x683.jpg"
    },
    {
        id: 2,
        titulo: 'Notebook Lenovo',
        precio: 50000,
        stock: 0,
        precioNormal: 100000,
        imagen: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/4/3/43406_1-min_1.jpg"
    },
    {
        id: 3,
        titulo: 'Notebook hp',
        precio: 35000,
        stock: 0,
        precioNormal: 50000,
        imagen: "https://mallweb.com.ar/media/catalog/product/cache/1/image/900x/9df78eab33525d08d6e5fb8d27136e95/g/i/gimage_26905.jpg"
    },
    {
        id: 4,
        titulo: 'Tablet Samsung',
        precio: 2500,
        stock: 0,
        precioNormal: 30000,
        imagen: "https://images.samsung.com/is/image/samsung/p6pim/latin/feature/137886436/latin-feature-galaxy-tab-a7-lite-457405030?$FB_TYPE_A_MO_JPG$"
    }

]

const TopSelling = [

    {
        id: 1,
        titulo: "Apple iPhone 13 Pro Max",
        precio: 150000,
        stock: 0,
        precioSinRebaja: 300000,
        imagen: "https://nissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/i/p/iphone-13-pro-max-blue-selectyyyy.jpg"
    },
    {
        id: 2,
        titulo: "Samsung Galaxy A51",
        precio: 150000,
        stock: 0,
        precioSinRebaja: 300000,
        imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXi-S9ugudqDRV9vCybOhnGnkcR24GsqKRmPK3OoZuQJEfMsMmKVTTG2wrnJT3GUWg4zVPhhlj8gQyrHWbmRslPF8li2J41A"
    },
    {
        id: 3,
        titulo: "Xiaomi Redmi 10",
        precio: 150000,
        stock: 0,
        precioSinRebaja: 300000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_612869-MLA48741510265_012022-O.webp"
    },
    {
        id: 4,
        titulo: " MOTOROLA EDGE 20 PRO",
        precio: 150000,
        stock: 0,
        precioSinRebaja: 300000,
        imagen: "http://medias.musimundo.com/medias/00435014-144181-144181-01-144181-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3NTMxOHxpbWFnZS9qcGVnfGgwYS9oMjgvMTAzMDEzNjA5NjM2MTQvMDA0MzUwMTQtMTQ0MTgxLTE0NDE4MV8wMS0xNDQxODFfMDEuanBnX3NpemU1MTV8ZDQ0Mjc1ZTI3MDUxMzkxNzEzZjIyZjlhMzI0MGE3M2Q1ZjY2ZmM2Zjc1ZTgzMDNhMDE5OGE0YjU0NDA3YTExYg"
    },
    {
        id: 5,
        titulo: "LG Velvet 128 Gb",
        precio: 150000,
        stock: 0,
        precioSinRebaja: 300000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_844070-MLA46435469794_062021-O.webp"
    }
]

//Arrays Fin

// Funcion de agregar al carrito -----Comienzo-------

const agregarAlCarrito = (idProducto) => {
    const productosAgregados = productos.find(producto => producto.id === idProducto);
    carrito.push(productosAgregados);
    document.getElementById("cantidad-prod").innerHTML = carrito.length;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    swal("Agregaste el producto al carrito!", "Gracias por confiar!", "success");


};

// Funcion de agregar al carrito -----Fin-------

// function agregarVarios() {
//     const productoSeleccionado = pro
// }

// Funcion para generar cards en el html -----Comienzo-----

generarCards(productos);

function generarCards(productosAMostrar) {
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div   class="product">
        <div  class="product-img">
         <img src="${elementoDelArray.imagen}" alt="">
            <div class="product-label">
                <span class="sale">-30%</span>
                <span class="new">NEW</span>
            </div>
        </div>
        <div class="product-body">
            <p class="product-category">Category</p>
            <h3 class="product-name"><a href="product.html">${elementoDelArray.titulo}</a></h3>
            <h4 class="product-price">$ ${elementoDelArray.precio}<del class="product-old-price">$ ${elementoDelArray.precioNormal}</del></h4>
            <div class="product-rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <div class="product-btns">
                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
                <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
                <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
            </div>
        </div>
        <div class="add-to-cart">
            <button onclick="agregarAlCarrito(${elementoDelArray.id}),subtotalCarrito(),generarWidgetsCarrito()" class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("ProductosParaMostrar").innerHTML = cards;
};

// Funcion para generar cards en el html -----Fin-----

function buscarProductos() {
    const email = document.getElementbyId("productos-buscados").value;
    console.log(email);

}



function buscarProducto() {
    console.log("Hola!")
    const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUpperCase().trim();

    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });

    generarCards(productosEncontrados);
}



const boton = document.getElementById("boton-buscar");


function tomarValor(event) {
    console.log(event.target.value);

    // Funcion generar widgets en el menu que despliega el carrito ------Inicio-----

    generarWidgetsCarrito(productos);

    function generarWidgetsCarrito() {
        let acumuladorDeCards = ` `;
        carrito.forEach((producto) => {
            acumuladorDeCards += `<div id="widget-carrito" class="product-widget">
            <div class="product-img">
                <img src="${producto.imagen}" alt="">
            </div>
            <div class="product-body">
                <h3 class="product-name"><a href="#">${producto.titulo}</a></h3>
                <h4 class="product-price"><span class="qty">1x</span>${producto.precio}</h4>
            </div>
            <button onclick="removerProd_carrito(${producto.id})" class="delete"><i class="fa fa-close"></i></button>
        </div>`
        })
        mostrrarWidgetsEnElHtml(acumuladorDeCards);
    }


    function mostrrarWidgetsEnElHtml(cards) {
        document.getElementById("widget-carrito").innerHTML = cards;
    }

    // Funcion generar widgets en el menu que despliega el carrito ------Fin-----

    // Funcion para generar las cards en los productos del Top Sellings -----Inicio-----

    productosTopSellings();

    function productosTopSellings() {
        let acumuladorDeCards = ` `;
        TopSelling.forEach((producto) => {
            acumuladorDeCards += `<div id="products-topSelling"class="product-widget">
        <div class="product-img">
            <img src="${producto.imagen}" alt="">
        </div>
        <div class="product-body">
            <p class="product-category">Category</p>
            <h3 class="product-name"><a href="#">${producto.titulo}</a></h3>
            <h4 class="product-price">$${producto.precio}<del class="product-old-price">$990.00</del></h4>
        </div>
    </div>`
        });
        mostrarProductosTopSellingEnHtml(acumuladorDeCards);
    }

    function mostrarProductosTopSellingEnHtml(cards) {
        document.getElementById("products-topSelling").innerHTML = cards;
    }

    // Funcion para generar las cards en los productos del Top Sellings -----Fin-----

    // Funcion para poder sacar un producto de mi carrito  ----Inicio----

    function removerProd_carrito(valorid) {
        carrito = carrito.filter((producto) => producto.id != valorid);
        console.log('se ejecuto');
        generarWidgetsCarrito(carrito);
        SubtotalActualizado = subtotalCarrito() - valorid.precio;
        document.getElementById("cantidad-prod").innerHTML = carrito.length;
        localStorage.setItem('carrito', JSON.stringify(carrito));

    }

    // Funcion para poder sacar un producto de mi carrito   ----Fin----

    // Funcion para generar el subtotal de los productos agregados al carrito ----Comienzo-----

    subtotalCarrito(carrito);

    function subtotalCarrito() {
        const totalCarrito = carrito.reduce((accumulador, next) => accumulador + next.precio, 0);

        document.getElementById("subtotal-carrito").innerHTML = `El total de su compra es ${totalCarrito}`;
    };

    // Funcion para generar el subtotal de los productos agregados al carrito ----Fin-----



}