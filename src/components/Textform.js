import React,{useState} from 'react'

export default function TextForm(props) {
  
 const handleUpClick=()=>{
  
  let newText=text.toUpperCase();
  setText(newText);
  props.setalert("converted to uppercase","success")
}
const capitalize=()=>{

  let newText2= text.split(" ").map(word=>{
    return word.charAt(0).toUpperCase() +word.slice(1);
  }).join(" ");
  setText(newText2);
  props.setalert("converted to capitailzed form","success")
}
  




const handleOnChange=(event)=>{
   setText(event.target.value);
}

  const[text,setText]=useState("here");
  
  return (
    <>
    <div className="container my-6">
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <label htmlFor="myBox" className="form-label "><h1>Try TextUtils-Word Counter,Character Counter</h1></label>
      <textarea className="form-control" style={{backgroundColor:(props.mode==='light'?'white':'#13466e')}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={capitalize}>Capitalize</button>
   </div>
   <div className="container" >
    <h1>Your Text Summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <h2>Preview</h2>
    <p>

      
      {text.length>0?text:"enter something"}
    </p>
    </div>
    </>
  )
}
