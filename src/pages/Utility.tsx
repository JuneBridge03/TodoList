

export interface TodoEntity {
    id: number,
    title: string,
    isDone: boolean
}

export interface Action {
    type: string,
    entity: TodoEntity
}

export const TodolistReducer = (todolist : TodoEntity[], action : Action): TodoEntity[] => {
    switch(action.type) {
        case "add":

            return [
                ...todolist,
                {
                    id: (new Date()).getTime(),
                    title: action.entity.title,
                    isDone: false
                }
            ]
        
        case "delete":
            
            return todolist.filter(en => en.id != action.entity.id)
            
        case "change":

            return todolist.map(en => {
                if (en.id == action.entity.id) return action.entity
                return en
            })
            
        default:
            return todolist
    }
}