import React, { Component } from 'react';
import ProjectItem from './components/ProjectItem';
import './styles/css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tempListItem: {
        id: 0,
        title: '',
        desc: '',
        status: 0
      },
      listItems: []
    }

    this.addProject = this.addProject.bind(this)
    this.setTitle = this.setTitle.bind(this)
    this.setDescription = this.setDescription.bind(this)
    this.setStatus = this.setStatus.bind(this)
  }

  render() {
    return (
      <div className="App">
        <form className="form-project" action="#" method="GET">
          <label>Project Title<input onChange={this.setTitle} type="text" name="p-title" placeholder="Title"/></label>
          <label>Project Description<textarea onChange={this.setDescription} type="text" name="p-description" placeholder="Enter project description..."></textarea></label>
          <fieldset className="fieldset-project">
            <legend>Project Status</legend>
            <div className="flex-box">
              <label>Inactive<input defaultChecked={true} onChange={this.setStatus} type="radio" name="status" data-num="1"/></label>
              <label>Active<input onChange={this.setStatus} type="radio" name="status" data-num="2"/></label>
              <label>Complete<input onChange={this.setStatus} type="radio" name="status" data-num="3"/></label>
            </div>
          </fieldset>
          <button type="submit" onClick={this.addProject}>Create Project</button>
        </form>
        <ul className="list-items">          
        </ul>
      </div>
    );
  }

  setTitle(e) {
    let tempListItem = this.state.tempListItem
    e.preventDefault()
    tempListItem.title = e.target.value
    this.setState({tempListItem})
  }

  setDescription(e) {
    let tempListItem = this.state.tempListItem
    e.preventDefault()
    tempListItem.desc = e.target.value
    this.setState({tempListItem})
  }

  setStatus(e) {
    let tempListItem = this.state.tempListItem
    switch (e.target.dataset.num) {
      case '1':
        tempListItem.status = 1
        break;
      case '2':
        tempListItem.status = 2
        break;
      case '3':
        tempListItem.status = 3
        break;
      default:
        break;
    }

    this.setState({tempListItem})
  }

  addProject(e) {
    e.preventDefault()
    let tempListItem = this.state.tempListItem
    let listItems = this.state.listItems
    let tempProjectItem = new ProjectItem(
        tempListItem.id++,
        tempListItem.title,
        tempListItem.desc,
        tempListItem.status
      )

    tempProjectItem.create()
    listItems.push(tempProjectItem)
    this.setState({listItems: listItems})

    console.log(this.state.listItems)
    
  }
}

export default App;