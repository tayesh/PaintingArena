export const getCartEstates = () => {
    const CartList = localStorage.getItem("Cart-list");
    if (CartList) {
        return JSON.parse(CartList);
    }
    return [];
}

export const setCardEstates = id => {
    const CartList = getCartEstates();
    const exist = CartList.find(cardId => cardId === id);

    if (!exist) {
        CartList.push(id);
        localStorage.setItem("Cart-list", JSON.stringify(CartList));
    }
}
