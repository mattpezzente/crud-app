import React, { Component } from 'react';
import '../styles/css/ProjectItem.css';

class ProjectItem extends Component {
  constructor(id, title, desc, status) {
    super()
    this.state = {
      id: id,
      title: title,
      desc: desc,
      status: status
    }
  }

  render() {
    return(
      <ul className="list-items">          
      </ul>
    )
  }

  create() {
    let insertionPoint = document.querySelector('.list-items')
    let tempHTML = `<li class="project-item project-${this.state.id}">`
    tempHTML += `<div class="status status-${this.state.status}"></div>`
    tempHTML += `<h2>${this.state.title}</h2>`
    tempHTML += `<p>${this.state.desc}</p>`
    tempHTML += `<button class="delete"><i class="fa fa-times-circle" aria-hidden="true"></i></button>`
    tempHTML += `</li>`

    insertionPoint.insertAdjacentHTML('afterbegin', tempHTML)
    document.querySelector(`.project-${this.state.id} .delete`).addEventListener('click', e => {
      this.delete(e);
    })
  }

  delete(e) {
    e.preventDefault();
    document.querySelector(`.project-${this.state.id}`).remove();
    this.deleteLocal();
  }

  deleteLocal() {
    if (localStorage.getItem('projects')) {
      let localProjects = JSON.parse(localStorage.getItem('projects'));
      for (let i = 0; i < localProjects.length; i++) {
        if (localProjects[i].state.id === this.state.id) {
          localProjects.splice(i, 1)
          localStorage.setItem('projects', JSON.stringify(localProjects))
        }
      }
    }
  }
}

export default ProjectItem;