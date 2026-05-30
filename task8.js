//Fake Store API Tasks
//API Link
let apiLink = "https://fakestoreapi.com/products";


//Task 1: Print All Products
//Fetch all products and print them.
fetch(apiLink)
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
        console.log("Title:", product.title);
        console.log("Price:", product.price);
    });
})


//Task 2: Print Only Product Titles
fetch(apiLink)
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
        console.log(product.title);
    });
})


//Task 3: Print Total Products
fetch(apiLink)
.then(response => response.json())
.then(products => {
    console.log("Total Products :", products.length);
})


//Task 4: Print All Categories
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let categories = products.map(product => product.category);
    let uniqueCategories = [...new Set(categories)];
    uniqueCategories.forEach(category => {
        console.log(category);
    });
})


//Task 5: Print Products Above $50
fetch(apiLink)
  .then(response => response.json())
  .then(products => {
    let above50 = products.filter(product => product.price > 50);
    above50.forEach(product => {
        console.log(product.title + " - " + product.price);
    });
})


//Task 6: Print Products Below $50
fetch(apiLink)
  .then(response => response.json())
  .then(products => {
    let below50 = products.filter(product => product.price < 50);
    below50.forEach(product => {
        console.log(product.title + " - " + product.price);
    });
})


//Task 7: Find First Product Above $100
fetch(apiLink)
  .then(response => response.json())
  .then(products => {
    let firstProductAbove100 = products.find(product => product.price > 100);
    console.log(firstProductAbove100);
  })


//Task 8: Search Product
let searchText = "shirt";
fetch(apiLink)
  .then(response => response.json())
  .then(products => {
    let searchedProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(searchedProducts);
  })


//Task 9: Count Electronics Products
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let electronicsProducts = products.filter(product =>
        product.category === "electronics"
    );
    console.log("Electronics Count :", electronicsProducts.length);
})

//Task 10: Print Highest Price Product
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let sortedProducts = products.sort((a, b) => b.price - a.price);
    let highestPriceProduct = sortedProducts[0];
    console.log(highestPriceProduct);
})


//Task 11: Print Lowest Price Product
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let sortedProducts = products.sort((a, b) => a.price - b.price);
    let lowestPriceProduct = sortedProducts[0];
    console.log(lowestPriceProduct);
})


//Task 12: Calculate Total Price of All Products
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let totalPrice = products.reduce((total,product) => {
        return total + product.price;
    }, 0);
    console.log("Total Price :", totalPrice.toFixed(2));
})


//Task 13: Calculate Average Product Price
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let totalPrice = products.reduce((total,product) => {
        return total + product.price;
    }, 0);
    let averagePrice = totalPrice / products.length;
    console.log("Average Price :", averagePrice.toFixed(2));
})


//Task 14: Print Product With Highest Rating
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let highestRatedProduct = products.sort((a, b) => {
        return b.rating.rate - a.rating.rate;
    })[0];
    console.log("Title:", highestRatedProduct.title);
    console.log("Rating:", highestRatedProduct.rating.rate);
})


//Task 15: Print Product With Lowest Rating
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let lowestRatedProduct = products.sort((a, b) => {
        return a.rating.rate - b.rating.rate;
    })[0];
    console.log("Title:", lowestRatedProduct.title);
    console.log("Rating:", lowestRatedProduct.rating.rate);
})


//Task 16: Category Wise Product Count
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let categoryCount = products.reduce((acc,product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {});
    console.log(categoryCount);
})


//Task 17: Create Discounted Products
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let discountedProducts = products.map(product => {
        return {
            title : product.title,
            oldPrice : product.price,
            newPrice : (product.price *0.9).toFixed(2) 
        }
    });
    console.log(discountedProducts);
})


//Task 18: Sort Products Low To High
fetch(apiLink)
  .then(response => response.json())
  .then(products => {
    let lowToHigh = [...products].sort((a,b) => 
    a.price - b.price 
);
console.log(lowToHigh);
  })


//Task 19: Sort Products High To Low
fetch(apiLink)
  .then(response => response.json())
  .then(products => {
    let highToLow = [...products].sort((a,b) => 
    b.price - a.price 
);
console.log(highToLow);
  })


//Task 20: Check Any Product Above $500
fetch(apiLink)
  .then(response => response.json())
  .then(products => {
    let productAbove500 = products.some(product => product.price > 500);
    console.log(productAbove500);
  })


//Task 21: Check All Products Above Rating 3
fetch(apiLink)
  .then(response => response.json())
  .then(products => {
    let ratingAbove3 = products.every(product => product.rating.rate > 3);
    console.log(ratingAbove3);
  })


//Task 22: Print Top 5 Costliest Products
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let top5Costliest = products.sort((a, b) => b.price - a.price).slice(0, 5);
    top5Costliest.forEach(product => {
        console.log(product.title);
    });
})


//Task 23: Print Top 5 Rated Products
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let top5RatedProducts = products.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 5);
    top5RatedProducts.forEach(product => {
        console.log(product.title + " - Rating: " + product.rating.rate);
    });
})


//Task 24: Group Products By Category
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let groupedProducts = products.reduce((group, product) => {
        if(group[product.category]) {
            group[product.category].push(product);
        } else {
            group[product.category] = [product];
        }
        return group;
    }, {});
    console.log(groupedProducts);
})


//Task 25: Convert Product Prices To INR
fetch(apiLink)
.then(response => response.json())
.then(products => {
    products.forEach(product => {
        console.log("Title :", product.title);
    console.log("Price : ₹" + (product.price * 85).toFixed(2));
});
})


