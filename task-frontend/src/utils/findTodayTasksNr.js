export function findTodayTasksNr(tasks){
  let count = 0;
  const today = new Date().toLocaleDateString('en-CA'); 

  tasks.forEach(task => {
    if(task.dueDate === today){
      count++;
    }
  });
  return count;
}