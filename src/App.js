import React, { Component } from 'react';
import FaAdd from 'react-icons/lib/ti/document-add';
import ProjectItem from './components/ProjectItem';
import './styles/css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tempProject: {
        id: 0,
        title: '',
        desc: '',
        status: 1
      },
      projects: []
    }

    this.addProject = this.addProject.bind(this)
    this.setTitle = this.setTitle.bind(this)
    this.setDescription = this.setDescription.bind(this)
    this.setStatus = this.setStatus.bind(this)
  }

  render() {
    return (
      <div className="App">
        <h1>Project Maker</h1>
        <form className="form-project" action="#" method="GET">
          <fieldset className="main-fieldset">
            <legend>Project Details</legend>
            <div className="flex-box">
              <label>Title<input required onChange={this.setTitle} type="text" name="p-title" placeholder="Title"/></label>
              <label>Description<textarea onChange={this.setDescription} type="text" name="p-description" placeholder="Enter project description..."></textarea></label>
            </div>
          </fieldset>
          <fieldset className="activity-fieldset">
            <legend>Project Status</legend>
            <div className="flex-box">
              <label>Inactive<input defaultChecked={true} onChange={this.setStatus} type="radio" name="status" data-num="1"/></label>
              <label>Active<input onChange={this.setStatus} type="radio" name="status" data-num="2"/></label>
              <label>Complete<input onChange={this.setStatus} type="radio" name="status" data-num="3"/></label>
            </div>
          </fieldset>
          <button type="submit" onClick={this.addProject}>Create Project <FaAdd /></button>
        </form>
        <ProjectItem />
      </div>
    );
  }

  componentDidMount() {
    this.loadLocal();
  }

  setTitle(e) {
    let tempProject = this.state.tempProject
    e.preventDefault()
    tempProject.title = e.target.value
    this.setState({tempProject})
  }

  setDescription(e) {
    if (e.target.value.length > 0) {
      let tempProject = this.state.tempProject
      e.preventDefault()
      tempProject.desc = e.target.value
      this.setState({tempProject})
    }
    else {
      // console.log(e)
    }
  }

  setStatus(e) {
    let tempProject = this.state.tempProject
    switch (e.target.dataset.num) {
      case '1':
        tempProject.status = 1
        break;
      case '2':
        tempProject.status = 2
        break;
      case '3':
        tempProject.status = 3
        break;
      default:
        break;
    }

    this.setState({tempProject})
  }

  addProject(e) {
    e.preventDefault()
    let tempProject = this.state.tempProject
    let projects = this.state.projects
    let id = 0

    for (let i = 0; i < projects.length; i++) {
      if (id === projects[i].state.id) {
        i = 0
      }
      id++;
    }

    let tempProjectItem = new ProjectItem(
        id,
        tempProject.title,
        tempProject.desc,
        tempProject.status
      )
    tempProjectItem.create()
    projects.unshift(tempProjectItem)
    this.setState({projects: projects})
    this.saveLocal()
  }

  saveLocal() {
    localStorage.setItem('projects', JSON.stringify(this.state.projects))
  }

  loadLocal() {
    if (localStorage.getItem('projects')) {
      let localProjects = JSON.parse(localStorage.getItem('projects'));
      let projectList = [];
      for (let i = 0; i < localProjects.length; i++) {
        let tempProjectItem = new ProjectItem(
            localProjects[i].state.id,
            localProjects[i].state.title,
            localProjects[i].state.desc,
            localProjects[i].state.status
          )
        projectList.unshift(tempProjectItem)
      }
      for (let i = 0; i < projectList.length; i++) {
        projectList[i].create();
      }
    }
  }
}

export default App;