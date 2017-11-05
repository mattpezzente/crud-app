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

  create() {
    let insertionPoint = document.querySelector('.list-items')
    let tempHTML = `<li class="project-item project-${this.state.id} status-${this.state.status}">`
    tempHTML += `<h2>${this.state.title}</h2>`
    tempHTML += `<p>${this.state.desc}</p>`
    tempHTML += `</li>`

    insertionPoint.insertAdjacentHTML('afterbegin', tempHTML)
  }
}

export default ProjectItem;