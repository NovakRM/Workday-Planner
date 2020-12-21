//time -- can't decide whether this+date should be global or not, other stuff might read them?
let currentTime = $(".TIME")
setInterval(function(){
    currentTime.empty()
    currentTime.append(dayjs().format("h:mm:ss a"))
},1000)

//date
let currentDate = $(".DATE")
setInterval(function(){
    currentDate.empty()
    currentDate.append(dayjs().format("ddd . MM . DD"))
},1000)

//schedule 
let schedule = $(".SCHEDULE") //container content will be populated to
//container for hours

let workDay = [
    {time:"9am"},
    {time:"10am"},
    {time:"11am"},
    {time:"12pm"},
    {time:"1pm"},
    {time:"2pm"},
    {time:"3pm"},
    {time:"4pm"},
    {time:"5pm"},
]

//Populate workHours with hours of the day

//Populate scheduleItems with textareas
//can i set this to spawn in exactly 9? 1 per hour
//test just getting one spawned in before we mess with other stuff

appendTasks()
buildSchedule(workDay) //this is what specifies the array for text to be pulled from

function buildSchedule(anon){
    for (i=0; i<anon.length; i++){
        let hour =  $("<div></div>").addClass("hour").text(anon[i].time) // create a div for each hour, apply class hour, textcontent is pulled from time index 
        //hour.attr("id", anon[i].time)
        $(".HOURS").append(hour)// append to HOURS div
    }
}

function appendTasks(){
    let tasks = $("<textarea></textarea>")
    tasks.attr("id", "textarea")
    $(".tasks").append(tasks)
}

//part of the initialization of the document, move higher into a function that calls all these guys?
// appendTasks(workDay) 

