import React, { Component } from 'react';
import '../styles/css/Gallery.css';

class Gallery extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

  render() {
    return (
    	<li id={this.props.id} key={this.key}><img alt="" src={this.props.url}/><h3>{this.props.user}</h3></li>
    )
  }
}

export default Gallery