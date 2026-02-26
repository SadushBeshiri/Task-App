package com.SadushBeshiri.task_backend.domain.dto;

import java.time.LocalDate;
import java.util.UUID;

import com.SadushBeshiri.task_backend.domain.entity.TaskPriority;
import com.SadushBeshiri.task_backend.domain.entity.TaskStatus;

public record TaskDto(
        UUID id,
        String title,
        String description,
        LocalDate dueDate,
        TaskPriority priority,
        TaskStatus status
) {
  
}
