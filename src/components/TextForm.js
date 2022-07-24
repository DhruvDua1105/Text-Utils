import React, { useState } from 'react';
import './TextForm.css';

export default function TextForm(props) {

    const [text, setText] = useState("");

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }
    const onClickHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.alertInvoke("Text Converted to Uppercase","success");
    }
    const onLowerCaseHandler = (event) => {
        let lowText = text.toLowerCase();
        setText(lowText);
        props.alertInvoke("Text Converted to Lowercase","success");
    }
    const onClearHandler = () => {
        setText("");
    }
    // let word=0;
    // for(let i=0;i<text.length;i++){
    //     if(text.charAt(i)===" "){
    //         word++;
    //     }
    // }

    // console.log(text.split(""));
    // while(text.split(""))

    return (<>
        <div className="form-group container my-3">
            <div className="h1" style={{color: props.mode==="light"?"black":"white" ,transition: "all 500ms"}}>{props.heading}</div>
            <div>
                {/* <label for="textBox">Example textarea</label> */}
                <textarea onChange={onChangeHandler} value={text} className="form-control" style={{color: props.mode==="light"?props.Color:"white", backgroundColor: props.mode==="light"?"white":props.Color}} placeholder='Enter your Text' id="textBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={onClickHandler}  >Convert to uppercase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={onLowerCaseHandler} >Convert to lowercase</button>
            <button className="btn btn-primary my-3 " onClick={onClearHandler} >Clear Text</button>


        </div>
        <div className="container" style={{color: props.mode==="light"?"black":"white" ,transition: "all 500ms"}}>
            <h1>Summary</h1>
            <p>
                <b></b> words , <b>{text.length}</b> characters , time to read : <b>{text.split(" ").length * 0.008 - 0.008}</b> mins
            </p>
            <div className="h2">Live Preview</div>
            <p>
                {text.length>0?text:"Enter text to preview"}
                
            </p>
        </div>

    </>
    )
}
