({
    doInit : function(component, event, helper) {
        component.set("v.meetingRoomInfo", [
            {roomName : "A-01", roomCapacity : '12'},
            {roomName : "A-02", roomCapacity : '15'},
            {roomName : "A-03", roomCapacity : '12'},
            {roomName : "B-01", roomCapacity : '18'},
            {roomName : "B-02", roomCapacity : '20'},
            {roomName : "B-03", roomCapacity : '22'},
            {roomName : "C-01", roomCapacity : '10'},
            {roomName : "C-02", roomCapacity : '5'},
            {roomName : "C-03", roomCapacity : '9'},
        ]);
    },

    handleTileClick : function(component, event, helper){
        component.set("v.selectedMeetingRoom", event.getParam('roomName'));
    }
})
