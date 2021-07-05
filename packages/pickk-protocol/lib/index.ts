declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}

export const WebViewMessages = {
  back: 'back', // back: 뒤로가기 버튼을 눌렀을 때 전송되는 메시지
};

type WebViewMessageKeyType = keyof typeof WebViewMessages;
type WebViewMessageType = typeof WebViewMessages[WebViewMessageKeyType];

export const postMessage = (message: WebViewMessageType) => {
  window.ReactNativeWebView.postMessage(message);
};

export const postMessageJavascript = (message: WebViewMessageType) => {
  return `window.ReactNativeWebView.postMessage(${message})`;
};
