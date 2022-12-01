import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation';

export default class NavigationExample extends NavigationMixin(LightningElement) {


    openSFDCFacts(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes : {
                url : 'https://sfdcfacts.com'
            }
        });
    }

    openAccountHome(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Account',
                actionName : 'home'
            }
        });
    }

    createNewContact(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'new'
            }
        });
    }

    opportunityListView(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Opportunity',
                actionName : 'list'
            }
        });
    }

    openCaseRecord(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes : {
                recordId : '5001y000005JFOtAAO',
                objectApiName : 'Case',
                actionName : 'view'
            }
        });
    }

    meetingRoomTab(){
        this[NavigationMixin.Navigate]({
            type : 'standard__navItemPage',
            attributes : {
              apiName : 'Meeting_Room'
            }
        });
    }

    previewAFile(){
        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
              pageName : 'filePreview'
            },
            state : {
                recordIds : '5001y000005JFOtAAO',
                selectedRecordId : '5001y000005JFOtAAO'
            }
        });
    }
}