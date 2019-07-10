//(2-A) Agrego sucursal(centro)//

for (venta of local.ventas) {
    venta.sucursal = 'Centro';
}

//(2-B)objeto+"centro"/"Caballito"//

local.sucursales = ['Centro', 'Caballito'];

//(2-C)array "ventas"+fecha, nombreVendedora, componentes, sucursal//

local.ventas.push(
    {
        fecha: new Date(2019, 1, 12),
        nombreVendedora: "Hedy",
        componentes: ["Monitor GPRS 3000", "HDD Toyiva"],
        sucursal: "Centro"
    },
    {
        fecha: new Date(2019, 1, 24),
        nombreVendedora: "Sheryl",
        componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"],
        sucursal: "Caballito"
    },
    {
        fecha: new Date(2019, 1, 1),
        nombreVendedora: "Ada",
        componentes: ["Motherboard MZI", "RAM Quinston Fury"],
        sucursal: "Centro"
    },
    {
        fecha: new Date(2019, 1, 11),
        nombreVendedora: "Grace",
        componentes: ["Monitor ASC 543", "RAM Quinston"],
        sucursal: "Caballito"
    },
    {
        fecha: new Date(2019, 1, 15),
        nombreVendedora: "Ada",
        componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"],
        sucursal: "Centro"
    },
    {
        fecha: new Date(2019, 1, 12),
        nombreVendedora: "Hedy",
        componentes: ["Motherboard ASUS 1500", "HDD Toyiva"],
        sucursal: "Caballito"
    },
    {
        fecha: new Date(2019, 1, 21),
        nombreVendedora: "Grace",
        componentes: ["Motherboard MZI", "RAM Quinston"],
        sucursal: "Centro"
    },
    {
        fecha: new Date(2019, 1, 8),
        nombreVendedora: "Sheryl",
        componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
        sucursal: "Centro"
    },
    {
        fecha: new Date(2019, 1, 16),
        nombreVendedora: "Sheryl",
        componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"],
        sucursal: "Centro"
    },
    {
        fecha: new Date(2019, 1, 27),
        nombreVendedora: "Hedy",
        componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
        sucursal: "Caballito"
    },
    {
        fecha: new Date(2019, 1, 22),
        nombreVendedora: "Grace",
        componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
        sucursal: "Centro"
    },
    {
        fecha: new Date(2019, 1, 5),
        nombreVendedora: "Ada",
        componentes: ["Motherboard ASUS 1500", "RAM Quinston"],
        sucursal: "Centro"
    },
    {
        fecha: new Date(2019, 1, 1),
        nombreVendedora: "Grace",
        componentes: ["Motherboard MZI", "HDD Wezter Dishital"],
        sucursal: "Centro"
    },
    {
        fecha: new Date(2019, 1, 7),
        nombreVendedora: "Sheryl",
        componentes: ["Monitor GPRS 3000", "RAM Quinston"],
        sucursal: "Caballito"
    },
    {
        fecha: new Date(2019, 1, 14),
        nombreVendedora: "Ada",
        componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
        sucursal: "Centro"
    });


//(2-D) +"ventasSucursal"//
 
const ventasSucursal = sucursal => {
    const ventasPorSucursal = local.ventas.filter(venta => venta.sucursal === sucursal);
    return total(ventasPorSucursal);
}
console.log(`Ventas totales de la sucursal Centro: ${ventasSucursal("Centro")}`);

//(2-E) agregar "sucursalDelMes" (mes, anio)//
 
const sucursalDelMes = (mes, anio) => {
    return designadoDelMes(local.sucursales, mes, anio);
}
console.log(`Sucursal del mes: ${sucursalDelMes(1, 2019)}`);

//(3-A) Render por mes//

//+ingresos x mes//
const vendedoraMasIngresos = () => {
    let venta = 0;
    let vendedoraConMasIngresos = '';
    for (vendedora of local.vendedoras) {
        let mayorVenta = ventasVendedora(vendedora);
        if (mayorVenta > venta) {
            venta = mayorVenta;
            vendedoraConMasIngresos = vendedora;
        }
    }
    return vendedoraConMasIngresos;
}

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

const renderPorMes = () => {
    let render = [];
    let yearBefore = '';
    for (venta of local.ventas) {
        let year = venta.fecha.getFullYear();
        if (year !== yearBefore) {
            for (i = 0; i <= meses.length; i++) {
                let renderMes = ventasMes(i, year);
                if (renderMes !== 0) {
                    render += `\n Total de ${meses[i - 1]}: ${ventasMes(i, year)}`;
                }
            }
        }
        yearBefore = year;
    }
    return render;
}
console.log(`Ventas por mes: ${renderPorMes()}`);

//(3-B) Render por sucursal//

const renderPorSucursal = () => {
    let renderSucursal = [];
    for (sucursal of local.sucursales) {
        let render = ventasSucursal(sucursal);
        if (render !== 0) {
            renderSucursal += `\n Total de ${sucursal}: ${ventasSucursal(sucursal)}`;
        }
    }
    return renderSucursal;
}
console.log(`Ventas por sucursal : ${renderPorSucursal()}`);

//(3-C) Render()

const render = () => {
    return `Reporte
 Ventas por mes: ${renderPorMes()} 
 Ventas por sucursal: ${renderPorSucursal()}
 Producto estrella: ${componenteMasVendido()}
 Vendedora que mas ingresos generó: ${vendedoraMasIngresos()}`;
}
console.log(render());
