import React, { Component } from 'react';

class OptionMovie extends Component {
	constructor(props) {
		super(props)
	}

  render() {
    return <option>{this.props.movie}</option>
  }
}

export default OptionMovie