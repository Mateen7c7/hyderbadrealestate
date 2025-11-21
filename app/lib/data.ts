export const properties = [
  {
    id: 1,
    title: "Charming Victorian Terrace",
    description:
      "A beautifully preserved two-story Victorian house with original fireplaces and high ceilings. Perfect for a family.",
    images: ["1.jpeg", "5.jpeg"],
    location: "Fitzroy, Melbourne",
    price: 950000,
    size: "1800 sq ft",
  },
  {
    id: 2,
    title: "Modern Downtown Condo",
    description:
      "Sleek, open-concept studio apartment on the 15th floor with stunning city views and access to a rooftop gym.",
    images: ["12.jpeg"],
    location: "Midtown, New York City",
    price: 450000,
    size: "650 sq ft",
  },
  {
    id: 3,
    title: "Rustic Lakefront Cabin",
    description:
      "Secluded log cabin nestled by a private lake. Ideal for weekend getaways, fishing, and nature lovers.",
    images: ["3.jpeg", "8.jpeg"],
    location: "Muskoka, Ontario",
    price: 320000,
    size: "1200 sq ft",
  },
  {
    id: 4,
    title: "Luxury Beach Villa",
    description:
      "Exclusive five-bedroom villa with a private infinity pool and direct access to a white-sand beach.",
    images: ["6.jpeg", "1.jpeg"],
    location: "Malibu, California",
    price: 5800000,
    size: "4500 sq ft",
  },
  {
    id: 5,
    title: "Cozy Suburban Bungalow",
    description:
      "A three-bedroom, single-story home in a quiet, family-friendly neighborhood with a large backyard.",
    images: ["10.jpeg"],
    location: "Oak Park, Chicago",
    price: 285000,
    size: "1500 sq ft",
  },
  {
    id: 6,
    title: "Historic Loft Apartment",
    description:
      "Industrial-style loft in a renovated factory building. Features exposed brick, huge windows, and concrete floors.",
    images: ["2.jpeg", "7.jpeg"],
    location: "Shoreditch, London",
    price: 750000,
    size: "1100 sq ft",
  },
  {
    id: 7,
    title: "Eco-Friendly Tiny Home",
    description:
      "Sustainable, minimalist tiny home with solar panels and composting toilet. Low-cost living with a small footprint.",
    images: ["11.jpeg"],
    location: "Portland, Oregon",
    price: 150000,
    size: "300 sq ft",
  },
  {
    id: 8,
    title: "Mediterranean Style Estate",
    description:
      "Spacious estate with terracotta roof tiles, stucco walls, and a beautiful courtyard garden.",
    images: ["4.jpeg", "9.jpeg"],
    location: "Scottsdale, Arizona",
    price: 1850000,
    size: "6000 sq ft",
  },
  {
    id: 9,
    title: "High-Rise Penthouse",
    description:
      "Top-floor unit with 360-degree panoramic views, private elevator access, and a chef's kitchen.",
    images: ["12.jpeg", "2.jpeg"],
    location: "Downtown, Chicago",
    price: 3500000,
    size: "3200 sq ft",
  },
  {
    id: 10,
    title: "Ski-In/Ski-Out Chalet",
    description:
      "A cozy wooden chalet located right on the slope, featuring a stone fireplace and hot tub.",
    images: ["5.jpeg"],
    location: "Aspen, Colorado",
    price: 2100000,
    size: "2400 sq ft",
  },
  {
    id: 11,
    title: "Urban Townhouse",
    description:
      "Three-story modern townhouse in a desirable neighborhood with a small garage and roof deck.",
    images: ["8.jpeg"],
    location: "Capitol Hill, Seattle",
    price: 675000,
    size: "1700 sq ft",
  },
  {
    id: 12,
    title: "Farmhouse with Acreage",
    description:
      "Classic American farmhouse on 10 acres of usable land, perfect for equestrian pursuits or farming.",
    images: ["3.jpeg", "10.jpeg"],
    location: "Upstate New York",
    price: 490000,
    size: "2000 sq ft",
  },
  {
    id: 13,
    title: "Canal-Side Apartment",
    description:
      "Historic apartment with large windows overlooking a beautiful canal, walking distance to cafes.",
    images: ["6.jpeg"],
    location: "Jordaan, Amsterdam",
    price: 550000,
    size: "800 sq ft",
  },
  {
    id: 14,
    title: "Brand New Starter Home",
    description:
      "Recently constructed two-bedroom home with modern finishes and energy-efficient appliances.",
    images: ["9.jpeg"],
    location: "Phoenix Suburbs, Arizona",
    price: 220000,
    size: "1050 sq ft",
  },
  {
    id: 15,
    title: "Tropical Treehouse",
    description:
      "Unique vacation rental property built high in the canopy, offering stunning jungle views.",
    images: ["1.jpeg", "4.jpeg"],
    location: "Uvita, Costa Rica",
    price: 180000,
    size: "500 sq ft",
  },
  {
    id: 16,
    title: "Executive Ranch Home",
    description:
      "Sprawling single-story ranch with a finished basement, multiple garages, and mature landscaping.",
    images: ["7.jpeg"],
    location: "Dallas, Texas",
    price: 899000,
    size: "3800 sq ft",
  },
  {
    id: 17,
    title: "Student Studio Pod",
    description:
      "Compact, fully furnished studio designed for students, close to the university campus.",
    images: ["11.jpeg"],
    location: "Boston, Massachusetts",
    price: 195000,
    size: "350 sq ft",
  },
  {
    id: 18,
    title: "Desert Modern Retreat",
    description:
      "Architecturally significant home blending into the desert landscape with large glass walls and stone.",
    images: ["3.jpeg"],
    location: "Palm Springs, California",
    price: 1200000,
    size: "2600 sq ft",
  },
  {
    id: 19,
    title: "French Country Manor",
    description:
      "Elegant stone manor featuring a slate roof, gourmet kitchen, and formal dining rooms.",
    images: ["5.jpeg", "8.jpeg"],
    location: "The Hamptons, New York",
    price: 4200000,
    size: "7500 sq ft",
  },
  {
    id: 20,
    title: "Renovated Heritage Rowhouse",
    description:
      "Beautifully restored historic rowhouse maintaining period details while adding modern amenities.",
    images: ["1.jpeg"],
    location: "Georgetown, Washington D.C.",
    price: 1150000,
    size: "2100 sq ft",
  },
];
export const categories = [
  {
    title: "Commercial Properties",
    id: [3, 7, 9, 5],
  },
  {
    title: "Rental Income Properties",
    id: [7,9,20,18],
  },
  {
    title: "Development Lands",
    id: [7,12,1,15,4],
  },
  {
    title: "Agriculture Lands",
    id: [8,19,13,6],
  },
  {
    title: "Bank Seized Properties",
    id: [11,14,16,17],
  },
];
