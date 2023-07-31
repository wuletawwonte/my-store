import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["menu"];

  toggle() {
    // this.element.classList.toggle("hidden");
    this.menuTarget.classList.toggle("hidden");
  }
}
