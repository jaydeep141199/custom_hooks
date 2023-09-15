import { useState } from 'react'

 const useStorage1 = () => {
    const[key,setKey]=useState("")
    const[value,setValue]=useState("")
    const [storageType, setStorageType] = useState("local");

    function handelkeychange(e){
      setKey(e.target.value)
    }
    function handelvaluechange(e){
      setValue(e.target.value)
    }
    const saveTheData = () => {
      if (storageType === "local") {
        localStorage.setItem(key, value);
      } else if (storageType === "session") {
        sessionStorage.setItem(key, value);
      }
  
      // console.log(key);
      // console.log(value);
    };
  
    const handleStorageChange = (e) => {
      setStorageType(e.target.value);
    };
    
  return [key,setKey,value,setValue,storageType,handelkeychange,handelvaluechange,saveTheData,handleStorageChange]
  
}
export default useStorage1;