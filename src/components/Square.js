import React from 'react'

const Square = (props) => {
    return(
        <div onClick={()=>{
            props.squareClickHandler(0)
        }}>
        </div>
    )
}

export default Square