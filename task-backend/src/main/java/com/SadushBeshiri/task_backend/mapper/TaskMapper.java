package com.SadushBeshiri.task_backend.mapper;

import com.SadushBeshiri.task_backend.domain.CreateTaskRequest;
import com.SadushBeshiri.task_backend.domain.UpdateTaskRequest;
import com.SadushBeshiri.task_backend.domain.dto.CreateTaskRequestDto;
import com.SadushBeshiri.task_backend.domain.dto.TaskDto;
import com.SadushBeshiri.task_backend.domain.dto.UpdateTaskRequestDto;
import com.SadushBeshiri.task_backend.domain.entity.Task;

public interface TaskMapper {

    CreateTaskRequest fromDto(CreateTaskRequestDto dto);
    
    UpdateTaskRequest fromDto(UpdateTaskRequestDto dto);

    TaskDto toDto(Task task);
  
}
