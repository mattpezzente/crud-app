import React, { Component } from 'react';
import './styles/css/App.css';

class App extends Component {
  constructor(){
    super()
    this.addProject = this.addProject.bind(this)
    this.id = 0
  }

  render() {
    return (
      <div className="App">
        <form class="form-project" action="#" method="GET">
          <label>Project Title<input ref="title" type="text" name="p-title"/></label>
          <label>Project Description<input ref="desc" type="text" name="p-description"/></label>
          <fieldset class="fieldset-project">
            <legend>Project Status</legend>
            <div class="flex-box">
              <label>In Progress<input ref="status-1" type="radio" name="status"/></label>
              <label>Inactive<input ref="status-2" type="radio" name="status"/></label>
              <label>Active<input ref="status-3" type="radio" name="status"/></label>
            </div>
          </fieldset>
          <button type="submit" onClick={this.addProject}>Create Project</button>
        </form>
        <ul class="projects">
        </ul>
      </div>
    );
  }

  addProject(e) {
    e.preventDefault()

    this.title = this.refs.title.value
    this.desc = this.refs.desc.value

    let tempProjectItem = new ProjectItem(
      this.id++,
      this.title,
      this.desc
    )
    tempProjectItem.create()
  }
}


class ProjectItem extends Component {
  constructor(id, title, desc) {
    super()
    this.id = id
    this.title = title
    this.desc = desc
    //this.status = status
  }

  create() {
    let insertionPoint = document.querySelector('.projects')
    let tempHTML = `<li id="project-${this.id} status-${this.status}">`
    tempHTML += `<h2>${this.title}</h2>`
    tempHTML += `<h3>${this.desc}</h3>`
    tempHTML += `</li>`

    insertionPoint.insertAdjacentHTML('afterbegin', tempHTML)
  }
}

export default App;