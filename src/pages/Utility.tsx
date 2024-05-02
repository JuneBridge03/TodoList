export interface TodoEntity {
    id : number,
    title : string,
    isDone : boolean
}

export interface Action {
    type: string
    entity: TodoEntity
}

//TODO 함수의 action의 인자에 entity의 모든 성질이 안 들어와도 작동할 수 있도록 수정 (곧, id만 알아도 되게끔)
//Nullable을 활용하면 될 것 같음
export function TodolistReducer(todolist: TodoEntity[], action: Action) : TodoEntity[]{
    switch (action.type) {
        case 'added':
            return [
                ...todolist,
                action.entity
            ]
        
        case 'deleted':
            return todolist.filter((en) => en.id != action.entity.id)
        
        case 'changed':
            return todolist.map((en) => {
                if (en.id == action.entity.id) {
                    return action.entity
                }
                return en
            })
        default:
            return todolist // This is error
    }
}