    import React from 'react'
    import { useState } from 'react';

    const formHandling = () => {

        const change = (e) => {
            e.preventDefault();
            console.log("Form Working Without reload")
        }

        // Two Way Binding ------------- Start

        // Tow Ways binding me yahi hota he jaab hamhe kuch change krna hoto 
        // Khud nhi krte hen React ko bolte hen wo krta he jese hamne is code me kara he
        // Pehle kahli input rkha const input me phr jese input change horaha he 
        // setinput(e.target.value) wese he yaha wo value  set horahi he or 

        const [input, setinput] = useState('')

        // Two Way Binding ------------- End

        


    return (
        <div className="bg-yellow-700 p-20">
        <form onSubmit={(e) => {
            change(e)
        }}>
            <input
                    type="text" 
                    placeholder='Names' 
                    className='p-2'
                    // Two Way Binding -------------- Start
                    value={input}

                    onChange={(e) => {
                        setinput(e.target.value)
                    }}
                    // Two Way Binding -------------- End
            ></input>
            <br></br>
            <br></br>
            <button className='bg-red-900 text-white w-32 h-10'>Submit</button>
        </form>
        </div>
    )
    }

    export default formHandling
