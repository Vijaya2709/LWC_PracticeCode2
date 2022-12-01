import { LightningElement, wire} from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount';
import { ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountManagerApex extends LightningElement {

    // @wire(getAllAccounts)
    // accounts;
    numberOfAccounts;
    accounts;

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

    numberOfAccountChangeHandler(event){
        this.numberOfAccounts = event.target.value;
    }

    getAccounts(){
        getAllAccounts({numberOfAccounts : this.numberOfAccounts}).then(response => {
            this.accounts = response;
            const toastEvent = new ShowToastEvent({
                title : 'Accounts Loaded',
                message : `${this.numberOfAccounts} has been loaded`,
                variant : 'success'
            });
                this.dispatchEvent(toastEvent);

        }).catch(error => {
            console.log(`Error in retrieving the accounts : ${error.body.message}`);
            const toastEvent = new ShowToastEvent({
                title : 'Error Loading the Accounts',
                message : error.body.message,
                variant : 'error'
            });
                this.dispatchEvent(toastEvent)
        })
    }
}