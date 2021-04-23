import React from "react";
import {postFile} from "../services/api";

class UploadFile extends React.Component{ 

  constructor(props) {
    super(props) 
    this.state = props.query
  } 


  render(){          
    return(
      <div>
        <div className="ui icon header">
          <div className="ui horizontal list">
            <div className="item">
              <i className="file outline icon"></i>
            </div>
            <div className="item">
              <i className="pdf file outline icon"></i>
            </div>
            <div className="item">
            <i className="file word outline icon"></i>
            </div>                 
          </div>                
        </div>
      <h3>No document loaded</h3>        
      <div className="inline">                
        <input 
          type="file" id="add" name="add" 
          accept=".pdf,.docx,.txt">                   
        </input>               
        <button className="ui secondary button" onClick={postFile()}> Upload </button>
      </div>
    </div>
    )
  }
}


export default UploadFile;

