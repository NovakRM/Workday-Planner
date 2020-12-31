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
saveItems(workDay)

function buildSchedule(workDay){
    for (i=0; i<workDay.length; i++){
        //Populate workHours with hours of the day [DONE!]
        let container =  $("<div></div>").addClass("row")
        let hour =  $("<div></div>").addClass("hour col-2").text(workDay[i].time) // create a div for each hour, apply class hour, textcontent is pulled from time index 
        container.append(hour)// append to main container 

        //Populate scheduleItems with textareas [DONE!]
        let tasks = $("<textarea></textarea>")
        tasks.attr("class", "textbox col-8")
        tasks.attr("id", "foo" + workDay[i].key)
        tasks.attr("key", workDay[i].key)
        container.append(tasks)

        //Add Buttons [DONE]
        let buttons = $("<button></button>").addClass("fas fa-calendar-check fa-2x col-2")
        buttons.attr("id", "bar" + workDay[i].key)
        container.append(buttons)
        
        //Append all of the above to document [DONE]
        $(".SCHEDULE").append(container)

    }
}


//Set local storage [TESTING]
function saveItems (workDay){
    for (i=0; i<workDay.length; i++){ //looping thru workDay array
        $("#" + "bar" + workDay[i].key).on("click", function(){ //grabbing previously appended buttons
            // let userInput = $("#foo" + workDay[i].key + "")
            // localStorage.setItem("textbox" + workDay[i].key, userInput[0].value)
            console.log("bar")
        })
    }
}

//Local Storage items [TESTING]
// foo9.value = localStorage.getItem("foo9")
// foo10.value = localStorage.getItem("foo10")
// foo11.value = localStorage.getItem("foo11")
// foo12.value = localStorage.getItem("foo12")
// foo13.value = localStorage.getItem("foo13")
// foo14.value = localStorage.getItem("foo14")
// foo15.value = localStorage.getItem("foo15")
// foo16.value = localStorage.getItem("foo16")
// foo17.value = localStorage.getItem("foo17")


//if/else statement comparing the time listed in .hour div to the current local time [DONE]
function setColor(){
    for (let i=0; i<9; i++){
        let newColor = $(".textbox")[i].attributes[2].value // pointing to key value assigned to each textarea
        if(parseInt(newColor) === parseInt(dayjs().format('H'))){
            $(".textbox")[i].className="textbox col-8 present"
        }else if(parseInt(newColor) < parseInt(dayjs().format('H'))){
            $(".textbox")[i].className="textbox col-8 past"
        } else {$(".textbox")[i].className="textbox col-8 future" }
    }
}

