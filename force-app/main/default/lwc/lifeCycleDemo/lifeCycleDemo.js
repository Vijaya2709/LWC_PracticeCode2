import { LightningElement } from 'lwc';

export default class LifeCycleDemo extends LightningElement {
    constructor(){
        super();
        console.log(`Constructor is called`);

    }

    connectedCallback(){
        console.log(`Connected callback is called`);
    }

    renderedCallback(){
        console.log(`Rendered callback is called`);
    }

    disconnectedCallback(){
        console.log(`Disconnected callback is called`);
    }
}