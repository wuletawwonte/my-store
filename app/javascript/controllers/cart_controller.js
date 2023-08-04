import { Controller } from "stimulus";

export default class extends Controller {
  hide() {
    this.element.classList.add("hidden");
  }

  show() {    
    this.element.classList.remove("hidden");
  }
}
