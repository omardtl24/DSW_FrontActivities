# Taller TypeScript 1

Este repositorio contiene la solución al **Taller TypeScript 1** del Ciclo 2, en el cual se desarrolla una aplicación para gestionar series de televisión. El taller consta de dos puntos principales, descritos a continuación.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **`Serie.ts`**: Contiene la clase `Serie` con los atributos y métodos necesarios para manejar los datos de una serie.
- **`data.ts`**: Archivo que incluye un conjunto de datos de series de televisión. Los datos se basan en el archivo proporcionado en [este enlace](https://gist.githubusercontent.com/josejbocanegra/de7431ea04351128053335c868c9698c/raw/add0c3cad73b7f913de44ee02b9ca7ebd1ebea23/series.ts).
- **`main.ts`**: Archivo donde se realizan las modificaciones al DOM para implementar la nueva funcionalidad y mostrar los detalles de las series seleccionadas.
- **Interfaz gráfica**: La interfaz muestra las series en una tabla utilizando Bootstrap y se incluyen los siguientes datos: `id`, `name`, `channel` y `seasons`. Además, al final de la tabla se incluye un resumen con el promedio de temporadas de todas las series.

## Puntos del Taller

### Punto 1 (65%)

Se debe crear una aplicación que:

1. Implemente una clase `Serie` que maneje los atributos de una serie.
2. Incluya un archivo `data.ts` con un conjunto de datos de series.
3. Despliegue el listado de series en una tabla utilizando Bootstrap, con los siguientes datos:
   - ID
   - Nombre de la serie
   - Canal de transmisión
   - Número de temporadas

### Punto 2 (35%)

Se debe modificar la tabla para incluir un resumen al final, mostrando el promedio de temporadas de todas las series.

## Tecnologías

- **TypeScript**
- **Bootstrap** (para el diseño de la tabla)
  
## Entrega

El código fuente se encuentra en este repositorio.
