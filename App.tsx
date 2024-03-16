import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/Navigations/TabNavigation';
import SplashScreen from './src/pages/SplashScreen';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  useEffect(() => {
    // Simulate a delay for the splash screen (you can use your actual logic here)
    setTimeout(() => {
      setIsSplashVisible(false);
    }, 5000); // adjust the duration as needed
  }, []);

  return (
    // <SafeAreaView
    //   style={{
    //     display: 'flex',
    //     flex: 1,
    //     height: Dimensions.get('window').height,
    //     backgroundColor: '#F2F2F2',
    //   }}>
    //   <Layout>
    //     <Home />
    //   </Layout>
    // </SafeAreaView>
    isSplashVisible ? (
      <SplashScreen />
    ) : (
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    )
  );
}

export default App;
