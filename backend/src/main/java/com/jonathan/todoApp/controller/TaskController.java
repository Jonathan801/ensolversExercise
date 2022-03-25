package com.jonathan.todoApp.controller;

import com.jonathan.todoApp.exceptions.TaskNotFoundException;
import com.jonathan.todoApp.model.Task;
import com.jonathan.todoApp.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/toDo")
@CrossOrigin(origins = "*" ,methods = {RequestMethod.GET,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.POST})
public class TaskController {


    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }


    @GetMapping
    ResponseEntity<?> getAllTasks(){
        return ResponseEntity.ok(taskService.findAll());
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
    ResponseEntity<?> updateTask(@RequestBody Task newTodo, @PathVariable Integer id) {
        return taskService.findById(id)
                .map(task -> {
                    task.setDescription(newTodo.getDescription());
                    task.setCompleted(newTodo.isCompleted());
                    taskService.save(task);
                    return ResponseEntity.ok(task);
                })
                .orElseGet(() -> {
                    //newTodo.setId(id);
                    taskService.save(newTodo);
                    return ResponseEntity.ok(newTodo);
                });
    }

    @DeleteMapping("/{id}")
    void deleteTask(@PathVariable Integer id) {
        taskService.deleteById(id);
    }

}
