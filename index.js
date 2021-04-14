var productos = [{
        nombre: "harina",
        precio: 35
    },
    {
        nombre: "pan",
        precio: 25
    },
    {
        nombre: "papa",
        precio: 52
    },
    {
        nombre: "palta",
        precio: 55
    },
    {
        nombre: "fideos",
        precio: 85
    },
    {
        nombre: "aceite",
        precio: 350
    },
    {
        nombre: "sopa",
        precio: 86
    },
    {
        nombre: "mermelada",
        precio: 108
    },
    {
        nombre: "porotos",
        precio: 69
    },
    {
        nombre: "lentejas",
        precio: 85
    },
    {
        nombre: "mandarina",
        precio: 43
    },
    {
        nombre: "banana",
        precio: 79
    }, {
        nombre: "leche de almendras",
        precio: 145
    },
    {
        nombre: "papel higiénico",
        precio: 147
    },
    {
        nombre: "lavandina",
        precio: 55
    },
    {
        nombre: "alcohol en gel",
        precio: 123
    },
    {
        nombre: "shampoo",
        precio: 400
    },
    {
        nombre: "arroz",
        precio: 66
    },
    {
        nombre: "harina",
        precio: 35
    },
    {
        nombre: "salsa de tomate",
        precio: 35
    },
]

//tabla con productos y precio
var tbody = document.getElementById("tbody");
var columnas = ['precio', 'producto'];

/*carrito de compras*/
var compras = [];
var total = 0;
const onClick = (e) => {
    if (!compras.includes(e.target.innerHTML)) {
        compras.push(e.target.innerHTML);
        total += parseInt(document.querySelector(`#precio-${e.target.innerHTML}`.replace(/\s/g, "")).innerHTML);
    } else {
        alert("Solo se puede comprar 1 unidad de cada producto,usted ya compro " + e.target.innerHTML);
    }
}

var compra = false;
const calculartotal = () => {
    if (compra == false) {
        let titulo = document.createElement('h2');
        let titulotext = document.createTextNode('Usted va a comprar');
        titulo.appendChild(titulotext);
        document.body.appendChild(titulo);

        let lista = document.createElement('ul');
        for (let i = 0; i < compras.length; i++) {
            let producto = document.createElement("li");
            producto.id = "producto" + i;
            producto.appendChild(document.createTextNode(compras[i]));
            document.body.appendChild(producto);
            lista.appendChild(producto);
        }
        document.body.appendChild(lista);
        let pagar = document.createElement("h3");
        let content = document.createTextNode(`Total a pagar: $${total}`);
        pagar.appendChild(content);
        pagar.id = 'pagar'
        document.body.appendChild(pagar);
        compra = true
    } else {
        let pago = document.getElementById('pagar');
        pago.innerHTML = `Total a pagar: $${total}`;
        let lista = document.getElementsByTagName('ul')[0];
        for (let i = lista.childNodes.length; i < compras.length; i++) {
            if (compras[i] !== null) {
                let item = document.createElement("li");
                let itemtext = document.createTextNode(compras[i]);
                item.appendChild(itemtext);
                lista.appendChild(item);
            }
        }
    }
}

productos.forEach((currentvalue) => {
    var tr = document.createElement('tr');

    columnas.forEach((value) => {
        var td = document.createElement('td');
        var tdchild;
        switch (value) {
            case 'precio': {
                tdchild = document.createElement("button");
                var text = document.createTextNode(currentvalue.nombre);
                tdchild.appendChild(text);
                tdchild.onclick = onClick;
                break;
            }
            case 'producto': {
                tdchild = document.createTextNode(currentvalue.precio)
                td.setAttribute('id', "precio-" + currentvalue.nombre.replace(/\s/g, ""));
                td.setAttribute('class', 'precio');
                break;
            }
        }
        td.appendChild(tdchild);
        tr.appendChild(td);
    });

    tbody.appendChild(tr);
})


var comprar = document.createElement('button');
var text = document.createTextNode("Comprar");
comprar.onclick = calculartotal;
comprar.id = "comprar"
comprar.appendChild(text);
document.body.appendChild(comprar);