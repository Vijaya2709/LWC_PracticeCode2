import { LightningElement, track} from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track previousResultList = [];
    @track showPreviousResults = false;
    firstNumber;
    secondNumber;

    numberChangeHandler(event){
        const inputNumber = event.target.name;
        if(inputNumber === 'firstNumber'){
            this.firstNumber = event.target.value;
        }
        else if(inputNumber === 'secondNumber'){
            this.secondNumber = event.target.value;
        }

    }

    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN}+${secondN} is ${firstN+secondN}`;
        this.previousResultList.push(this.currentResult);
    }

    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN}-${secondN} is ${firstN-secondN}`;
        this.previousResultList.push(this.currentResult);
    }

    multiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `Result of ${firstN}*${secondN} is ${firstN*secondN}`;
        this.previousResultList.push(this.currentResult);
    }

    divideHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN}/${secondN} is ${firstN/secondN}`;
        this.previousResultList.push(this.currentResult);
    }
    showPreviousResultToggle(event){
        this.showPreviousResults = event.target.checked;
    }
}