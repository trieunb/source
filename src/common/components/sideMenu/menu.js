import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './styles';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

class SideMenu extends Component<Props> {
    navigateToScreen = (route, obj) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render () {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home', {title: 'Home'})}>
                                Dashboard
                            </Text>
                          </View>
                    </View>
                    <View>
                        <Text style={styles.sectionHeadingStyle}>
                            User
                        </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Offtime', {title: 'Offtime search'})}>
                                Offtime search
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Flextime', {title: 'Flextime detail'})}>
                                Flextime detail
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Dayoff', {title: 'Dayoff detail'})}>
                                Dayoff detail
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Meeting', {title: 'Meeting room'})}>
                                Meeting room
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            <View style={styles.footerContainer}>
                <Text>This is my fixed footer</Text>
            </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
