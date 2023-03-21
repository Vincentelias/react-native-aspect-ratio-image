import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { AspectRatioImage } from 'react-native-aspect-ratio-image';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  return (
    <View style={styles.container}>
      <AspectRatioImage
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
        }}
      />

      <AspectRatioImage source={require('../assets/icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
