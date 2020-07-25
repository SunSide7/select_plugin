const getTemplate = (data = [], placeholder) => {
    const text = placeholder || 'Placeholder по умолчанию'

    const items = data.map(item => {
        return `
            <li class="select__item" data-type="item" data-id="${item.id}">${item.value}</li>
        `;
    })

    return `
        <div class="select__input" data-type="input">
            <span>${text}</span>
            <i class="fa fa-chevron-down" data-type="arrow"></i>
        </div>
        <div class="select__dropdown">
            <ul class="select__list">
                ${items.join('')}
            </ul>
        </div>
    `;
}

export class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.options = options;

        this.#render();
        this.#setup();
    }

    #render() {
        const { placeholder, data } = this.options;
        this.$el.classList.add('select');
        this.$el.innerHTML = getTemplate(data, placeholder);
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this);

        this.$el.addEventListener('click', event => this.clickHandler(event));
        this.$arrow = this.$el.querySelector('[data-type="arrow"]');
    }
    
    clickHandler(event) {
        const {type} = event.target.dataset;

        if (type === 'input') {
            this.toggle();
        } else if (type === 'item') {
            const id = event.target.dataset.id;
            console.log('id:', id);
        }
    }

    get isOpen() {
        return this.$el.classList.contains('open');
    }

    toggle() {
        this.isOpen ? this.close() : this.open()
    }
    
    open() {
        this.$arrow.classList.remove('fa-chevron-down');
        this.$arrow.classList.add('fa-chevron-up');
        this.$el.classList.add('open');
    }
    
    close() {
        this.$arrow.classList.add('fa-chevron-down');
        this.$arrow.classList.remove('fa-chevron-up');
        this.$el.classList.remove('open');
        
    }

    
    destroy() {        
        this.$el.removeEventListener('click', () => this.clickHandler)
    }
}