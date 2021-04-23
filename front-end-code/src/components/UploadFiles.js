import React from "react";
import {postFile} from "../services/api";

class UploadFile extends React.Component{ 

  constructor(props) {
    super(props) 
    this.state = props.query
  }

  fileHandler(event){

    let fileReader = new FileReader();
    let file = event.target.files[0];
    let fileName = file.name;
    fileReader.readAsDataURL(file);
    fileReader.onload = function(fileLoadedEvent){
      let fileData  = fileLoadedEvent.target.result;
      console.log(fileData);
      console.log (fileName);

      // Llamar a la función del post  con fileData y fileName de parámetros
      postFile({
        "name": fileName, // fileName
        "data": fileData // data must be a Base64 encoded string
      });
    };
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
          accept=".pdf,.docx,.txt"
          onChange = {this.fileHandler}>
        </input>               
        <button className="ui secondary button"> Upload </button>
      </div>
    </div>
    )
  }
}


export default UploadFile;

