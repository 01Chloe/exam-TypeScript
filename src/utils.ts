export function displayCount(counter: HTMLParagraphElement|null, count: number): string{
    if(counter){
        return counter.textContent = `Total : ${count} fruit(s)`;
    }
    return "";
}