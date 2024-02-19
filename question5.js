// 5. (2p) Shoppingcart med priser 
// Skriv klart funktionen calculateTotalPrice som tar en array med produkter och returnerar det totala priset
// Använd reduce .

const cameraGear = [
    { name: "Camera", brand: "Canon", model: "EOS_70D", price: 100 },
    { name: "Camera", brand: "Nikon", model: "D3400", price: 120 },
    { name: "Camera", brand: "GoPro", model: "Hero_4", price: 80 },
    { name: "Drone", brand: "DJI", model: "Phantom", price: 50 },
    { name: "Drone", brand: "GoPro", model: "Karma", price: 200 },
  ];
  
  function calculateTotalPrice(shoppingCart) {
    // Din kod här
    const totalPrice = shoppingCart.reduce((accumulator, item) => {
      return accumulator += item.price;
    }, 0)
    return totalPrice
  }

      /* 
    let array = [];
    const totalPrice = 0;
      const prices = shoppingCart.map(item => {
       console.log("arr", array)
        array.push(item.price)
      }).reduce((acc, curr) => {
        return acc += curr;
      }, 0) */

/*     let array = [];
    const totalPrice = 0;
      const prices = shoppingCart.map(item => {
       console.log("arr", array)
        array.push(item.price)
      }).reduce((acc, curr) => {
        return acc += curr;
      }, 0)
 */  

 
  

  // Test
  console.log(calculateTotalPrice(cameraGear)); // Ska logga: 550
  