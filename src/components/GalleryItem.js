import React, { Component } from 'react';
import '../styles/css/GalleryItem.css';

class GalleryItem extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

  render() {
    return (
    	<li className={this.props.class} key={this.key}>
    		<div className="img-container">
    			<img alt="" src={this.props.url}/>
    		</div>
    		<h3>{this.props.user}</h3>
    	</li>
    )
  }
}

export default GalleryItem