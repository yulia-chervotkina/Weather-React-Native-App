import Text from '@components/Text/PlainText.jsx';

const DataStatus = ({ loading, error }) => {
    if (loading) return <Text>Loading ...</Text>;
    if (error) return <Text>Error: {error}</Text>;
    return null;
};

export default DataStatus;
