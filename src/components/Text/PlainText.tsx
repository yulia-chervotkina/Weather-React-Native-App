import { FC, PropsWithChildren } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

import styles from './styles';

type PlainTextProps = {
    style?: StyleProp<TextStyle>;
};

const PlainText: FC<PropsWithChildren<PlainTextProps>> = props => {
    return (
        <Text style={[styles.plainText, props.style]}>{props.children}</Text>
    );
};

export default PlainText;
