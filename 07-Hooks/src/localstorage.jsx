import React from 'react'

const localstorage = () => {

    const obj = {
        Name:"Rafay",
        Email:"abdulrafay700000@gmail.com",
        Number:"03493332883"
    }

    console.log(JSON.parse(localStorage.getItem("user")))

  return (
    
    <div>localstorage
          
    </div>
  )
}

export default localstorage
