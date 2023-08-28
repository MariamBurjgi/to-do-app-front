function renderTaskTemplate(task){
    return `
    <li data-task-id="${task.id}" class="${task.completed ? "completed" : ""}">
        <button data-action="completed">${task.completed ? "Done" : "Not Yet!"} </button>
        id:${task.id}, title: ${task.title}
        <button data-action="update"> ✏️ </button>
        <button data-action="delete"> ❌ </button>
    </li>
`;
}