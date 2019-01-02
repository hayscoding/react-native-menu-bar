import React from 'react'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class MenuButton extends React.Component {
	render() {
		return(
			<Ionicons
				name="md-menu"
				color="#000000"
				size={32}
				style={styles.menuIcon}
				onPress={() => this.props.navigation.toggleDrawer()}
			/>
		)
	}
}

const styles = StyleSheet.create({
	menuIcon: {
		zIndex: 9,
		position: 'absolute',
		top: 40,
		left: 20,
	}
})