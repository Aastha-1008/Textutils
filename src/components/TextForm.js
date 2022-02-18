import {useState} from 'react'


export default function TextForm(props){
    const handleUpClick=()=>{
        console.log("uppercase" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase","Success")
    }
    const handleOnChange =(event)=>{
        console.log("onchange");
        setText(event.target.value);
        
    }
    const handleDownClick =(event)=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerCase","Success")

    }
    const[text,setText] = useState('Enter text here');
    return(
        <>
        <div className="container" style ={{color: props.Mode === 'dark'?'white':'#042743'}}> 
            <div className="mb-3">
                <h1 >{props.heading}</h1>
                <textarea className ="form-control" id="mybox" rows="8" value = {text} onChange={handleOnChange} style={{backgroundColor: props.Mode === 'dark' ? 'gray':'white', color: props.Mode === 'dark'?'white':'black'}}></textarea>
            </div> 
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>

        </div>
        <div className="container my-2" style={{color: props.Mode === 'dark'?'white':'#042743'}}>
            <h1>Your Text summary</h1>
            <p>{text.split(" ").length} words , {text.length} characters</p>
            <p>{0.008*text.split("").length} Minutes read </p>
            <h2>{text.length>0?text:"Enter something in the textbox above to preview it her"}</h2> 
            <p>{text}</p>
        </div>
        </>
    )
}