import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {
    
    selectedMeetingRoom;

    meetingRoomsInfo = [
        {roomName : "A-01", roomCapacity : '12'},
        {roomName : "A-02", roomCapacity : '15'},
        {roomName : "A-03", roomCapacity : '12'},
        {roomName : "B-01", roomCapacity : '18'},
        {roomName : "B-02", roomCapacity : '20'},
        {roomName : "B-03", roomCapacity : '22'},
        {roomName : "C-01", roomCapacity : '10'},
        {roomName : "C-02", roomCapacity : '5'},
        {roomName : "C-03", roomCapacity : '9'},
    ];

    onTileSelectHandler(event){
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoom = meetingRoomInfo.roomName;
    }

    constructor(){
        super();
        this.template.addEventListener('tileclick',this.onTileSelectHandler.bind(this));
    }
}