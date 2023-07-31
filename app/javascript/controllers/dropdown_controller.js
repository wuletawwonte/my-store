import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["menu", "toggle"];

  connect() {
    document.addEventListener('click', (event) => {
      if (!this.menuTarget.contains(event.target) && !this.toggleTarget.contains(event.target)) {
        this.menuTarget.classList.add('hidden');
      }
    });
  }

  toggle() {
    this.menuTarget.classList.toggle("hidden");
  }
}
