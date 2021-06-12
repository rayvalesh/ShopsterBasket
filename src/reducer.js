
export const initialState = {
  basket: [],
  products: [],
};

// export const getBasketTotal = (basket) =>
//   basket?.length;

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "ADD_TO_PRODUCTS":
      // const index_p = state.products.findIndex(
      //   (productItem) => productItem.id === action.id
      // );
      // console.log(action.id,index_p)
      // if (index_p >= 0) {
      //   let newProducts = [...state.products];
      //   console.log(newProducts,index_p,action.id)
      //   return {
      //     ...state,
      //     products: newProducts,
      //   };
      // }else{
        return {
          ...state,
          products: [...state.products, action.item],
        };
    
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(index, action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id:${action.id} as it is not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
