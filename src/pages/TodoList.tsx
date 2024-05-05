import { Action, TodoEntity } from "./Utility"
import TodoElement from "./TodoElement"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import React from "react"
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"


const TodoList = React.memo((
    {todolist, dispatch}
    : 
    {
        todolist: TodoEntity[],
        dispatch: React.Dispatch<Action>
    }
) => {
    
    const handleDeleteTodolist = (id: number) => {
        dispatch({
            type: "delete",
            entity: {
                id: id,
                title: "",
                isDone: false
            }
        })
    }

    const handleChangeTodolist = (entity: TodoEntity) => {
        dispatch({
            type: "change",
            entity: entity
        })
    }


    const handleEnd = (result: any) => {
        if(! result.destination) return;

        const newTodolist = todolist;

        const [reorderedItem] = newTodolist.splice(result.source.index, 1);

        newTodolist.splice(result.destination.index, 0, reorderedItem)
        
        // 셑 함수 없는데 어떻게 해??
        // 근데 이거 왜 됨...? ㄷㄷ
    }

    
    return (
        <div>
        <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todoids">
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                {todolist.map((e, index) => 
                    <Draggable
                        key={e.id}
                        draggableId={e.id.toString()}
                        index={index}
                    >
                        {(provided, snapshot) => (
                            <div key={e.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                            <TodoElement
                                entity={e}
                                delentityfunc={handleDeleteTodolist}
                                changeentityfunc={handleChangeTodolist}
                            />
                            </div>
                        )}
                    </Draggable>
                )}
                {provided.placeholder}
                </div>
            )}
        </Droppable>
        </DragDropContext>
        </div>
    )
})

export default TodoList;