import React from 'react'

export default function ListRendering() {
    // let emplist=["Bharu","likhi","gop","Nag"];
    let emplist=[
        {
            Name:"Likki",
            salary:"60000",
            mobile:9704276669
        },
        {
            Name:"Likki",
            salary:"60000",
            mobile:9704276669
        },
        {
            Name:"Likki",
            salary:"60000",
            mobile:9704276669
        },
        {
            Name:"Likki",
            salary:"60000",
            mobile:9704276669
        }
        
    ]
    return (
        <div>
            <h1>List Rendering</h1>
            {/* {
                emplist.map(element => 
                  <h1> {element} </h1> 
                   )
            } */}
            {
                emplist.map(
                    empdata=>
                   <>
                    <p>
                        {empdata.Name}
                    </p>
                    <p>
                        {empdata.salary}
                    </p>
                    <p>
                    {empdata.Mobile}
                    </p>
                   </> 
                )
            }
        </div>
    )
}


