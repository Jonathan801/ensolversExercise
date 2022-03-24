package com.jonathan.todoApp.controller;

import com.jonathan.todoApp.exceptions.TaskNotFoundException;
import com.jonathan.todoApp.model.Task;
import com.jonathan.todoApp.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/toDo")
public class TaskController {


    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }


    @GetMapping
    List<Task> getAllTasks(){
        return taskService.findAll();
    }

    @PostMapping
    void newTask(@RequestBody Task newTask){
        taskService.save(newTask);
    }

    @GetMapping("/{id}")
    Task findTask(@PathVariable Integer id) {
        return taskService.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id)); //Check exception because Optional in service
    }

    @PutMapping("/{id}")
    Task updateTask(@RequestBody Task newTodo, @PathVariable Integer id) {
        return taskService.findById(id)
                .map(task -> {
                    task.setDescription(newTodo.getDescription());
                    task.setCompleted(newTodo.isCompleted());
                    taskService.save(task);
                    return task;
                })
                .orElseGet(() -> {
                    newTodo.setId(id);
                    taskService.save(newTodo);
                    return newTodo;
                });
    }

    @DeleteMapping("/{id}")
    void deleteTask(@PathVariable Integer id) {
        taskService.deleteById(id);
    }

}
