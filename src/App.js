import React, { Component } from 'react';
import Topcomponent from './Topcomponent';
import logo from './logo.svg';
import NewsHeadLine from './NewsHeadLine';
import './App.css';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			newsheadlines: []
		}
	}
	show = (id) => {
		var url = 'https://newsapi.org/v2/top-headlines?country=' + id + '&apiKey=eed640b0e6304581803252e6e81b9914';
		fetch(url).then((resp) => resp.json())
			.then((data) => {
				//console.log(data.articles);
				this.setState(() => {
					return { newsheadlines: data.articles };
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	render() {
		return (
			<div className="App">
				<Topcomponent click={this.show} />
				<NewsHeadLine headline={this.state.newsheadlines} />
			</div>
		);
	}
}

export default App;
