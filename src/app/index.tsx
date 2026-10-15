import { type Coin, getData } from '@/api/api';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default function Index() {
  const [data, setData] = useState<Coin[]>([]);
  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.coinInfo}>
              <Text style={styles.coinName}>{item.name}</Text>
              <Text style={styles.coinSymbol}>{item.symbol.toUpperCase()}</Text>
            </View>
            <Text style={styles.coinPrice}>
              ${item.current_price.toLocaleString()}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f19',
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#151c2c',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e293b',
  },
  coinInfo: {
    flexDirection: 'column',
  },
  coinName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  coinSymbol: {
    color: '#64748b',
    fontSize: 13,
    marginTop: 2,
  },
  coinPrice: {
    color: '#38bdf8',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
