export const transformProducts = (sortedProducts, sort, byStock, byFastDelivery, byRating, searchQuery) => {
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      );
    }
  
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
  
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
  
    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
    }
  
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
  
    return sortedProducts;
  };
  