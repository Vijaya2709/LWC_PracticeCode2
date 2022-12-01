import { createElement } from "lwc"
import MeetingRooms from 'c/meetingRooms'

describe("c-meetingRooms", ()=>{

        afterEach( ()=> {
            while(document.body.firstChild){
                document.body.removeChild(document.body.firstChild)
            }
        })
    it("Count of Meeting Room should be 9", ()=>{
        const meetingRooms = createElement("c-meetingRooms",{is:MeetingRooms});
        document.body.appendChild(meetingRooms);

        const allMeetingRoomsComponents = meetingRooms.shadowRoot.querySelectorAll("c-meeting-room-child");

        expect(allMeetingRoomsComponents.length).toBe(9);
    });

    it("Title should be Meeting Rooms", ()=>{
        const meetingRooms = createElement("c-meetingRooms",{is:MeetingRooms});
        document.body.appendChild(meetingRooms);

        const lightningCard = meetingRooms.shadowRoot.querySelector('Lightning-card');
        expect(lightningCard.title).toBe("Meeting Rooms");
    })
});