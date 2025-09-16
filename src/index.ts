import {Fruit} from "./class/Fruit";

const select: HTMLSelectElement|null = document.querySelector('#fruitSelect');
const addBtn: HTMLButtonElement|null = document.querySelector('#addBtn');
const listContainer: HTMLUListElement|null = document.querySelector('#fruitList');
const counter: HTMLParagraphElement|null = document.querySelector('#counter');

let count: number = 0;

addBtn?.addEventListener('click', getValue);
function getValue():void{
    let fruitValue: string|undefined = select?.value;
    let item: HTMLLIElement = document.createElement('li');
    if(fruitValue){
        item.textContent = fruitValue;
    }
    listContainer?.insertAdjacentElement("beforeend", item);

    count++;
    if(counter){
       counter.textContent = `Total : ${count} fruit(s)`;
    }

    let fruit: Fruit = new Fruit(fruitValue);
    console.log(fruit.describe());
}