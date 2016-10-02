import React from 'react';
import styles from '../App.css';
import $ from 'jquery';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }

  componentDidMount() {
    console.log('Settings component mounted!');
  }

  render() {
    return (
      <div className={styles.app}>
        Settings
      </div>
    );
  }
}
