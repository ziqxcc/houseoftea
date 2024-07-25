interface Shop {
  name: string;
  lat: number;
  long: number;
  address: string;
  phone: string;
//   location: string;
}

// Sample shops data
export const SHOPS = [
  {
    zone: "Abu Dhabi",
    Outlets: [
      {
        name: "JAMIYAH",
        address: "Near KFC Baniyas ,Abu Dhabi",
        phone: "971565083980",
        lat: 24.2877488,
        long: 54.640228,
      },
      {
        name: "Baladiya Market",
        address: "Behind Lulu Hypermarket, Abu Dhabi",
        phone: "971565083981",
        lat: 24.297312,
        long: 54.636742,
      },
    ],
  },
  {
    zone: "Al Ain",
    Outlets: [
      {
        name: "Al hili",
        address: "Al Ain, Abu Dhabi",
        phone: "971549941663",
        lat: 24.2657917,
        long: 55.7713236,
      },
      {
        name: "Al Aamerah",
        address: "al yahar, Al Ain",
        phone: "971549941660",
        lat: 24.2228207,
        long: 55.5502659,
      },
      {
        name: "Al Ashrij",
        address: "Al ain",
        phone: "971561992082",
        lat: 24.1988261,
        long: 55.6423973,
      },
      {
        name: "ADNOC Al Faqqa",
        address: "Dubai-Al Ain Road",
        phone: "971545661018",
        lat: 24.6974491,
        long: 55.6313495,
      },
      {
        name: "Adnoc Service Station",
        address: "Remah - 947 Al Ain Rd - Al Khaznah - Abu Dhabi",
        phone: "971504608918",
        lat: 24.1793344,
        long: 55.1812197,
      },
    ],
  },
  {
    zone: "Sharjah",
    Outlets: [
      {
        name: "Al Jazzat",
        address: "Al Riqa Suburb - Sharjah",
        phone: "971561991716",
        lat: 25.3711194,
        long: 55.4279724,
      },
      {
        name: "Nasma Square",
        address: "Al Suyoh Suburb - Al Riqaibah - Sharjah",
        phone: "971561991856",
        lat: 25.2415802,
        long: 55.5911415,
      },
    ],
  },
  {
    zone: "Dubai",
    Outlets: [
      {
        name: "ENOC Oud Metha",
        address: "Abu Dhabi-Al Ain Rd, Dubai",
        phone: "971563691058",
        lat: 25.2197062,
        long: 55.3136145,
      },
    ],
  },
];

// Haversine formula to calculate the distance between two points on the Earth's surface
function getDistance(
  lat1: number,
  long1: number,
  lat2: number,
  long2: number
): number {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLong = (long2 - long1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

// Function to find the nearest shop
export function findNearestShop(
  userLat: number,
  userLong: number,
  shops: Shop[]
): Shop | null {
  let nearestShop: Shop | null = null;
  let minDistance = Infinity;

  for (const shop of SHOPS.map((item:any)=>item.Outlets.map((item:any)=> {return item}))) {
    const distance = getDistance(userLat, userLong, shop.lat, shop.long);
    if (distance < minDistance) {
      minDistance = distance;
      nearestShop = shop;
    }
  }

  return nearestShop;
}

// Function to get the user's location
function getUserLocation(): Promise<GeolocationCoordinates> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position.coords),
        (error) => reject(error),
        { enableHighAccuracy: true } // Request high accuracy if available
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}

// Flatten the nested shops data
const flattenedShops:Shop[]  = SHOPS.flatMap((zone) =>
  zone.Outlets.map((outlet) => ({
    name: outlet.name,
    lat: outlet.lat,
    long: outlet.long,
    address:outlet.address,
    phone:outlet.phone
  }))
);

// Get user's location and find the nearest shop
getUserLocation()
  .then((coords) => {
    const nearestShop = findNearestShop(
        25.2197062,
        55.3136145,
      flattenedShops
    );
    if (nearestShop) {
      console.log(`The nearest shop is ${nearestShop.name}`);
    } else {
      console.log("No shops found.");
    }
  })
  .catch((error) => {
    console.error("Error getting user location:", error);
  });
