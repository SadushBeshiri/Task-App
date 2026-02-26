package com.SadushBeshiri.task_backend.service.impl;

import com.SadushBeshiri.task_backend.domain.CreateTaskRequest;
import com.SadushBeshiri.task_backend.domain.UpdateTaskRequest;
import com.SadushBeshiri.task_backend.domain.entity.TaskStatus;
import com.SadushBeshiri.task_backend.exception.TaskNotFoundException;
import com.SadushBeshiri.task_backend.service.TaskService;
import com.SadushBeshiri.task_backend.domain.entity.Task;
import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class TaskServiceImpl implements TaskService{

  
    private final TaskRepository taskRepository;

    public TaskServiceImpl (TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    @Override
    public Task createTask(CreateTaskRequest request) {
        Instant now = Instant.now();

        Task task = new Task(
                null,
                request.title(),
                request.description(),
                request.dueDate(),
                TaskStatus.OPEN,
                request.priority(),
                now,
                now
        );

        return taskRepository.save(task);

    }

    @Override
    public List<Task> listTasks() {
        return taskRepository.findAll(Sort.by(Sort.Direction.ASC,"created"));
    }

    @Override
    public Task updateTask(UUID taskId, UpdateTaskRequest request) {
        Task task = taskRepository.findById(taskId).orElseThrow(()-> new TaskNotFoundException(taskId));
        task.setTitle(request.title());
        task.setDescription(request.description());
        task.setDueDate(request.dueDate());
        task.setStatus(request.status());
        task.setPriority(request.priority());
        task.setStatus(request.status());
        task.setUpdated(Instant.now());

        return taskRepository.save(task);
    }

    @Override
    public void deleteTask(UUID taskID) {
        taskRepository.deleteById(taskID);
    }
  
}
