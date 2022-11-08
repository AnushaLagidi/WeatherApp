import { View, Text } from 'react-native'
import React from 'react';
import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
const API_KEY = '49cc8c821cd2aff9af04c9f98c36eb74';

const App = () => {
  const [position, setPosition] = useState<any>({});
  const [data, setData] = useState({});

  useEffect(() => {
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(pos => {
      const { coords } = pos;
      const { latitude, longitude } = coords;
      setPosition({ latitude, longitude });
      fetchDataFromApi(latitude, longitude);
    });

  }, []);
  //console.log(position.latitude, position.longitude);
  const fetchDataFromApi = (latitude, longitude) => {
    if (latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data)
        setData(data)
      })
    }

  }


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App