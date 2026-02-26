package com.SadushBeshiri.task_backend.mapper.impl;

import org.springframework.stereotype.Component;

import com.SadushBeshiri.task_backend.domain.CreateTaskRequest;
import com.SadushBeshiri.task_backend.domain.UpdateTaskRequest;
import com.SadushBeshiri.task_backend.domain.dto.CreateTaskRequestDto;
import com.SadushBeshiri.task_backend.domain.dto.TaskDto;
import com.SadushBeshiri.task_backend.domain.dto.UpdateTaskRequestDto;
import com.SadushBeshiri.task_backend.domain.entity.Task;
import com.SadushBeshiri.task_backend.mapper.TaskMapper;

@Component
public class TaskMapperImpl implements TaskMapper{

  @Override
  public CreateTaskRequest fromDto(CreateTaskRequestDto dto) {
    return new CreateTaskRequest(
                dto.title(),
                dto.description(),
                dto.dueDate(),
                dto.priority()
        );
  }

  @Override
  public UpdateTaskRequest fromDto(UpdateTaskRequestDto dto) {
    return new UpdateTaskRequest(
                dto.title(),
                dto.description(),
                dto.dueDate(),
                dto.status(),
                dto.priority()
        );
  }

  @Override
  public TaskDto toDto(Task task) {
    return new TaskDto(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.getDueDate(),
                task.getPriority(),
                task.getStatus()
        );
  }
  
}
