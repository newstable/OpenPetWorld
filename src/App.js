import {Provider} from 'react-redux';
import store from "./store";
import Routes from './router';
import {UseWalletProvider } from 'use-wallet'
import './assets/style/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react'
import ApplicationProvider from "./contexts"
import Splashscreen from './pages/splashscreen';
import LoadingScreen from "react-loading-screen"
import logoImg from './assets/img/logo.png';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])
  
  return (
      <LoadingScreen
        loading={loading}
        bgColor='#00ccff'
        spinnerColor='#9ee5f8'
        textColor='#ffffff'
        logoSrc={logoImg}
        text='Loading Screen'
      > 
        <UseWalletProvider
        chainId={31337}
        connectors={{
          // This is how connectors get configured
          portis: { dAppId: 'my-dapp-id-123-xyz' },
        }}
        > 
          <Provider store={store}>
            <ApplicationProvider>
                <Routes /> 
            </ ApplicationProvider>
          </Provider>
        </UseWalletProvider>
        
      </LoadingScreen>
    
  );
}
export default App;
