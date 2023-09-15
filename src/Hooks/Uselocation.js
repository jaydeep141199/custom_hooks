import { useEffect, useState } from 'react';

const Uselocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        setError('Geolocation is not supported by your browser');
      } else {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          error => {
            setError(`Error: ${error.message}`);
          }
        );
      }
    };

    getLocation();
  }, []);

  return { latitude, longitude, error };
};

export default Uselocation;
