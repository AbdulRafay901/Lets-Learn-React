    import React from 'react'

    const formHandling = () => {

        const change = (e) => {
            e.preventDefault();
            console.log("Form Working Without reload")
        }


    return (
        <div className="bg-yellow-700 p-20">
        <form onSubmit={(e) => {
            change(e)
        }}>
            <input type="text" placeholder='Names' className='p-2'></input>
            <br></br>
            <br></br>
            <button className='bg-red-900 text-white w-32 h-10'>Submit</button>
        </form>
        </div>
    )
    }

    export default formHandling
