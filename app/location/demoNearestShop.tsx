export interface Shop {
    name: string;
    lat: number;
    long: number;
  }
  
  // Sample shops data
  const shops: Shop[] = [
    { name: "Shop A", lat: 34.0522, long: -118.2437 },
    { name: "Shop B", lat: 36.1699, long: -115.1398 },
    { name: "Shop C", lat: 40.7128, long: -74.0060 }
  ];
  
  // Haversine formula to calculate the distance between two points on the Earth's surface
  function getDistance(lat1: number, long1: number, lat2: number, long2: number): number {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLong = (long2 - long1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }
  
  // Function to find the nearest shop
  export function findNearestShop(userLat: number, userLong: number, shops: Shop[]): Shop | null {
    let nearestShop: Shop | null = null;
    let minDistance = Infinity;
  
    for (const shop of shops) {
      const distance = getDistance(userLat, userLong, shop.lat, shop.long);
      if (distance < minDistance) {
        minDistance = distance;
        nearestShop = shop;
      }
    }
  
    return nearestShop;
  }
  
  // Function to get the user's location
  export function getUserLocation(): Promise<GeolocationCoordinates> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => resolve(position.coords),
          error => reject(error),
          { enableHighAccuracy: true } // Request high accuracy if available
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  }
  
  // Get user's location and find the nearest shop
  getUserLocation()
    .then(coords => {
        console.log(coords);
        
      const nearestShop = findNearestShop(coords.latitude, coords.longitude, shops);
      if (nearestShop) {
        console.log(`The nearest shop is ${nearestShop.name}`);
      } else {
        console.log("No shops found.");
      }
    })
    .catch(error => {
      console.error("Error getting user location:", error);
    });
  