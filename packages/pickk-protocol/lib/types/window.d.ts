declare global {
  interface Window {
    isRNWebView?: boolean;

    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}

export {};
