var carrito = validandoCarrito();
function validandoCarrito() {
    if (localStorage.getItem("carrito") != null) {
        return JSON.parse(localStorage.getItem("carrito"));
    }else{
        return [];
    }
}

document.getElementById("cantidad-prod").innerHTML= carrito.length;

// class ProductosDelArray {
//     constructor(productos){
//         this.id = productos.id;
//         this.titulos=  productos.titulo;
//         this.precioRebaja = productos.precioRebaja;
//         this.precioNormal = productos.precioNormal;
//         this.imagen = productos.imagen;
//         this.cantidad = 2;
//     }
//     agregaUnidad(){
//         this.cantidad++;
//     }
//     quitarUnidad(){
//         this.cantidad--;
//     }
// actualizarPrecioTotal(){
//     this.precioTotal = this.precio * this.cantidad;
// }

// }
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
// Funcion de agregar al carrito -----Comienzo-------
// Funcion de agregar al carrito -----Comienzo-------



const agregarAlCarrito = (idProducto) => {
    const productosAgregados = productos.find(producto => producto.id === idProducto);
    carrito.push(productosAgregados);
    document.getElementById("cantidad-prod").innerHTML=carrito.length;
    localStorage.setItem("carrito",JSON.stringify(carrito));


};

// Funcion de agregar al carrito -----Fin-------
// Funcion de agregar al carrito -----Fin-------


function agregarVarios () {
const productoSeleccionado = pro
}


// Funcion para generar cards en el html -----Comienzo-----
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
// Funcion para generar cards en el html -----Fin-----

function buscarProductos(){
    const email =document.getElementbyId("productos-buscados").value;
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
    // const input = document.getElementById("texto-prueba").value;
    // console.log(input);
}
// totalProductos(productos);
// const totalProductos = () => {
//     let total = 0;
//     carrito.forEach((producto)=>{
//     total += producto.precioRebaja
//     })
//     document.getElementById("subtotal-carrito").innerHTML = total;
// }

// function totalProd()
// {
//     let total = 0;
//     carrito.forEach((producto)=>{
//         total += producto.precioRebaja;
//     })
//     return total;
// }



// Funcion generar widgets en el menu que despliega el carrito ------Inicio-----
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
// Funcion generar widgets en el menu que despliega el carrito ------Fin-----

// Funcion para poder sacar un producto de mi carrito  ----Inicio----
// Funcion para poder sacar un producto de mi carrito  ----Inicio----


function removerProd_carrito (valorid){
    removerProdu = 
    carrito = carrito.filter((producto)=>producto.id != valorid);
    console.log('se ejecuto');
    generarWidgetsCarrito(carrito);
    SubtotalActualizado = subtotalCarrito() - valorid.precio;
    localStorage.setItem('removerProdu',JSON.stringify(removerProd_carrito));
    JSON.parse(localStorage.getItem('removerProdu'));
    document.getElementById("cantidad-prod").innerHTML= carrito.length;
}








// Funcion para poder sacar un producto de mi carrito   ----Fin----
// Funcion para poder sacar un producto de mi carrito   ----Fin----




// Funcion para generar el subtotal de los productos agregados al carrito ----Comienzo-----
// Funcion para generar el subtotal de los productos agregados al carrito ----Comienzo-----

subtotalCarrito(carrito);

function subtotalCarrito() {
    const totalCarrito = carrito.reduce((accumulador, next) => accumulador + next.precio, 0);
    
    document.getElementById("subtotal-carrito").innerHTML = `El total de su compra es ${totalCarrito}`;
};

// Funcion para generar el subtotal de los productos agregados al carrito ----Fin-----
// Funcion para generar el subtotal de los productos agregados al carrito ----Fin-----



const colores = ['rojo', 'amarillo', 'azul'];
const select = document.querySelector('#colores');

colores.forEach(element=>{
            select.innerHTML += `
    <option value="${element}">${element} </option>
    `

        });

// function remover (producto) {
//     productoRemovido = $0.remove;
//     console.log('el producto se borro');

// }

// remover($0)

