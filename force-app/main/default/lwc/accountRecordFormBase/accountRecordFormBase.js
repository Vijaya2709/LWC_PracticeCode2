import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHN_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class AccountRecordFormBase extends LightningElement {
    @api recordId;
    @api objectApiName;
    fieldsArray = [NAME_FIELD, PHN_FIELD, WEBSITE_FIELD];


    handleSuccess(event){
        this.recordId = event.detail.id;
    }
}