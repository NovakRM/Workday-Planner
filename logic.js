// ============== time ============== 
//can't decide whether this+date should be global or not, other stuff might read them?

let currentTime = $(".TIME")
setInterval(function(){
    currentTime.empty()
    currentTime.append(dayjs().format("h:mm:ss a"))
},1000)

//============== date ============== 

let currentDate = $(".DATE")
setInterval(function(){
    currentDate.empty()
    currentDate.append(dayjs().format("ddd . MM . DD"))
},1000)

//============== schedule ==============  

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


appendTasks(workDay)
buildSchedule(workDay) //parsing in workDay is what specifies the array for text to be pulled from

//Populate workHours with hours of the day [DONE!]
function buildSchedule(workDay){
    for (i=0; i<workDay.length; i++){
        let hour =  $("<div></div>").addClass("hour").text(workDay[i].time) // create a div for each hour, apply class hour, textcontent is pulled from time index 
        $(".HOURS").append(hour)// append to HOURS div
    }
}

//if/else statement comparing the time listed in .hour div to the current local time
    //IF current time === hour in div, set task ID to PRESENT - or would the be an else?
    //IF current time > hour in div, set task ID to PAST
    //IF current time < hour in div, set task ID to FUTURE
//

//Populate scheduleItems with textareas [DONE!]
function appendTasks(){
    for (i=0; i<workDay.length; i++){
        let tasks = $("<textarea></textarea>")
        tasks.attr("id", "textarea")
        $(".tasks").append(tasks)
    }
}

