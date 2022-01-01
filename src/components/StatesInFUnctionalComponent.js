import React,{useState} from 'react'

export default function StatesInFUnctionalComponent() {
    let [name,updateName]=useState("Pradeep");

    return (
        <div>
            <h1 onMouseOver={()=>{updateName("pradeep M")}}
            onMouseLeave={()=>{updateName("Pradeep")}}>
                {name}
            </h1>
        </div>
    )
}

