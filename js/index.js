import { Select } from './select'

const select = new Select('#select', {
    placeholder: 'Выбери элемент',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Angular'},
        {id: '3', value: 'Vue'},
        {id: '4', value: 'React Native'},
        {id: '5', value: 'Next'},
        {id: '6', value: 'Nest'},
        {id: '7', value: 'Flutter'},
    ]
})

window.s = select;