import React, { Component } from 'react';
import GalleryItem from '../components/GalleryItem'
import '../styles/css/Pg2.css';
const unsplashKey = '41e3281f033234674af3526dd01467252ddb2f2d2b57bfb0f97c4a52a2af44f5'

class Pg2 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pictures: [],
			search: '',
		};

		this.searchFieldChange = this.searchFieldChange.bind(this)
	}

	componentWillMount() {
    if (!localStorage.getItem('galleryImages')) {
      let galleryImages = []
    	fetch(`https://api.unsplash.com/photos/?client_id=${unsplashKey}`)
  			.then(data => data.json())
  			.then(data => {
  				for (var i = 0; i < data.length; i++) {
  					galleryImages.push(data[i])
  				}
  			})
  			.then(() => {
          this.setState({pictures: galleryImages})
          localStorage.setItem("galleryImages", JSON.stringify(galleryImages))
        })
    }
    else {
      let galleryImages = JSON.parse(localStorage.getItem('galleryImages'))
      this.setState({pictures: galleryImages})
    }
	}

  render() {
  	let galleryImages = this.state.pictures.map((pic, key) => {
  		if (pic.user.name.toLowerCase().includes(this.state.search.toLowerCase())) {
  			return <GalleryItem class={'galItem galItem-'+key} key={key} url={pic.urls.regular} user={pic.user.name} />
  		}
      return undefined
  	})
  	let galleryImagesFiltered = galleryImages.filter(val => typeof val !== "undefined")
    return (
    	<div>
    		<h1>Photo Filter Tool</h1>
    		<label className="search">Search for Image: <input type="text" onChange={this.searchFieldChange} /></label>
    		<ul className="gallery-container">
    			{galleryImagesFiltered}
    		</ul>
    	</div>
    )
  }

  searchFieldChange(e) {
  	e.preventDefault()
  	this.setState({search: e.target.value})
  }
}

export default Pg2