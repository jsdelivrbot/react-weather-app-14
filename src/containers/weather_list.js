import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {

	renderWeather(cityData) {
		
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		console.log(temps);
		return (
			<tr key={name}>
				<td style={{textAlign: "center"}}>{name}</td>
				<td style={{weight: "300px", width: "300px"}}><Chart data={temps} color="#41c3f9" /></td>
				<td style={{weight: "300px", width: "300px"}}><Chart data={pressure} color="#253E56" /></td>
				<td style={{weight: "300px", width: "300px"}}><Chart data={humidity} color="#EA485C" /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th style={{textAlign: "center"}}>City</th>
						<th style={{textAlign: "center"}}>Temperature</th>
						<th style={{textAlign: "center"}}>Pressure</th>
						<th style={{textAlign: "center"}}>Humidity</th>						
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };

	// note this is equivalent to receiving the argument state.weather
	// instead of { weather }, and returning { weather: state.weather }
	// instead of { weather }
	// ie mapStateToProps(state.weather) === mapStateToProps({ weather })
	// && return {weather: state.weather} === return { weather };
}

export default connect(mapStateToProps)(WeatherList);