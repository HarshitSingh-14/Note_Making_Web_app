let myToDo = {
    day:'Monday',
    meetingDone: 0,
    meetings: 0,
        
        addMeeting: function (num) {   // function in object
            this.meetings = this.meetings + num
    },

        summary: function () {
            return `You have ${this.meetings} left`
        }

}
myToDo.addMeeting(5)
console.log(myToDo.summary());

