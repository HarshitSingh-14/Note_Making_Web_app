// functions and 

let myToDo = {     // object  -> dictionsary 
    day: 'Monday',
    meetings: 0,
    meetDone: 0
}

let addMeeting= function(toDo, meet=0){
    toDo.meetings = toDo.meetings + meet
}

let meetingDone = function (toDo, meet = 0) {
    toDo.meetDone= toDo.meetings - meet
}

let resetDay = function(toDo){
    toDo.meetings = 0
    toDo.meetDone=0
}

let getsummary = function (toDo) {
    let meetLeft = toDo.meetings - toDo.meetDone
    return `meet Left is ${meetLeft}`;

}


addMeeting(myToDo, 4)
addMeeting(myToDo, 3)
meetingDone(myToDo, 1)
console.log(myToDo);
console.log(getsummary(myToDo));