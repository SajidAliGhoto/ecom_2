
import Img1 from "../assets/shirt/shirt.png";
import Img2 from "../assets/shirt/shirt2.png";
import Img3 from "../assets/shirt/shirt3.png";

import reviewer7 from "../assets/reviewer/reviewer7.jpg"
import reviewer8 from "../assets/reviewer/reviewer8.jpg"
import reviewer9 from "../assets/reviewer/reviewer9.jpg"


  
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    price: 1000,
    discountPercentage: 10,
    rating: 4.0,
    color: "Blue",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aosDelay: "0",
    reviews: [
      {
        reviewerName: "John",
        comment: "Nice and comfy, good for everyday wear.",
        img: reviewer7
      },
    ],
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    price: 1500,
    discountPercentage: 15,
    rating: 4.3,
    color: "White",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aosDelay: "200",
    reviews: [
      {
        reviewerName: "Sophia",
        comment: "The print is beautiful, but fabric could be better.",
        img: reviewer8
      },
    ],
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    price: 2000,
    discountPercentage: 20,
    rating: 4.6,
    color: "Green",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aosDelay: "400",
    reviews: [
      {
        reviewerName: "Olivia",
        comment: "Very elegant, a great addition to my wardrobe.",
        img: reviewer9
      },
    ],
  },
];

export default ProductsData;
