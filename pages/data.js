export var data = {
    results: [
        {
            question: "Did you shower or take bath today?",
            answer: ""
        },
        {
            question: "How long did you shower for?",
            answer: ""
        },
        {
            question: "How much of the bathtub did you fill?",
            answer: ""
        },
        {
            question: "Did you do the laundry today?",
            answer: ""
        },
        {
            question: "How many loads of laundry did you do today?",
            answer: ""
        },
        {
            question: "Did you use the dishwasher today?",
            answer: ""
        }
    ],
    page: ""

}




export function ChangeData(d,n){
    data.results[n].answer = d
    
}