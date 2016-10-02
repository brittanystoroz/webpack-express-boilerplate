import React from 'react';
import styles from '../App.css';
import $ from 'jquery';

export default class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }

  componentDidMount() {
    console.log('Component mounted!');
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid=08be0c5c84c57e451be1437ed0d871ee',
      success: function (data) {
        console.log('Weather returned successfully!', JSON.stringify(data));
      },
      error: function (error) {
        console.error('There was some kind of error.');
      }
    });
  }

  render() {
    return (
      <div className={styles.app}>
        Weather Tracker
      </div>
    );
  }
}
