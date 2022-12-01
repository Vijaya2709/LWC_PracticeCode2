import { LightningElement, wire, track} from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';

const fieldArray = ['Account.Name', 'Account.Phone', 'Account.Website'];
export default class AccountManager extends LightningElement {
    accountName;
    accountPhone;
    accountWebsite;
    @track recordId;

    @wire(getRecord, {recordId : '$recordId', fields : fieldArray})
    accountRecord;

    accountNameChangeHandler(event){
        this.accountName = event.target.value;
    }

    accountPhoneChangeHandler(event){
        this.accountPhone = event.target.value;
    }

    accountWebsiteChangeHandler(event){
        this.accountWebsite = event.target.value;
    }

    createAccount(){
        const fields = {
            'Name' : this.accountName,
            'Phone' : this.accountPhone,
            'Website' : this.accountWebsite
        };

        const recordInput = {
            apiName : 'Account',
            fields
        };
    
        createRecord(recordInput).then( response =>{
            console.log(`Accound has been created successfully : ${response.id}`);
            this.recordId = response.id;
        }).catch( error => {
            console.log(`Account not created : ${error.body.message}`);
        })
    }

        get retAccountName(){
            if(this.accountRecord.data){
                return this.accountRecord.data.fields.Name.value;
            }
            return undefined;
        }

        get retAccountPhone(){
            if(this.accountRecord.data){
                return this.accountRecord.data.fields.Phone.value;
            }
            return undefined;
        }

        get retAccountWebsite(){
            if(this.accountRecord.data){
                return this.accountRecord.data.fields.Website.value;
            }
            return undefined;
        }


}