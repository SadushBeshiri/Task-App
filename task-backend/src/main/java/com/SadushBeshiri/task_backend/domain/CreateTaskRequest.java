package com.SadushBeshiri.task_backend.domain;

import java.time.LocalDate;

import com.SadushBeshiri.task_backend.domain.entity.TaskPriority;

public record CreateTaskRequest(
  String title,
  String description,
  LocalDate dueDate,
  TaskPriority priority
) {
  
}
