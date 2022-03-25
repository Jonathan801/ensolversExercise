package com.jonathan.todoApp.service;

import com.jonathan.todoApp.exceptions.TaskNotFoundException;
import com.jonathan.todoApp.model.Task;
import com.jonathan.todoApp.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {


    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> findAll(){
        return this.taskRepository.findAll();
    }

    public Task findById(Integer id) throws TaskNotFoundException{
        return this.taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
    }

    public Task saveTask(Task newTodo){
        return this.taskRepository.save(newTodo);
    }

    public Task updateTask(Task updatedTask,Integer id){
        return this.taskRepository.findById(id).map(task -> {
            task.setDescription(updatedTask.getDescription());
            task.setCompleted(updatedTask.isCompleted());
            return this.taskRepository.save(task);
        }).orElseGet(() -> {
            //newTodo.setId(id);
            return this.taskRepository.save(updatedTask);
        });
    }

    public void deleteById(Integer id) throws TaskNotFoundException{
        this.taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
        this.taskRepository.deleteById(id);
    }

}