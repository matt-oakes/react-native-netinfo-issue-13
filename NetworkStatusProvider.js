import NetInfo from '@react-native-community/netinfo';
import React from 'react';
import {Text} from 'react-native';

export default class NetworkStatusProvider extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        status: "Unknown"
      }
    }
    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            isConnected => {
              this.setState({ status: isConnected ? "Connected" : "Not connected" })
            }
        );
    }

    render() {
        return <Text>{this.state.status}</Text>
    }
}