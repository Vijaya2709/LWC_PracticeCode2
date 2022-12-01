({
    subscribeEvent : function(component, event, helper) {
            const pubSubModule = component.find("pubSubModule");

            const callbackFunction = $A.getcallback(function(payload){
                component.set('v.selectedMeetingRoom', payload)
            });

            pubSubModule.registerListener('pubsubtileclick', callbackFunction);
    }
})
