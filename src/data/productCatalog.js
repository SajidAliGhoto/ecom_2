import Img1 from "../assets/shirt/shirt.png";
import Img2 from "../assets/shirt/shirt2.png";
import Img3 from "../assets/shirt/shirt3.png";

import Img4 from "../assets/women/women.png";
import Img5 from "../assets/women/women2.jpg";
import Img6 from "../assets/women/women3.jpg";
import Img7 from "../assets/women/women4.jpg";

import kids1 from "../assets/kids/kids1.webp";
import kids2 from "../assets/kids/kids2.webp";
import kids3 from "../assets/kids/kids3.webp";
import kids4 from "../assets/kids/kids4.webp";
import electronics from "../assets/electronics/electronics.jpg";
import women from "../assets/women/women.png";
import men from "../assets/men/men.jpg";

import reviewer1 from "../assets/reviewer/reviewer1.jpg";
import reviewer2 from "../assets/reviewer/reviewer2.jpg";
import reviewer3 from "../assets/reviewer/reviewer3.jpg";
import reviewer4 from "../assets/reviewer/reviewer4.jpg";
import reviewer5 from "../assets/reviewer/reviewer5.jpg";
import reviewer6 from "../assets/reviewer/reviewer6.jpg";
import reviewer7 from "../assets/reviewer/reviewer7.jpg";
import reviewer8 from "../assets/reviewer/reviewer8.jpg";
import reviewer9 from "../assets/reviewer/reviewer9.jpg";

// TopProducts and RatedProductsData (DO NOT MODIFY)
import TopProducts from "./Products";
import RatedProductsData from "./TopProducts";

// ProductCatalog transformed to TopProduct structure
const catalogProducts = [
  // Womens Wear
  {
    id: 101,
    img: women,
    title: "Women Ethnic",
    price: 2000,
    discountPercentage: 10,
    rating: 4.2,
    color: "White",
    description: "Trendy ethnic wear for special occasions.",
    aosDelay: "0",
    reviews: [],
  },
  {
    id: 102,
    img: women,
    title: "Women Western",
    price: 1500,
    discountPercentage: 12,
    rating: 4.0,
    color: "Red",
    description: "Stylish western outfit for casual and formal looks.",
    aosDelay: "200",
    reviews: [],
  },
  {
    id: 103,
    img: women,
    title: "Goggles",
    price: 5000,
    discountPercentage: 25,
    rating: 4.3,
    color: "Brown",
    description: "Trendy goggles for outdoor fashion.",
    aosDelay: "400",
    reviews: [],
  },
  {
    id: 104,
    img: women,
    title: "Printed T-Shirt",
    price: 1000,
    discountPercentage: 15,
    rating: 4.1,
    color: "Yellow",
    description: "Vibrant printed t-shirt for daily wear.",
    aosDelay: "600",
    reviews: [],
  },

  // Kids Wear
  {
    id: 105,
    img: kids1,
    title: "Kids Casual Shirt",
    price: 800,
    discountPercentage: 10,
    rating: 4.2,
    color: "Sky Blue",
    description: "Comfortable and casual shirt for kids.",
    aosDelay: "0",
    reviews: [],
  },
  {
    id: 106,
    img: kids2,
    title: "Kids Party Dress",
    price: 1200,
    discountPercentage: 18,
    rating: 4.6,
    color: "Pink",
    description: "Cute party dress for kids.",
    aosDelay: "200",
    reviews: [],
  },
  {
    id: 107,
    img: kids3,
    title: "Kids Jeans",
    price: 1000,
    discountPercentage: 15,
    rating: 4.3,
    color: "Blue",
    description: "Durable jeans for playful kids.",
    aosDelay: "400",
    reviews: [],
  },
  {
    id: 108,
    img: kids4,
    title: "Kids Hoodie",
    price: 1100,
    discountPercentage: 20,
    rating: 4.5,
    color: "Grey",
    description: "Warm hoodie to keep kids cozy.",
    aosDelay: "600",
    reviews: [],
  },

  // Mens Wear
  {
    id: 109,
    img: men,
    title: "Men Formal Shirt",
    price: 1800,
    discountPercentage: 15,
    rating: 4.0,
    color: "White",
    description: "Smart formal shirt for professional wear.",
    aosDelay: "0",
    reviews: [],
  },
  {
    id: 110,
    img: men,
    title: "Men Casual T-Shirt",
    price: 900,
    discountPercentage: 20,
    rating: 4.2,
    color: "Green",
    description: "Casual t-shirt for everyday use.",
    aosDelay: "200",
    reviews: [],
  },
  {
    id: 111,
    img: men,
    title: "Men Jeans",
    price: 2000,
    discountPercentage: 10,
    rating: 4.3,
    color: "Denim",
    description: "Classic jeans with modern comfort.",
    aosDelay: "400",
    reviews: [],
  },
  {
    id: 112,
    img: men,
    title: "Men Jacket",
    price: 2500,
    discountPercentage: 22,
    rating: 4.4,
    color: "Black",
    description: "Warm and stylish jacket for winter.",
    aosDelay: "600",
    reviews: [],
  },

  // Electronics
  {
    id: 113,
    img: electronics,
    title: "Smartphone",
    price: 15000,
    discountPercentage: 10,
    rating: 4.6,
    color: "Black",
    description: "Latest generation smartphone with smart features.",
    aosDelay: "0",
    reviews: [],
  },
  {
    id: 114,
    img: electronics,
    title: "Wireless Earbuds",
    price: 3000,
    discountPercentage: 25,
    rating: 4.5,
    color: "White",
    description: "Crystal clear sound and wireless freedom.",
    aosDelay: "200",
    reviews: [],
  },
  {
    id: 115,
    img: electronics,
    title: "Laptop",
    price: 45000,
    discountPercentage: 18,
    rating: 4.7,
    color: "Silver",
    description: "High-performance laptop for work and play.",
    aosDelay: "400",
    reviews: [],
  },
  {
    id: 116,
    img: electronics,
    title: "Smart Watch",
    price: 5000,
    discountPercentage: 20,
    rating: 4.4,
    color: "Grey",
    description: "Track your fitness with smart features.",
    aosDelay: "600",
    reviews: [],
  },
];

// Combine all into one searchable list
const AllProducts = [...TopProducts, ...RatedProductsData, ...catalogProducts];

export default AllProducts;
