import { LightningElement, wire } from 'lwc';
import getCarTypes from '@salesforce/apex/CarSearchFormController.getCarTypes';
import { showToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class CarSearchForm extends NavigationMixin(LightningElement) {

    carTypes;
    @wire(getCarTypes) 
    wiredCarType({data, error}){
        if(data){
            this.carTypes = [{value:'',label:'All Types'}];
             data.forEach(element => {
                const carType = {};
                carType.label = element.Name;
                carType.value = element.Id;
                this.carTypes.push(carType);
             });
        }
        else if(error){
            this.showToast('ERROR',error.body.message,'error')
        }
    }

    handleCarTypeChange(event){
            const carTypeId = event.detail.value;
            const carTypeSelectionEvent = new CustomEvent('cartypeselect', {detail: carTypeId});
            this.dispatchEvent(carTypeSelectionEvent);
    }

    createNewCarType(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Car_Type__c',
                actionName : 'new'
            }
        })

    }

    showToast(title,message,variant){
        const evt = new showToastEvent({
            title : title,
            message : message,
            variant : variant
        });

        this.dispatchEvent(evt);
    }
}