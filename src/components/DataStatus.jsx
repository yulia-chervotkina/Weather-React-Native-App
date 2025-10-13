import Text from '@/components/Text/PlainText.jsx';

const DataStatus = ({ loading, error, data }) => {
    if (loading) return <Text>Loading ...</Text>;
    if (error) return <Text>Error: {error}</Text>;
    if (!data) return <Text>Couldn't fetch data</Text>;
    return null;
};

export default DataStatus;
