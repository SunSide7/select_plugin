const getTemplate = () => {
    return `
        <div class="select__input">
            <span>Text</span>
            <i class="fa fa-chevron-down"></i>
        </div>
        <div class="select__dropdown">
            <ul class="select__list">
                <li class="select__item">12345</li>
                <li class="select__item">12345</li>
                <li class="select__item">12345</li>
                <li class="select__item">12345</li>
                <li class="select__item">12345</li>
                <li class="select__item">12345</li>
                <li class="select__item">12345</li>
            </ul>
        </div>
    `;
}

export class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);

        this.#render();
        this.#setup();
    }

    #render() {
        this.$el.classList.add('select');
        this.$el.innerHTML = getTemplate()
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this);

        this.$el.addEventListener('click', event => this.clickHandler(event))
    }
    
    clickHandler(event) {
        console.log(event)
    }
    
    open() {
        this.$el.classList.add('open');
    }
    
    close() {
        this.$el.classList.remove('open');
        
    }

    
    destroy() {        
        this.$el.removeEventListener('click', () => this.clickHandler)
    }
}