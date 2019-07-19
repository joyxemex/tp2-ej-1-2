# Trabajo Práctico 2 - JS

## Local de ventas de PCs

Una empresa de venta de computadoras está desarrollando un sistema para llevar registro de ventas. Para ello cuenta con la siguiente información:

  * Lista de las vendedoras de la empresa
  * Lista de ventas. Un array con objetos. Cada objeto representa una venta y tiene las propiedades `fecha`, `nombreVendedora` (un String con el nombre), `componentes` (un array Strings con el nombre de cada componente vendido).
  * Lista de precios de los componentes, de la forma (nombre componente, precio).

```js
const 
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

  ventas: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
    { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
    { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
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
```

1. Se pide desarrollar las siguientes funciones:
   


    

    


2. Como se abrió una nueva sucursal en Caballito, ahora los datos de las ventas también tienen el nombre de la sucursal en la cual se realizó. Por ejemplo: `{ fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: 'Centro' }`. Por este cambio, se pide:
    1* En las ventas ya existentes, tenemos que agregar la propiedad `sucursal` con el valor **Centro** (ya que es la sucursal original).

    2* Agregar al objeto principal la propiedad `sucursales: ['Centro', 'Caballito']`

    3* Cargar la siguiente información en el array `ventas`, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora, componentes, sucursal
    ```js
  /////HECHO///////////////
    a* Crear la función **ventasSucursal(sucursal)**, que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
      ```js
      console.log( ventasSucursal("Centro") ); // 4195
      ```

    b* Las funciones **ventasSucursal** y **ventasVendedora** tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

    c* Crear la función **sucursalDelMes(mes, anio)**, que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función `precioMaquina`. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
      ```js
      console.log( sucursalDelMes(1, 2019) ); // "Centro"
      ```

3. Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las ventas por sucursal y por mes. Para esto, necesitamos crear las siguientes funciones:
    * **renderPorMes()**: Muestra una lista ordenada del importe total vendido por cada mes/año
    ```js
    console.log( renderPorMes() );
    // Ventas por mes:
    //   Total de enero 2019: 1250
    //   Total de febrero 2019: 4210
    ```

    * **renderPorSucursal()**: Muestra una lista del importe total vendido por cada sucursal
    ```js
    console.log( renderPorSucursal() );
    // Ventas por sucursal:
    //   Total de Centro: 4195
    //   Total de Caballito: 1265
    ```

    * **render()**: Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó
    ```js
    console.log( render() );
    // Reporte
    // Ventas por mes:
    //   Total de enero 2019: 1250
    //   Total de febrero 2019: 4210
    // Ventas por sucursal:
    //   Total de Centro: 4195
    //   Total de Caballito: 1265
    // Producto estrella: Monitor GPRS 3000
    // Vendedora que más ingresos generó: Grace
    ```