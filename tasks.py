import requests

class TaskClient:
    BASE_URL = "http://127.0.0.1:8000/tasks/"

    def create_task(self):
        title = input("Enter task title: ")
        completed = input("Is the task completed? (True/False): ")
        task = {"title": title, "completed": completed}
        return requests.post(TaskClient.BASE_URL, json=task).json()

    def get_task(self):
        task_id = input("Enter task ID: ")
        return requests.get(f"{TaskClient.BASE_URL}{task_id}").json()

    def get_all_tasks(self):
        return requests.get(TaskClient.BASE_URL).json()

    def update_task(self):
        task_id = input("Enter task ID to update: ")
        title = input("Enter new task title: ")
        completed = input("Is the task completed? (True/False): ")
        task = {"title": title, "completed": completed}
        return requests.put(f"{TaskClient.BASE_URL}{task_id}", json=task).json()

    def delete_task(self):
        task_id = input("Enter task ID to delete: ")
        return requests.delete(f"{TaskClient.BASE_URL}{task_id}/").json()  # Add a trailing slash (/) after task_id

# Example usage
client = TaskClient()
operation = input("Which operation do you want to perform? (create/read/update/delete): ")

if operation == "create":
    response = client.create_task()
    print("Task created successfully:", response)
elif operation == "read":
    response = client.get_task()
    print("Task details:", response)
elif operation == "update":
    response = client.update_task()
    print("Task updated successfully:", response)
elif operation == "delete":
    response = client.delete_task()
    print("Task deleted successfully:", response)
else:
    print("Invalid operation!")



client = TaskClient()

# client.create_task(id=22, title="Walk the dog", completed=False)
#print(client.get_all_tasks())
#print(client.update_task(20, id=20, title="Walk the dog again", completed=False))
# print(client.delete_task(19)) 














