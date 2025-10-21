import Text from '@/components/Text/PlainText.tsx';

const DataStatus = ({ loading, error, data, children }) => {
    if (loading) return <Text>Loading ...</Text>;
    if (error) return <Text>Error: {error}</Text>;
    if (!data) return <Text>Couldn't fetch data</Text>;
    return children(data);
};

export default DataStatus;
