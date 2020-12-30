// ============== time ============== 
//can't decide whether this+date should be global or not, other stuff might read them?

let currentTime = $(".TIME")
setInterval(function(){
    currentTime.empty()
    currentTime.append(dayjs().format("h:mm:ss a"))
},1000)

//============== color changer ==============

setInterval(function(){
    setColor()
},1000) //checking to see if it needs to change colors every second

//============== date ============== 

let currentDate = $(".DATE")
setInterval(function(){
    currentDate.empty()
    currentDate.append(dayjs().format("ddd . MM . DD"))
},1000)

//============== schedule ==============  

let workDay = [
    {time:"9am", key:9}, //H is called in dayjs, our comparisons will be if KEY is > (H)
    {time:"10am", key:10},
    {time:"11am", key:11},
    {time:"12pm", key:12},
    {time:"1pm", key:13},
    {time:"2pm", key:14},
    {time:"3pm", key:15},
    {time:"4pm", key:16},
    {time:"5pm", key:17},
]


buildSchedule(workDay) //parsing in workDay is what specifies the array for text to be pulled from


function buildSchedule(workDay){
    //Populate workHours with hours of the day [DONE!]
    for (i=0; i<workDay.length; i++){
        let container =  $("<div></div>").addClass("row")
        let hour =  $("<div></div>").addClass("hour col-2").text(workDay[i].time) // create a div for each hour, apply class hour, textcontent is pulled from time index 
        container.append(hour)// append to HOURS 

        //Populate scheduleItems with textareas [DONE!]
        let tasks = $("<textarea></textarea>")
        tasks.attr("class", "input col-8")
        tasks.attr("key", workDay[i].key)
        container.append(tasks)

        let buttons = $("<button></button>").addClass("fas fa-calendar-check fa-2x col-2")
        container.append(buttons)
        $(".SCHEDULE").append(container)
    }
}


//if/else statement comparing the time listed in .hour div to the current local time [DONE]
function setColor(){
    for (let i=0; i<9; i++){
        let newColor = $(".input")[i].attributes[1].value // pointing to key value assigned to each textarea
        if(parseInt(newColor) === parseInt(dayjs().format('H'))){
            $(".input")[i].id="present"
        }else if(parseInt(newColor) < parseInt(dayjs().format('H'))){
            $(".input")[i].id="past"
        } else {$(".input")[i].id="future" }
    }
}

