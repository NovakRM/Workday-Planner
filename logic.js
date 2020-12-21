//call out variables for stuff that will be called throughout the document
let schedule = $(".SCHEDULE-BLOCK") //container content will be populated to
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

//load in all content for page 
//ev is a random placeholder variable, short for 'event'

function buildPage(ev){
    schedule.empty();
    for (i=0; i < ev.length; i++){
        let row = $()
    }
}

// if I want the time element to be decorated differently:  
//(items stack vertically in a skinny black div)
// then I'm going to need to have the document populate that content to a different div...that should be okay