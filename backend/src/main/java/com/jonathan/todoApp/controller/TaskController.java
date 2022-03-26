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
    ResponseEntity<?> newTask(@RequestBody Task newTask){
        return ResponseEntity.status(201).body(this.taskService.saveTask(newTask));
    }

    @GetMapping("/{id}")
    ResponseEntity<?>  findTask(@PathVariable Integer id) {
        return ResponseEntity.status(200).body(this.taskService.findById(id));
    }

    @PutMapping("/{id}")
    ResponseEntity<?> updateTask(@RequestBody Task newTodo, @PathVariable Integer id) {
        return ResponseEntity.status(200).body(this.taskService.updateTask(newTodo,id));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteTask(@PathVariable Integer id) {
        this.taskService.deleteById(id);
        return ResponseEntity.ok("Ok");
    }

}
