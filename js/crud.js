const BASE_URL = "http://localhost:8000/tasks/";
           
async function createtask(task){
    task.categories = [0];
    task.user = 1;
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(task)
        });

        const json = await response.json();
        return json;

    } catch (error) {
        throw new Error(error);
    }
}

async function deletetask(task_id){
    try {
        const response = await fetch(`${BASE_URL}${task_id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            
        });
        return true

    } catch (error) {
        throw new Error(error);
    }
}
//                'Authorization': `Token ${localStorage.getItem('token')}`,  

async function updateTask(task_id, task) {
    try {
        const response = await fetch(`${BASE_URL}${task_id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,  

                'Content-Type': 'application/json',

            },
            body: JSON.stringify(task)
        });

        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error(error);
    }
}

const tasklist = document.getElementById("tasklist");



async function fetchTasks() {
    try {
        const response = await fetch(BASE_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.next);
        const tasks = data.results;
        let tasksListRenderString = "";
        for (let task of tasks) {
            tasksListRenderString = tasksListRenderString + renderTaskTemplate(task);
        }
        tasklist.innerHTML = tasksListRenderString;
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}
   // taskslist.innerHTML = jsonText
    
 


async function fetchTask(task_id){
    const response = await fetch(`${BASE_URL}${task_id}/`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    });
    return await response.json();
}