export class Spotlight {
  spotlightArray: HTMLElement[] = [];
  spotlightBox: HTMLElement | null = null;
  spotlightDescription: HTMLElement | null = null;

  constructor() {
    this.createSpotlightBox();
    this.createSpotlightDescription();
    this.gatherSpotlights();
  }

  createSpotlightBox() {
    this.spotlightBox = document.createElement("div");
    this.spotlightBox.classList.add("spotlight-box");
    document.body.appendChild(this.spotlightBox);
  }

  createSpotlightDescription() {
    this.spotlightDescription = document.createElement("div");
    this.spotlightDescription.classList.add("spotlight-description");
    this.spotlightBox?.appendChild(this.spotlightDescription);
  }

  gatherSpotlights() {
    this.spotlightArray = Array.from(
      document.querySelectorAll("[data-spotlight]")
    );
  }

  static start() {
    
  }
}
