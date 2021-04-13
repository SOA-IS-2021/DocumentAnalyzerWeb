import React from 'react';


class Table extends React.Component{ 

  constructor(props) {
    super(props) 
    this.state = props.query 
  }
 
  renderTableData() {
    if ((this.state.mode) === 'History')
      return this.state.documents.map((doc, index) => {
        const { file, progress} = doc //destructuring
        return (
            <tr key={file}>
              <td>{file}</td>
              <td>{progress}%</td>                        
            </tr>
        )
      })
    else
      return this.state.documents.map((doc, index) => {
        const { file, employee} = doc //destructuring
        return (
            <tr key={file}>
              <td>{file}</td>
              <td>{employee}</td>                        
            </tr>
        )
      })
  }

  renderTableHeader() {
    let header = Object.keys(this.state.documents[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

  render(){
    let header = null   
    header = this.state.mode        
    return(
      <div >
        <h3 className="ui header">{header}</h3>      
        <table className="ui celled striped small table" id='documents'>         
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}


export default Table;

