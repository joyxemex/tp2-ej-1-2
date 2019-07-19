const local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

  sucursales: ['Centro', 'Caballito'],

  ventas: [
    { fecha: new Date(12, 02, 2019), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000, HDD Toyiva"], sucursal: "Centro" },

    { fecha: new Date(24, 02, 2019), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500,HDD Wezter Dishital"], sucursal: "Caballito" },

    { fecha: new Date(01, 02, 2019), nombreVendedora: "Ada", componentes: ["Motherboard MZI, RAM Quinston Fury"], sucursal: "Centro" },

    { fecha: new Date(11, 02, 2019), nombreVendedora: "Grace", componentes: ["Monitor ASC 543, RAM Quinston"], sucursal: "Caballito" },

    { fecha: new Date(15, 02, 2019), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200, RAM Quinston Fury"], sucursal: "Centro" },

    { fecha: new Date(12, 02, 2019), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500, HDD Toyiva"], sucursal: "Caballito" },

    { fecha: new Date(21, 02, 2019), nombreVendedora: "Grace", componentes: ["Motherboard MZI, RAM Quinston"], sucursal: "Centro" },

    { fecha: new Date(08, 02, 2019), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543, HDD Wezter Dishital"], sucursal: "Centro" },

    { fecha: new Date(16, 02, 2019), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000, RAM Quinston Fury"], sucursal: "Centro" },

    { fecha: new Date(27, 02, 2019), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200, HDD Toyiva"], sucursal: "Caballito" },

    { fecha: new Date(22, 02, 2019), nombreVendedora: "Grace", componentes: ["Monitor ASC 543, HDD Wezter Dishital"], sucursal: "Centro" },

    {
      fecha: new Date(05, 02, 2019), nombreVendedora: "Ada"
      , componentes: ["Motherboard ASUS 1500, RAM Quinston"], sucursal: "Centro"
    },

    { fecha: new Date(01, 02, 2019), nombreVendedora: "Grace", componentes: ["Motherboard MZI, HDD Wezter Dishital"], sucursal: "Centro" },

    { fecha: new Date(07, 02, 2019), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000, RAM Quinston"], sucursal: "Caballito" },

    {
      fecha: new Date(14, 02, 2019), nombreVendedora: " Ada",
      componentes: ["Motherboard ASUS 1200, HDD Toyiva"], sucursal: "Centro"
    },

    { fecha: new Date(2019, 1, 4), sucursal: "centro", nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 1), sucursal: "centro", nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 2), sucursal: "centro", nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },

    { fecha: new Date(2019, 0, 10), sucursal: "centro", nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },

    { fecha: new Date(2019, 0, 12), sucursal: "centro", nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 }
  ]
};

// 1. Se pide desarrollar las siguientes funciones:
// *a **precioMaquina(componentes)**: recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido
const precioMaquina = componentes => {
  let sumaTotal = 0;
  for (const componente of componentes){
    for(const item of local.precios){
      if (item.componente === componente){
        sumaTotal += item.precio
      }
    }
  }
  return sumaTotal;
}


//*b **cantidadVentasComponente(componente)**: recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable `ventas`.   //

const cantidadVentasComponente = (itemVendido) => {
  let cantidadVendidos = 0;

  for(const venta of ventas){
      for(const componente of venta.componentes){
          if(componente === itemVendido){
              cantidadVendidos++;
          }
      }
  }
  return cantidadVendidos;
}   



//*c **vendedoraDelMes(mes, anio)**, se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función `precioMaquina`. El mes es un número entero que va desde el 0 (enero) hasta el 11 (diciembre). //


const vendedoraDelMes = (mes, anio) => {
  let fecha = venta => venta.fecha.getMonth() === mes &&
    venta.fecha.getFullYear() === anio

  const filtrados = local.ventas.filter(fecha);

  let vendededoraQueMasVendio = 0

  let masVendido = 0

  for (const vendedora of local.vendedoras) {
    const porNombre = venta => venta.nombreVendedora === vendedora

    ventasPorVendedora = filtrados.filter(porNombre);


    let total = 0;
    for (const ventaPorVendedora of ventasPorVendedoras) {
      total += precioMaquina(ventaPorVendedora.componentes);
    } if (total >= masVendido) {
      masVendido = total
    };

  };
  return (vendedoraQueMasVendio)
};
console.log(vendedoraDelMes)


// *d **ventasMes(mes, anio)**: Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const ventasMes = (mes, anio) => {

  const ventasMes = local.ventas.filter(venta => venta.fecha.getMonth() === mes - 1);
  const ventasSeleccionadas = ventasMes.filter(venta => venta.fecha.getFullYear() === anio);

  let totalVentas = 0;
  for (venta of ventasSeleccionadas) {
      totalVentas += precioMaquina(venta.componentes);
  }

  return totalVentas;
}
//---------------------------------------------------------//

// * e**ventasVendedora(nombre)**: Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
//   

const ventasVendedora = nombre => {
  let ventasTotales = 0;
  let ventasDe = local.ventas.filter(venta => venta.nombreVendedora === nombre);
  for ( venta of ventasDe) {
    
      ventasTotales += precioMaquina(venta.componentes);
    
  } return ventasTotales;
}

//------------------------------------------------------------//
// * f**componenteMasVendido()**: Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función `cantidadVentasComponente`

const componenteMasVendido = () => {

  let componente = local.precios.componentes
  let masVendido = 0;
  let nuevoItem = [];
    for(venta of ventas){
      for (componente of venta.componentes){
       if(cantidadVentasComponente(componente)  >= masVendido){
       masVendido = cantidadVentasComponente(componente);
       if(!nuevoItem.includes(componente)){
           nuevoItem.push(componente)
       }
     }
  }
 }
 const masVentas = componente => cantidadVentasComponente(componente) === masVendido;
 return nuevoItem.filter(masVentas)
 }

//---------------------------------------------//

// *g **huboVentas(mes, anio)**: que indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const huboVentas = (mes, anio)=> {
  return local.ventas.some(venta => venta.fecha.getMonth() === mes &&
    venta.fecha.getFullYear() === anio)
}

  
//-------------------------------------------//
//...................2......................//
//------------------------------------------//
// a* Crear la función **ventasSucursal(sucursal)**, que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.


const ventasSucursal = sucursal => {
  let ventasTotales = 0;
  for (const venta of local.ventas) {
    if (venta.sucursal === sucursal) {
      ventasTotales += precioMaquina(venta.componentes);
    }
  }
  return ventasTotales;
}

//----------------------------------------//
// b* Las funciones **ventasSucursal** y **ventasVendedora** tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

const ventasSucursal_Y_Vendedora = (sucursal, nombre) => {
  {
    let ventasTotales = 0;
    for (const venta of local.ventas) {
      if (venta.sucursal === sucursal || venta.nombreVendedora === nombre) {
        ventasTotales += precioMaquina(venta.componentes);
      }
    } return ventasTotales;
  };
};


//------------------------------------------------//

// c* Crear la función **sucursalDelMes(mes, anio)**, que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función `precioMaquina`. El mes es un número entero que va desde el 0 (enero) hasta el 11 (diciembre).

const sucursalDelMes = (mes, anio)=> {
  const fecha = venta => venta.fecha.getMonth() === mes &&
    venta.fecha.getFullYear() === anio

  const filtrados = local.precios.filter(fecha);

  let sucursalQueMasVendio = 0
  let masVendido = 0

  for (const sucursal of local.sucursales) {
    const porNombre = venta => venta.sucursales === sucursal

    ventasPorSucursal = filtrados.filter(porNombre);


    let total = 0;
    for (const ventaPorsucursal of ventasPorSucursal) {
      total += precioMaquina(ventaPorsucursal.precio);
    } if (total >= masVendido) {
      masVendido = total
    };
  };
  return (sucursalQueMasVendio)
};
console.log(sucursalDelMes)


//--------------------------------------------------//
//------------------(3)--------------------------------//
//---------------------------------------------------//
//3. Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las ventas por sucursal y por mes.
//
//////////////        3-a       ////////////

const obtenerAnios = () => {
  let anios = [];
  for(let venta of local.ventas){
       if( !anios.includes(venta.fecha.getFullYear())){
          anios.push(venta.fecha.getFullYear());
       }
  } return anios;
}

const renderPorMes = () => {
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]  
let resultado = '';
for (let anio of obtenerAnios()){
for(let i = 0; i < meses.length; i++){
    if(huboVentas(i+1, anio)){
      resultado += `Total de ${meses[i]} ${anio}: $ ${ventasMes(i+1, anio)} \n`
    }
}
}  return resultado;

}



console.log(renderPorMes());


/////////////         3.b            ////////////



const renderPorSucursal = () => {
  let resultado = '';
  for (sucursal of local.sucursales) {
      resultado += `Total de ${sucursal}: ${ventasSucursal(sucursal)} \n`;
  }
  return resultado;
}
console.log(renderPorSucursal());

////////////         3.c          ////////////////


const vendedoraConMasIngresosGenerados = () => {
  let masIngresos = 0;
  let vendedoraConMasIngresos = "";
  for(vendedora of local.vendedoras) {
      if (ventasVendedora(vendedora) >= masIngresos) {
          masIngresos = ventasVendedora(vendedora);
          vendedoraConMasIngresos = vendedora;
      }
  }
  return vendedoraConMasIngresos;
}

const render = () => {
let renderFinal =
(`${renderPorMes()}\n${renderPorSucursal()}\nVendedoar que mas ingresos genero: ${vendedoraConMasIngresosGenerados()}\n\nComponente que mas se vendio: ${componenteMasVendido()}`); 

return renderFinal;
}
console.log(render());

