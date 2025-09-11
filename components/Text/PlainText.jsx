import React from "react";
import { Text } from 'react-native';
import styles from './styles.js';

const PlainText = (props) => {
    return(
        <Text style={[styles.plainText, props.style]}>{props.children}</Text>
    )
}

export default PlainText;