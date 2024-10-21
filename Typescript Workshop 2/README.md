# Taller TypeScript 2

Este repositorio contiene la solución al **Taller TypeScript 2** del Ciclo 2, que se desarrolla a partir de la aplicación creada en el **Taller TypeScript 1** para gestionar series de televisión.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **`Serie.ts`**: Contiene la clase `Serie` con los atributos y métodos necesarios para manejar los datos de una serie.
- **`data.ts`**: Archivo que incluye un conjunto de datos de series de televisión, basado en el archivo proporcionado en [este enlace](https://gist.githubusercontent.com/josejbocanegra/de7431ea04351128053335c868c9698c/raw/add0c3cad73b7f913de44ee02b9ca7ebd1ebea23/series.ts).
- **`main.ts`**: Archivo donde se realizan las modificaciones al DOM para implementar la nueva funcionalidad y mostrar los detalles de las series seleccionadas.
- **Interfaz gráfica**: La interfaz muestra las series en una tabla utilizando Bootstrap y se incluyen los siguientes datos: `id`, `name`, `channel` y `seasons`. Además, al final de la tabla se incluye un resumen con el promedio de temporadas de todas las series.

## Nueva Funcionalidad

Se ha modificado el Taller 1 para incluir la siguiente funcionalidad: cuando el usuario haga clic en una serie, se debe mostrar en la parte derecha del listado el detalle de la serie. Se utilizó el componente **Card** de Bootstrap para mostrar esta información.

## Tecnologías

- **TypeScript**
- **Bootstrap** (para el diseño de la tabla y las Cards)

## Entrega

El código fuente se encuentra en este repositorio.
