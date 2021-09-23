import { Component } from 'react';
import Loader from 'react-loader-spinner';
import { Div } from './Spinner.styled';

export default class Spinner extends Component {
  
  render() {
    return (
      <Div>
        <Loader
          type="Puff"
          color="#ff00fb"
          height={80}
          width={80}
          timeout={2000} //3 secs
        />
      </Div>
    );
  }
}