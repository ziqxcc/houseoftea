export const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              long: position.coords.longitude
            });
          },
          (error) => reject(error)
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };
  


  export const calculateDistance = (lat1:any, lon1:any, lat2:any, lon2:any) => {
    const toRad = (x:any) => (x * Math.PI) / 180;
  
    const R = 6371; // Radius of Earth in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };
  



  export const findNearestCafe = async (cafes:any) => {
    try {
      const userLocation:any = await getUserLocation();
  
      let nearestCafe = null;
      let minDistance = Infinity;
  
      cafes.forEach((zone:any) => {
        zone.Outlets.forEach((cafe:any) => {
          const distance = calculateDistance(
            userLocation.lat,
            userLocation.long,
            cafe.lat,
            cafe.long
          );
  
          if (distance < minDistance) {
            nearestCafe = cafe;
            minDistance = distance;
          }
        });
      });
  
      return nearestCafe;
    } catch (error) {
      console.error('Error finding nearest café:', error);
    }
  };
  
  