import react, {useState} from 'react'


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
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("copy to clipboard","Success")

    }

    const[text,setText] = useState('');
    return(
        <>
        <div className="container" style ={{color: props.Mode === 'dark'?'white':'#042743'}}> 
            <div className="mb-3">
                <h1 className='mb-4'>{props.heading}</h1>
                <textarea className ="form-control" id="mybox" rows="8"  onChange={handleOnChange} style={{backgroundColor: props.Mode === 'dark' ? 'rgb(51 79 102)':'white', color: props.Mode === 'dark'?'white':'black'}}></textarea>
            </div> 
            <button disabled = {text.length==0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled = {text.length==0} className="btn btn-primary mx-2 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
            <button disabled = {text.length==0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy To Clipboard</button>

        </div>
        <div className="container my-2" style={{color: props.Mode === 'dark'?'white':'#042743'}}>
            <h1>Your Text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
            <p>{0.008*text.split("").filter((element)=>{return element.length!==0}).length} Minutes read </p>
            <h2>Preview</h2> 
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}