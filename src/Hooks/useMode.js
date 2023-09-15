import { useState } from 'react'

const useMode = () => {
    const[darkMode,setdarkmode]=useState(false)
    function toggleDarkMode(){
      setdarkmode(!darkMode)
    }
    return  [darkMode,toggleDarkMode]
}
export default useMode
