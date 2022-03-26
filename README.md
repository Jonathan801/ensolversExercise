# ensolversExercise

Ejercicio realizado para una prueba tecnica para Ensolvers

Consiste en una aplicacion toDo sencilla en donde se pueden agregar tareas para hacer,marcarlas como completas y eliminarlas.

## Stack

Se utilizo Spring boot iniciado mediante Spring initializr con las dependencias Spring Data JPA,Spring Web , como base de datos se utilizo Postgresql y de frontend Reactjs.



## Cosas para hacer

Mejorar el frontend debido a que actualmente es lo basico para manejar los toDo items.

Pulir el backend.

Realizar la Fase 2 de la prueba tecnica que consistia en la aparicion de las "Carpetas" que pueden contener y manejar distintos toDo items por categorias o
criterios del usuario.

Realizar las cosas tirando mas a produccion que desarrollo.

Realizar los puntos extras de la prueba tecnica.

##Levantar aplicacion

Para levantar el servicio se debe ubicar en la carpeta de frontend y ejecutar en la terminal "npm start".Esto levanta localmente el frontend en la direccion localhost:3000 , el cual le pega al servicio de backend levantado en heroku en la direccion https://todoapp-springboot-postgres.herokuapp.com/api/toDo

Algo pendiente seria levantar tambien en heroku el frontend y adaptar mejor el codigo para las opciones de dev y produccion
