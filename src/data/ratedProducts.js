import Img1 from "../assets/women/women.png";
import Img3 from "../assets/women/women3.jpg";
import Img2 from "../assets/women/women2.jpg";
import Img4 from "../assets/women/women4.jpg";

import reviewer1 from "../assets/reviewer/reviewer1.jpg";
import reviewer2 from "../assets/reviewer/reviewer2.jpg";
import reviewer3 from "../assets/reviewer/reviewer3.jpg";
import reviewer4 from "../assets/reviewer/reviewer4.jpg";
import reviewer5 from "../assets/reviewer/reviewer5.jpg";
import reviewer6 from "../assets/reviewer/reviewer6.jpg";

const RatedProductsData = [
  {
    id: 11,
    img: Img1,
    title: "Women Ethnic",
    price: 2000,
    discountPercentage: 10,
    rating: 5.0,
    color: "white",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aosDelay: "0",
    reviews: [
      {
        reviewerName: "Alice",
        comment: "Absolutely loved the fabric! Very comfortable.",
        img: reviewer1
      },
      {
        reviewerName: "Sophia",
        comment: "Great design and fits well. Worth the price.",
        img: reviewer2,
      },
    ],
  },
  {
    id: 22,
    img: Img2,
    title: "Women Western",
    price: 1500,
    discountPercentage: 12,
    rating: 4.5,
    color: "Red",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aosDelay: "200",
    reviews: [
      {
        reviewerName: "Emma",
        comment: "Stylish and trendy! Perfect for casual wear.",
        img: reviewer3
      },
    ],
  },
  {
    id: 33,
    img: Img3,
    title: "Goggles",
    price: 5000,
    discountPercentage: 25,
    rating: 4.7,
    color: "brown",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aosDelay: "400",
    reviews: [
      {
        reviewerName: "Olivia",
        comment: "Good quality, but a bit expensive for the features.",
        img: reviewer4
      },
    ],
  },
  {
    id: 44,
    img: Img4,
    title: "Printed T-Shirt",
    price: 1000,
    discountPercentage: 15,
    rating: 4.4,
    color: "Yellow",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aosDelay: "600",
    reviews: [
      {
        reviewerName: "Ava",
        comment: "Perfect for summer! Very breathable material.",
        img: reviewer5
      },
    ],
  },
  {
    id: 55,
    img: Img2,
    title: "Fashion T-Shirt",
    price: 1200,
    discountPercentage: 20,
    rating: 4.5,
    color: "Pink",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aosDelay: "800",
    reviews: [
      {
        reviewerName: "Grace",
        comment: "Great fit! The color is exactly as shown.",
        img: reviewer6
      },
    ],
  },
];

export default RatedProductsData;
