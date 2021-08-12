import React, { Component } from 'react';
import SignaturePad from 'react-signature-canvas';
import { Button } from 'antd';
import styles from './styles.module.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = { trimmedDataURL: null };

  sigPad = {};
  clear = () => {};
  trim = async () => {
    const aaa = this.sigPad.isEmpty();
    console.log('aaa', aaa);
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png'),
    });
    this.props.getUrl(this.sigPad.getTrimmedCanvas().toDataURL('image/png'));
    console.log(this.state.trimmedDataURL);
  };
  render() {
    const { trimmedDataURL } = this.state;
    return (
      <>
        <div className={styles.container}>
          {trimmedDataURL ? (
            <img className={styles.sigImage} src={trimmedDataURL} />
          ) : (
            <div className={styles.sigContainer}>
              <SignaturePad
                canvasProps={{ className: styles.sigPad }}
                ref={(ref) => {
                  this.sigPad = ref;
                }}
              />
            </div>
          )}
        </div>
        {!trimmedDataURL ? (
          <div>
            <Button onClick={this.clear}>清空</Button>
            <Button onClick={this.trim}>完成</Button>
          </div>
        ) : null}
      </>
    );
  }
}
