import { Controller } from "stimulus";

export default class extends Controller {
  showCart() {
    window.dispatchEvent(new CustomEvent("cart-show"))
  }
}
