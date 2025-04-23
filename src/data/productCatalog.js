import kids1 from "../assets/kids/kids1.webp";
import kids2 from "../assets/kids/kids2.webp";
import kids3 from "../assets/kids/kids3.webp";
import kids4 from "../assets/kids/kids4.webp";
import electronics from "../assets/electronics/electronics.jpg";
import women from "../assets/women/women.png";
import men from "../assets/men/men.jpg";
const ProductCatalog = {
  womensWear: [
    {
      id: 1,
      title: "Women Ethnic",
      img: women,
      price: 2000,
      discountPercentage: 10
    },
    {
      id: 2,
      title: "Women Western",
      img: women,
      price: 1500,
      discountPercentage: 12
    },
    {
      id: 3,
      title: "Goggles",
      img: women,
      price: 5000,
      discountPercentage: 25
    },
    {
      id: 4,
      title: "Printed T-Shirt",
      img: women,
      price: 1000,
      discountPercentage: 15
    }
  ],
  kidsWear: [
    {
      id: 5,
      title: "Kids Casual Shirt",
      img: kids1,
      price: 800,
      discountPercentage: 10
    },
    {
      id: 6,
      title: "Kids Party Dress",
      img: kids2,
      price: 1200,
      discountPercentage: 18
    },
    {
      id: 7,
      title: "Kids Jeans",
      img: kids3,
      price: 1000,
      discountPercentage: 15
    },
    {
      id: 8,
      title: "Kids Hoodie",
      img: kids4,
      price: 1100,
      discountPercentage: 20
    }
  ],
  mensWear: [
    {
      id: 9,
      title: "Men Formal Shirt",
      img: men,
      price: 1800,
      discountPercentage: 15
    },
    {
      id: 10,
      title: "Men Casual T-Shirt",
      img: men,
      price: 900,
      discountPercentage: 20
    },
    {
      id: 11,
      title: "Men Jeans",
      img: men,
      price: 2000,
      discountPercentage: 10
    },
    {
      id: 12,
      title: "Men Jacket",
      img: men,
      price: 2500,
      discountPercentage: 22
    }
  ],
  electronics: [
    {
      id: 13,
      title: "Smartphone",
      img: electronics,
      price: 15000,
      discountPercentage: 10
    },
    {
      id: 14,
      title: "Wireless Earbuds",
      img: electronics,
      price: 3000,
      discountPercentage: 25
    },
    {
      id: 15,
      title: "Laptop",
      img: electronics,
      price: 45000,
      discountPercentage: 18
    },
    {
      id: 16,
      title: "Smart Watch",
      img: electronics,
      price: 5000,
      discountPercentage: 20
    }
  ]
};

  export default ProductCatalog;
  