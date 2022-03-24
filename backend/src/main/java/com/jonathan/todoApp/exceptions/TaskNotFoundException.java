package com.jonathan.todoApp.exceptions;

public class TaskNotFoundException extends RuntimeException {

    public TaskNotFoundException(Integer id){
        super("No se puede encontrar la tarea" + id);
    }
}
