package com.SadushBeshiri.task_backend.domain;

import java.time.LocalDate;

import com.SadushBeshiri.task_backend.domain.entity.TaskPriority;
import com.SadushBeshiri.task_backend.domain.entity.TaskStatus;

public record UpdateTaskRequest(
  String title,
  String description,
  LocalDate dueDate,
  TaskStatus status,
  TaskPriority priority
) {
  
}
