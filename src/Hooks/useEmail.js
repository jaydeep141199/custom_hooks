import { useState } from "react";
import { useWindowSize } from 'react-use';


 const useEmail = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const[color,setcolor]=useState("")
  
    const validateEmail = () => {
      const emailRegex =/^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/  ;
      // /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
 
      if (!emailRegex.test(email)) {
        setErrorMessage('E-mail address id invalid');
        setcolor("FF0000")
      } else {
        setErrorMessage('E-mail address is valid');
        setcolor("3964C3")
      }
    };
    const { width, height } = useWindowSize()
  return [email, setEmail,errorMessage ,validateEmail,color, width, height]
   
}
export default useEmail
