import { LightningElement, track } from 'lwc';

export default class CarSearch extends LightningElement {

     @track carTypeId = '';

    carTypeSelecthandler(event){
        this.carTypeId = event.detail;
    }
}