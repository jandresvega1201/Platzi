# CONCEPTOS DEL DISPLAY GRID

## Propiedades del contenedor grid
- Display grid
  - Sirve para crear una grilla
  

- Grid-template-columns || Grid-template-rows
  - Sirve para definir su cantida de filas y columnas
  - 
  
- Rows-gap || Column-gap || Gap
  - Sirve para definir el espaciado entre columnas y filas
  

- Grid-auto-rows || Grid-auto-columns
  - Esta Propiedad sirve para darle a todas las filas o columnas un tamaño.


- Grid-auto-flows
  - Esta Propiedad sirve para modificar como se llena nuestra grilla

## Propiedades de alineación de los items
Estas propiedades nos ayudan a alinear los items 
que viven dentro del contenedor

- Justify-items
  - Esta es una propiedad que nos ayuda a linear los items de forma horizontal.


- Align-items
  - Esta Propiedad nos ayuda a linear los items de forma verticalmente.


- Place-items
  - Es la mezcla o la combinacion para alinear los items de forma vertical y horizontal.

## Propiedades de alineación del contenedor
Estas propiedades sirven para alinear la grilla completa ya sea
de forma horizontal o vertical

- Justify-content
  - Esta es una propiedad que nos ayuda a linear la grilla de forma horizontal. 


- Align-content
  - Esta es una propiedad que nos ayuda a linear la grilla de forma vertical. 


- Place-content
  - Esta es una propiedad que nos ayuda a linear la grilla tanto vertical y horizontal
  es decir fusionando las dos propiedades anteriores.

## Propiedades de alineación del item
Se aplica a los hijos de la grilla o a los grid item
- Justify-self
  - Esta es una propiedad que nos ayuda a linear item de forma horizontal. 
- Align-self
  - Esta es una propiedad que nos ayuda a linear item de forma vertical.
- Place-self
  - alinea el item ya se vertical o horizontal 

## Funciones Especiales


- minmax ()
  - Nos ayuda a determinar un tamaño minimo y maximo para el ancho 
  o alto de una celda 
- repeat ()
  - Nos ayuda a generar las cantidades de filas y columnas de una 
  - grilla de una forma mas facil

## Keyword especial

- fr
  - Es una unida que se usa en css grid para darle alto y ancho a filas y columnas de


- min-content 
  - Lo que hace es ajustar el ancho de la columna sin romper el 
  contenido de la columna.


- max-content
  - Hace lo contrario del anterior hace ensanchar las columnas o crecer 
  - para que el contenido se ve lo mas grande posible.


- auto-fill/auto-fit
  - Nos ayudan es que nuestra grilla ocupe el 100% del espacio que tiene la columna
  - autofill agrega columnas fantasmas que van rellenando ese espacio 
  - autofit ensancha las columnas que ya tenemos para que ocupen el 100%