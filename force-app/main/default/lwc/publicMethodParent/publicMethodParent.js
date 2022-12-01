import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    value;

    onInputChangeHandler(event){
        this.value = event.target.value;
    }


    checkboxSelectHandler(){
        const childComponent = this.template.querySelector('c-public-method-child');
        childComponent.selectCheckbox(this.value);
    }
}