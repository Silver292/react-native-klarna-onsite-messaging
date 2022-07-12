import * as React from 'react';

import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import {
  KlarnaOnsiteMessagingView,
  KlarnaOSMEnvironment,
  KlarnaOSMRegion,
  KlarnaOSMViewError,
} from 'react-native-klarna-onsite-messaging';
import { useState } from 'react';
import Config from 'react-native-config';

export const CLIENT_ID = Config.CLIENT_ID;
export const PLACEMENT_KEY = Config.PLACEMENT_KEY;

export default function App() {
  const [error, setError] = useState<KlarnaOSMViewError>();
  const [locale, setLocale] = useState('en-GB');

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 30 }}>Klarna On-Site Messaging Demo</Text>
      <KlarnaOnsiteMessagingView
        style={styles.box}
        clientId={CLIENT_ID}
        placementKey={PLACEMENT_KEY}
        locale={locale}
        environment={KlarnaOSMEnvironment.playground}
        region={KlarnaOSMRegion.EU}
        purchaseAmount={2000}
        onOSMViewError={setError}
      />

      <Text style={{ marginTop: 30 }}>Klarna On-Site Messaging Demo</Text>
      <Button
        title={`Change locale to: ${locale === 'en-GB' ? 'de-DE' : 'en-GB'}`}
        onPress={() => setLocale((l) => (l === 'en-GB' ? 'de-DE' : 'en-GB'))}
      />
      <Text style={{ marginTop: 30 }}>Klarna On-Site Messaging Demo</Text>
      <Text style={{ marginTop: 20, textAlign: 'center' }}>
        {JSON.stringify(error)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  box: {
    width: '100%',
    height: Platform.OS === 'android' ? 85 : undefined,
  },
});
