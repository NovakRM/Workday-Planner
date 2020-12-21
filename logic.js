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
let workHours = $(".HOURS") //container for hours

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
//can i set this to spawn in exactly 8? 1 per hour
//test just getting one spawned in before we mess with other stuff
function appendTasks(){
    let tasks = $("<textarea>")
    tasks.attr("id", "textarea")
    $(".tasks").append("<textarea>")
}

//part of the initialization of the document, move higher into a function that calls all these guys?
appendTasks()