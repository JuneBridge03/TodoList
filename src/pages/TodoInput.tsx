import { useState } from "react"


// TodoList Input 부분
export default function TodoInput({addfunc} : {addfunc: (title: string) => void}) {
    const [value, setValue] = useState("")
    
    function onClick(e: any) {
        e.preventDefault()
        
        if (value == '') {
            alert("내용을 입력해주세요")
            return
        }

        addfunc(value)
        setValue("")
    }
    
    return (
        <form className="todoInput" onSubmit={onClick}>
            <input 
                type="text" 
                className="todoInputText" 
                name="value"
                value={value} 
                onChange={(e) => {setValue(e.target.value)}} 
                />
            <input 
                type="submit"
                className="todoInputButton"
                value="입력"
            />
        </form>
    )
}