//Task 26: Amazon Product Filter
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let amazonProducts = products.filter(product => {
      return (
        product.price < 500 &&
        product.rating.rate > 4 &&
        product.category === "electronics"
      );
    });
    console.log(amazonProducts);
})


//Task 27: Best Seller Product
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let bestSeller = products.reduce((best, current) => {
        return current.rating.rate > best.rating.rate ? current : best;
    });
    console.log("Best Seller :", bestSeller.title);
})


//Task 28: Product Analytics Dashboard
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let totalProducts = products.length;
    let categories = products.map(product => product.category);
    let uniqueCategories = [...new Set(categories)];
    let totalCategories = uniqueCategories.length;
    let highestPriceProduct = products.reduce((highest,product) => {
        if (product.price > highest.price) {
            return product;
        } else {
            return highest;
        }
    });
    let lowestPriceProduct = products.reduce((lowest, product) => {
        if (product.price < lowest.price) {
            return product;
        } else {
            return lowest;
        }
    });
    let totalPrice = products.reduce((total, product) => {
        return total + product.price;
    }, 0);
    let averagePrice = totalPrice / totalProducts;
let bestRatedProduct = products.reduce((highest, product) => {
    if(product.rating.rate > highest.rating.rate) {
        return product;
    }else {
    return highest;
    }
});
console.log("Total Products :", totalProducts);
console.log("Total Categories :", totalCategories);
console.log("Highest Price Product :", highestPriceProduct.title);
console.log("Highest Price :", highestPriceProduct.price);
console.log("Lowest Price Product :", lowestPriceProduct.title);
console.log("Lowest Price :", lowestPriceProduct.price);
console.log("Average Price :", averagePrice.toFixed(2));
console.log("Best Rated Product :", bestRatedProduct.title);
console.log("Best Rating :", bestRatedProduct.rating.rate);
})


//Task 29: Inventory Report
fetch(apiLink)
.then(response => response.json())
.then(products => {
    let expensiveProducts = products.filter(product => product.price > 50);
    let affordableProducts = products.filter(product => product.price <= 50);
    let electronics = products.filter(product => 
        product.category === "electronics"
    );
    let jewellery = products.filter(product => 
        product.category === "jewelery"
    );
    let mensClothing = products.filter(product =>
        product.category === "men's clothing"
    );
    let womensClothing = products.filter(product =>
        product.category === "women's clothing"
    );
    console.log("Expensive Products :", expensiveProducts.length);
    console.log("Affordable Products :", affordableProducts.length);
    console.log("Electronics :", electronics.length);
    console.log("Jewellery: ", jewellery.length);
    console.log("Mens Clothing :", mensClothing.length);
    console.log("Womens Clothing:", womensClothing.length);
})


//Task 30: Complete Admin Dashboard (Interview Level)
fetch(apiLink)
  .then(response => response.json())
  .then(products => {

    let totalProducts = products.length;


    let categories = products.map(product => product.category);
    let uniqueCategories = [...new Set(categories)];
    let totalCategories = uniqueCategories.length;


    let totalPrice = products.reduce((total, product) => {
      return total + product.price;
    }, 0);

    let averagePrice = totalPrice / totalProducts;


    let highestPriceProduct = products.reduce((highest, product) => {
      if (product.price > highest.price) {
        return product;
      } else {
        return highest;
      }
    });


    let lowestPriceProduct = products.reduce((lowest, product) => {
      if (product.price < lowest.price) {
        return product;
      } else {
        return lowest;
      }
    });


    let bestRatedProduct = products.reduce((highest, product) => {
      if (product.rating.rate > highest.rating.rate) {
        return product;
      } else {
        return highest;
      }
    });


    let lowestRatedProduct = products.reduce((lowest, product) => {
      if (product.rating.rate < lowest.rating.rate) {
        return product;
      } else {
        return lowest;
      }
    });

    
    let productsAbove100 = products.filter(product => product.price > 100);

    let productsBelow50 = products.filter(product => product.price < 50);

    let categoryCounts = products.reduce((count, product) => {
      if (count[product.category]) {
        count[product.category]++;
      } else {
        count[product.category] = 1;
      }

      return count;
    }, {});

    console.log("TOTAL PRODUCTS :", totalProducts);
    console.log("TOTAL CATEGORIES :", totalCategories);
    console.log("TOTAL PRICE :", totalPrice.toFixed(2));
    console.log("AVERAGE PRICE :", averagePrice.toFixed(2));
    console.log("HIGHEST PRICE PRODUCT :", highestPriceProduct.title);
    console.log("HIGHEST PRICE :", highestPriceProduct.price);
    console.log("LOWEST PRICE PRODUCT :", lowestPriceProduct.title);
    console.log("LOWEST PRICE :", lowestPriceProduct.price);
    console.log("BEST RATED PRODUCT :", bestRatedProduct.title);
    console.log("BEST RATING :", bestRatedProduct.rating.rate);
    console.log("LOWEST RATED PRODUCT :", lowestRatedProduct.title);
    console.log("LOWEST RATING :", lowestRatedProduct.rating.rate);
    console.log("PRODUCTS ABOVE $100 :", productsAbove100.length);
    console.log("PRODUCTS BELOW $50 :", productsBelow50.length);
    console.log("CATEGORY COUNTS :");
    console.log(categoryCounts);

    console.log("==============================");
  })
  .catch(error => {
    console.log("Error:", error);
  })
 .finally(() => {
    console.log("API Execution Completed");
})
