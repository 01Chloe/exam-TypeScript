import {Fruit} from "./class/Fruit";
import {displayCount} from './utils';

const select: HTMLSelectElement|null = document.querySelector('#fruitSelect');
const addBtn: HTMLButtonElement|null = document.querySelector('#addBtn');
const listContainer: HTMLUListElement|null = document.querySelector('#fruitList');
const counter: HTMLParagraphElement|null = document.querySelector('#counter');

let count: number = 0;
let fruits: Array<string|undefined> = [];

addBtn?.addEventListener('click', displayFruit);
function displayFruit():void{
    let fruitValue: string|undefined = select?.value;
    if(!fruits.includes(fruitValue)){
        fruits.push(fruitValue);

        let item: HTMLLIElement = document.createElement('li');
        if(fruitValue){
            item.textContent = fruitValue;
        }
        listContainer?.insertAdjacentElement("beforeend", item);

        count++;
        displayCount(counter, count);

        let fruit: Fruit = new Fruit(fruitValue);
        console.log(fruit.describe());

        let deleteBtn: HTMLButtonElement = document.createElement('button');
        deleteBtn.textContent = "X";
        item.insertAdjacentElement("beforeend", deleteBtn);

        deleteBtn.addEventListener("click", () => deleteItem(item, fruitValue));
    }
}

function deleteItem(item: HTMLLIElement, fruitValue: string|undefined):void{
    let index: number = fruits.indexOf(fruitValue);
    fruits.splice(index, 1);
    item.remove();
    count--;
    displayCount(counter, count);
}