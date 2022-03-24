package com.jonathan.todoApp.service;

import com.jonathan.todoApp.model.Task;
import com.jonathan.todoApp.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public Optional<Task> findById(Integer id){
        return this.taskRepository.findById(id);
    }

    public void save(Task newTodo){
        System.out.println(newTodo);
        this.taskRepository.save(newTodo);
    }

    public void deleteById(Integer id){
        this.taskRepository.deleteById(id);
    }

}