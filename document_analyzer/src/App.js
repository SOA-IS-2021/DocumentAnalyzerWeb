import React from "react";
import Table from "./components/Table"
import UploadFiles from "./components/UploadFiles"

class App extends React.Component {
  
  
  render(){
    return (
      <div>
        <nav className="ui raised very padded segment" >
          <h1 className="ui center aligned blue header">
            Document Analyzer
          </h1>
        </nav>

        <section id="split">          
        <div className="ui two column stackable center aligned grid">    

          <div className="column">                        
            <div className="ui placeholder segment">
             <UploadFiles />       
            </div>

            <div class="ui placeholder segment">
              <div class="ui icon header">
                <i class="file outline icon"></i>
                <h3>Search for employees</h3> 
              </div>
              <div class="ui primary button">Select Document</div>
            </div>

            <div className="ui raised padded text container segment">
              <Table
                query={{
                  documents: [
                  { file: 'gg.pdf', employee: 'Manuel'},
                  { file: 'hh.docx', employee: 'Juan'} ],
                  mode : 'Search Results'}} 
              />
            </div>
          </div>
                      
          <div className="column">
            <div className="ui raised padded text container segment">
              <Table
               query={{
                documents: [
                 { file: 'gg.pdf', progress: 5},
                 { file: 'hh.docx', progress: 96},
                 { file: 'readme.txt', progress: 78},
                 { file: 'hola.txt', progress: 45} ],
                mode : 'History'}} 
              />
            </div>                      
          </div>
        </div>
        </section> 
      </div>
    )
  }
}

export default App;     

