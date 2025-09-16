const select: HTMLSelectElement|null = document.querySelector('#fruitSelect');
const addBtn: HTMLButtonElement|null = document.querySelector('#addBtn');
const listContainer: HTMLUListElement|null = document.querySelector('#fruitList');

addBtn?.addEventListener('click', getValue);
function getValue():void{
    let fruit: string|undefined = select?.value;
    let item: HTMLLIElement = document.createElement('li');
    if(fruit){
        item.textContent = fruit;
    }
    listContainer?.insertAdjacentElement("beforeend", item);
}