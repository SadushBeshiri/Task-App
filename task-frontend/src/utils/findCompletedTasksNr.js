export function findCompletedTasksNr(tasks){
  let count = 0;
  tasks.forEach(task => {
      if(task.status === "COMPLETE") {
        count++;
      }
  });
  return count;
}