import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ListView,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';

import { Icon } from 'react-native-elements'

import TabNavigator from 'react-native-tab-navigator';
import Video from './video';
import Chat from './chat';

import { Provider } from 'react-redux';
import configureStore from './configureStore'


console.disableYellowBox = true
const stores = configureStore()



class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {
			selectedTab: 'video',
		}
    }

    onSelectTab(tab) {
        this.setState({ selectedTab: tab });
    }

    render() {
        return (
        <Provider store={stores}>
        <View style={styles.container} >
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'video'}
                    title="Video"
                    renderIcon={() => 
                      <Icon
                        name='projection-screen'
                        type='foundation'
                        iconStyle={{opacity: 0.5}}
                        color='grey'/> }
                    renderSelectedIcon={() => 
                      <Icon
                        name='projection-screen'
                         type='foundation'
                        color='black'/> }
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'video' })} >
                    <Video />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'chat'}
                    title="Chat"
                    renderIcon={() => 
                      <Icon
                        name='chat'
                        type='entypo'
                        iconStyle={{opacity: 0.5}}
                        color='grey'/> }
                    renderSelectedIcon={() => 
                      <Icon
                        name='chat'
                        type='entypo'
                        color='black'/> }
                    renderBadge={() => null}
                    onPress={() => this.setState({ selectedTab: 'chat' })}>
                    <Chat />
                </TabNavigator.Item>
            </TabNavigator>
            </View>
          </Provider>
        );
    }
};

let styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default Main
