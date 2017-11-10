import React, { Component } from 'react';
import FaAdd from 'react-icons/lib/ti/document-add';
import ProjectItem from '../components/ProjectItem';
import '../styles/css/Pg1.css';

class Pg1 extends Component {
  constructor(props){
    super(props)
    this.state = {
      editable: false,
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
              <label>* Title<input required onChange={this.setTitle} type="text" name="p-title" placeholder="Project Title..."/></label>
              <label>Description<textarea onChange={this.setDescription} type="text" name="p-description" placeholder="Project Description..."></textarea></label>
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
    if (e.target.validity.valid) {
      this.setState({editable: true})
      let tempProject = this.state.tempProject
      e.preventDefault()
      tempProject.title = e.target.value
      this.setState({tempProject})
      this.removeError()
    }
    else {
      this.setState({editable: false})
      this.showError()
    }
  }

  setDescription(e) {
    let tempProject = this.state.tempProject
    e.preventDefault()
    tempProject.desc = e.target.value
    this.setState({tempProject})
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
    e.target.parentElement.reset()
    if (this.state.editable) {
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
    else {
      this.showError()
    }
  }

  showError() {
    if (!document.querySelector('.title-error')) {
      let tempHTML = `<label class="title-error">Error, field cannot be empty</label>`
      document.querySelector('input[name="p-title"]').insertAdjacentHTML('afterend', tempHTML)
    }
  }

  removeError() {
    if (document.querySelector('.title-error')) {
      document.querySelector('.title-error').remove()
    }
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

export default Pg1;