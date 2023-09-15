import { useState } from "react";
 const useCopy = () => {

    const[text,setText]=useState("")
    const[copytext,setCopyText]=useState("")

 function handelchange(e){
    setText(e.target.value);
 }
 function handelcopytext(){
   setCopyText( navigator.clipboard.writeText(text));
   console.log(setCopyText)
 }
  return [text,handelchange,handelcopytext]
};
export default useCopy;
