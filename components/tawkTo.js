import React from 'react';
import { WebView } from 'react-native-webview';

const TawkTo = () => {
  return (
    <WebView
      source={{ uri: 'https://tawk.to/chat/641ebe1d31ebfa0fe7f4963c/1gsc1d9q3 ' }}
      style={{ flex: 1 }}
    />
  );
};

export default TawkTo;
