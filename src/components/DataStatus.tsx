import { StyleProp, TextStyle } from 'react-native';

import Text from '@/components/Text/PlainText.tsx';

type DataStatusProps<T> = {
    loading: boolean;
    error: Error | null;
    data: T | null;
    children: (data: T) => React.ReactNode;
    style?: StyleProp<TextStyle>;
};

const DataStatus = <T,>({
    loading,
    error,
    data,
    children,
}: DataStatusProps<T>): React.ReactNode => {
    if (loading) return <Text>Loading ...</Text>;
    if (error) return <Text>Error: {error?.message}</Text>;
    if (!data) return <Text>Couldn't fetch data</Text>;
    return children(data);
};

export default DataStatus;
