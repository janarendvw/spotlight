export class Spotlight {
  spotlightArray: HTMLElement[] = [];
  spotlightBox: HTMLElement | null = null;
  spotlightDescription: HTMLElement | null = null;
  currentSpotlightIndex: number = 0;
  currentElement: HTMLElement | null = null;

  // Initialize the spotlight box and description elements
  constructor() {
    this.createSpotlightBox();
    this.createSpotlightDescription();
    this.gatherSpotlights();
  }

  // Create the spotlight box element and append it to the body
  createSpotlightBox() {
    this.spotlightBox = document.createElement("div");
    this.spotlightBox.classList.add("spotlight-box");
    document.body.appendChild(this.spotlightBox);
    this.injectSpotlightBoxStyles();
  }

  // Create the spotlight description element and append it to the spotlight box
  createSpotlightDescription() {
    this.spotlightDescription = document.createElement("div");
    this.spotlightBox && this.spotlightBox.appendChild(this.spotlightDescription);
    this.createNextButton();

    this.spotlightDescription.style.setProperty("position", "absolute");
    this.spotlightDescription.style.setProperty("padding", "3rem");
    this.spotlightDescription.style.setProperty("background-color", "rgba(0, 0, 0, 0.8)");
    this.spotlightDescription.style.top = "100%";
    
  }

  createNextButton() {
    const nextButton = document.createElement("button");
    nextButton.innerText = "Next";
    nextButton.addEventListener("click", () => {
      this.currentSpotlightIndex++;
      this.startSpotlight();
    });
    this.spotlightDescription && this.spotlightDescription.appendChild(nextButton);
  }

  // Gather all elements with the data-spotlight attribute
  gatherSpotlights() {
    this.spotlightArray = Array.from(
      document.querySelectorAll("[data-spotlight]")
    );
  }

  destroySpotlightBox() {
    this.spotlightBox && this.spotlightBox.remove();
  }

  listAllSpotlights() {
    console.log(this.spotlightArray);
  }

  injectSpotlightBoxStyles() {
    this.spotlightBox?.style.setProperty(
      "box-shadow",
      "0px 0px 50px 0px rgba(255, 255, 200, 0.8)"
    );
    this.spotlightBox?.style.setProperty("padding", "5px")
    this.spotlightBox?.style.setProperty("border-radius", "6px");
    this.spotlightBox?.style.setProperty("display", "none");
    this.spotlightBox?.style.setProperty("position", "absolute");
    this.spotlightBox?.style.setProperty("top", "0");
    this.spotlightBox?.style.setProperty("left", "0");
    this.spotlightBox?.style.setProperty("width", "100%");
    this.spotlightBox?.style.setProperty("height", "100%");
    this.spotlightBox?.style.setProperty("z-index", "999999");
  }

  startSpotlight() {
    if (this.spotlightBox) {
      this.spotlightBox.style.setProperty("display", "block");
      console.log(this.spotlightArray[this.currentSpotlightIndex])
        this.currentElement = this.spotlightArray[this.currentSpotlightIndex] || null;
        if (this.currentElement) {
            const spotlightBoxRect = this.spotlightBox.getBoundingClientRect();
            const currentElementRect = this.currentElement.getBoundingClientRect();
            const currentElementTop = currentElementRect.top - spotlightBoxRect.top;
            const currentElementLeft = currentElementRect.left - spotlightBoxRect.left;
            const currentElementWidth = currentElementRect.width;
            const currentElementHeight = currentElementRect.height;
            this.spotlightBox.style.setProperty("display", "block");
            this.spotlightBox.style.setProperty("top", `${currentElementTop - 3}px`);
            this.spotlightBox.style.setProperty("left", `${currentElementLeft -3}px`);
            this.spotlightBox.style.setProperty("width", `${currentElementWidth}px`);
            this.spotlightBox.style.setProperty("height", `${currentElementHeight}px`);
        }
        else {
          console.log("Spotlight box not found");
        }
    }
    else {
      console.log("Spotlight box not found");
    }
  }

}
