package com.SadushBeshiri.task_backend.repository;

import java.util.UUID;
import com.SadushBeshiri.task_backend.domain.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task , UUID>{
  
}
