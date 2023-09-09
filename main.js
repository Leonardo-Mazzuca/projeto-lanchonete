// import { drawItemInCart } from "./src/cart";
import { renderizeProductsInCart, updateTotalCartPrice } from "./src/cart";
import { createElementInHTML, updateMainProductByClick } from "./src/createElements";
import { openCart } from "./src/menuCart";
import { responsiveNavBarEdit } from "./src/mobile";
import { slideMenu } from "./src/slideMenu";
import { cartFunctions} from "./src/utilities";


// ============ menu slider ============
slideMenu();

// ============ open cart menu ============
openCart();

// ============ create carts item in bottom ============
createElementInHTML();

// ============ uptdate item by clicking ============
updateMainProductByClick();

// ============ renderize products ============
renderizeProductsInCart();

// ============ update cart price ============
updateTotalCartPrice();

// ============ cart ============
cartFunctions();

responsiveNavBarEdit();

