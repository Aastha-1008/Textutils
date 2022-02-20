import React, {useState} from 'react' 

export default function About(props){

    // const [myStyle, setmystyle] = useState({
    //     color:'black',
    //     backgroundColor:'white',
    // })
    let myStyle = {
      color : props.mode === 'dark'? 'white':'#042743',
      backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
      
    }


    return(
        <>
            <div className="container" >
            <h1 className="my-2" style = {{      color : props.mode === 'dark'? 'white':'#042743',
          }}>About Us</h1>
            <div className="accordion" style={myStyle}id="accordionExample">
            <div className="accordion-item" style={myStyle}>
              <h2 className="accordion-header" id="headingOne" style ={{border : '2px solid black'}}>
                <button style={myStyle} className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>Analyze your text</strong>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                </div>
              </div>
            </div>
            <div className="accordion-item" style={myStyle}>
              <h2 className="accordion-header" id="headingTwo" style ={{border : '2px solid black'}}>  
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong>Free To Use</strong>                
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Text utils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils report the number of words and characters. Thus it is suitable for writing textwith word/character limit. 
                </div>
              </div>
            </div>
            <div className="accordion-item" style={myStyle}>
              <h2 className="accordion-header" id="headingThree" style ={{border : '2px solid black'}}>
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <strong>Browser compatible</strong>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  This word counter  software works in any web browser such as Chrome,Firefox, Internet Explorer, Safari, Opera, It suits to count characters in facebook, blog, books, excel document, pdf document etc.
                </div>
              </div>
            </div>
          </div>

            </div>
            
        </>
    )
}