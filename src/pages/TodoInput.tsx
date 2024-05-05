import React from "react"
import { useState } from "react"


// TodoList Input 부분
const TodoInput = React.memo((
    {addfunc} 
    : 
    {addfunc: (title: string) => void}
) => {
    const [value, setValue] = useState("")
    
    const onClick = (e: any) => {
        e.preventDefault()
        
        if (value == '') {
            alert("내용을 입력해주세요")
            return
        }

        addfunc(value)
        setValue("")
    }

    
    return (
        <form onSubmit={onClick} className="flex pt-2">
            <input
                type="text"
                className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
                name="value"
                value={value} 
                placeholder="해야 할 일을 입력하세요."
                onChange={(e) => {setValue(e.target.value)}} 
                />
            <input 
                type="submit"
                className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
                value="입력"
            />
        </form>
    )
})

export default TodoInput