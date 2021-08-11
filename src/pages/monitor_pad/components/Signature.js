import React, { Component } from 'react';
import SignaturePad from 'react-signature-canvas';
import { Button } from 'antd';
import styles from './styles.module.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // this.state = {date: new Date()};
  }
  state = { trimmedDataURL: null };
  sigPad = {};
  clear = () => {
    this.sigPad.clear();
  };
  trim = () => {
    const aaa = this.sigPad.isEmpty();
    console.log('aaa', aaa);
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png'),
    });
    console.log(this.state.trimmedDataURL);
  };
  render() {
    const { trimmedDataURL } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.sigContainer}>
          <SignaturePad
            canvasProps={{ className: styles.sigPad }}
            ref={(ref) => {
              this.sigPad = ref;
            }}
          />
        </div>
        <div>
          <Button onClick={this.clear}>Clear</Button>
          <Button onClick={this.trim}>Trim</Button>
        </div>
        {trimmedDataURL ? <img className={styles.sigImage} src={trimmedDataURL} /> : null}
      </div>
    );
  }
}
