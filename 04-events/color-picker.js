class ColorPickerElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        let style = document.createElement('style');
        style.innerHTML = `button { width: 32px; height: 32px; border: 1px solid #fff; border-radius: 16px; cursor: pointer;  } button:focus { outline: none; }`;
        this.shadowRoot.appendChild(style);
        let div = document.createElement('div');
        this.drawPicker(div, this);
        this.shadowRoot.appendChild(div);
    }

    drawPicker(div, pickerElement) {
        let colors = {
            'A': "#50c236",
            'B': "#16856f", 
            'C': "#efc306", 
            'D': "#025594", 
            'E': "#b51f8f", 
            'F': "#ff6c53", 
            'G': "#a85642", 
            'H': "#969696"
        };
        
        window.addEventListener("keypress", function(event) {
            if (event.target != pickerElement) return;
            var key = event.key.toUpperCase();
            if (key in colors) {
                var color = colors[key];
                const outerEvent = new CustomEvent('pick-color', {
                    bubbles: true,
                    detail: { color: color }
                });
                pickerElement.dispatchEvent(outerEvent);
            }
        });

        Object.entries(colors).forEach(pair => {
            const [key, color] = pair;
            let button = document.createElement('button');
            button.style.backgroundColor = color;
            button.innerHTML = key;
            button.addEventListener('click', function() {
                const outerEvent = new CustomEvent('pick-color', {
                    bubbles: true,
                    detail: { color: color }
                });
                pickerElement.dispatchEvent(outerEvent);
            });
            div.appendChild(button);
        });         
    }
}

window.customElements.define('color-picker', ColorPickerElement);
