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
        name: "Women Ethnic",
        image: women,
        price: 2000,
        discountPercentage: 10
      },
      {
        id: 2,
        name: "Women Western",
        image: women,
        price: 1500,
        discountPercentage: 12
      },
      {
        id: 3,
        name: "Goggles",
        image: women,
        price: 5000,
        discountPercentage: 25
      },
      {
        id: 4,
        name: "Printed T-Shirt",
        image: women,
        price: 1000,
        discountPercentage: 15
      }
    ],
    kidsWear: [
      {
        id: 5,
        name: "Kids Casual Shirt",
        image: kids1,
        price: 800,
        discountPercentage: 10
      },
      {
        id: 6,
        name: "Kids Party Dress",
        image: kids2,
        price: 1200,
        discountPercentage: 18
      },
      {
        id: 7,
        name: "Kids Jeans",
        image: kids3,
        price: 1000,
        discountPercentage: 15
      },
      {
        id: 8,
        name: "Kids Hoodie",
        image: kids4,
        price: 1100,
        discountPercentage: 20
      }
    ],
    mensWear: [
      {
        id: 9,
        name: "Men Formal Shirt",
        image: men,
        price: 1800,
        discountPercentage: 15
      },
      {
        id: 10,
        name: "Men Casual T-Shirt",
        image: men,
        price: 900,
        discountPercentage: 20
      },
      {
        id: 11,
        name: "Men Jeans",
        image: men,
        price: 2000,
        discountPercentage: 10
      },
      {
        id: 12,
        name: "Men Jacket",
        image: men,
        price: 2500,
        discountPercentage: 22
      }
    ],
    electronics: [
      {
        id: 13,
        name: "Smartphone",
        image: electronics,
        price: 15000,
        discountPercentage: 10
      },
      {
        id: 14,
        name: "Wireless Earbuds",
        image: electronics,
        price: 3000,
        discountPercentage: 25
      },
      {
        id: 15,
        name: "Laptop",
        image: electronics,
        price: 45000,
        discountPercentage: 18
      },
      {
        id: 16,
        name: "Smart Watch",
        image: electronics,
        price: 5000,
        discountPercentage: 20
      }
    ]
  };
  
  export default ProductCatalog;
  