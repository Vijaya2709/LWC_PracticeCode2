import { LightningElement, api, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoomChild extends LightningElement {
     @api meetingRoomInfo;

    //Public Boolean Properties
    @api showRoomInfo = false;

    @wire(CurrentPageReference) pageReference;

    //Dispatch Event
    tileClickHandler(){
        const tileClicked = new CustomEvent('tileclick', {detail : this.meetingRoomInfo, bubbles: true});
        this.dispatchEvent(tileClicked);

        //publish-subscribe 
        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
    }
}