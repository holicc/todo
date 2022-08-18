interface ToDo {
    id: number,
    title: string,
    state: number,
}

export interface ToDoList {
    title: string,
    list: ToDo[]
}