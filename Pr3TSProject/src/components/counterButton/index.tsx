import React, { FC } from 'react';
//import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image
} from 'react-native';
import { styles } from './styles';

// export const CounterButton = ({ src, press }): JSX.Element => {
// return (
//   <TouchableOpacity onPress={press} style={styles.countBtn}>
//     <Text style={styles.buttonText}>
//       {src}
//     </Text>
//   </TouchableOpacity>
// );
// }

export class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      pressFunction: props.pressFunction
    }
  }
  render(): React.ReactNode {
    return (
      <TouchableOpacity onPress={this.state.pressFunction} style={styles.countBtn}>
        <Text style={styles.buttonText}>
          {this.state.title}
        </Text>
      </TouchableOpacity>
    );
  }
}