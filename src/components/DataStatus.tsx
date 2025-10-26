import { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import Text from '@/components/Text/PlainText.tsx';

type DataStatusProps = {
    loading: boolean;
    error?: Error | null;
    data: object;
    children: (data: object) => React.ReactNode;
    style: StyleProp<TextStyle>;
};

const DataStatus: FC<DataStatusProps> = ({
    loading,
    error,
    data,
    children,
}): React.ReactNode => {
    if (loading) return <Text>Loading ...</Text>;
    if (error)
        return (
            <Text>
                Error: {error?.message}
            </Text>
        );
    if (!data) return <Text>Couldn't fetch data</Text>;
    return children(data);
};

export default DataStatus;
