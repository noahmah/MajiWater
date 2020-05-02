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
    page: "", 
    resultPath: "",


}




export function ChangeData(d,n){
    data.results[n].answer = d
    
}

export function checkPath(){
    if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "No" && data.results[5].answer === "Yes"){
        data.resultPath = "86 Gallons or 325.5L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "No" && data.results[5].answer === "No"){
        data.resultPath = "80 Gallons or 302.8L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "Yes" && data.results[4].answer === "1"  && data.results[5].answer === "Yes"){
        data.resultPath = "106 Gallons or 401.2L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "Yes" && data.results[4].answer === "2"  && data.results[5].answer === "Yes"){
        data.resultPath = "126 Gallons or 476.96L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "Yes" && data.results[4].answer === "3"  && data.results[5].answer === "Yes"){
        data.resultPath = "146 Gallons or 552.7L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "Yes" && data.results[4].answer === "1"  && data.results[5].answer === "No"){
        data.resultPath = "100 Gallons or 378.5L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "Yes" && data.results[4].answer === "2"  && data.results[5].answer === "No"){
        data.resultPath = "120 Gallons or 454.2L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "Yes" && data.results[4].answer === "3"  && data.results[5].answer === "No"){
        data.resultPath = "140 Gallons or 530L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "No" && data.results[5].answer === "Yes"){
        data.resultPath = "46 Gallons or 174.1L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "No" && data.results[5].answer === "No"){
        data.resultPath = "40 Gallons or 151.4L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "Yes" && data.results[4].answer === "1" && data.results[5].answer === "Yes"){
        data.resultPath = "66 Gallons or 249.8L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "Yes" && data.results[4].answer === "2" && data.results[5].answer === "Yes"){
        data.resultPath = "86 Gallons or 325.5L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "Yes" && data.results[4].answer === "3" && data.results[5].answer === "Yes"){
        data.resultPath = "106 Gallons or 401.3L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "Yes" && data.results[4].answer === "1" && data.results[5].answer === "No"){
        data.resultPath = "60 Gallons or 227.1L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "Yes" && data.results[4].answer === "2" && data.results[5].answer === "No"){
        data.resultPath = "80 Gallons or 302.8L";
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "Yes" && data.results[4].answer === "3" && data.results[5].answer === "No"){
        data.resultPath = "100 Gallons or 378.5L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "No" &&  data.results[5].answer === "Yes"){
        data.resultPath = "27 Gallons or 102.2L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "No" &&  data.results[5].answer === "No"){
        data.resultPath = "21 Gallons or 79.5L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "Yes" &&  data.results[4].answer === "1" &&  data.results[5].answer === "Yes"){
        data.resultPath = "47 Gallons or 177.914L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "Yes" &&  data.results[4].answer === "2" &&  data.results[5].answer === "Yes"){
        data.resultPath = "67 Gallons or 253.6L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "Yes" &&  data.results[4].answer === "3" &&  data.results[5].answer === "Yes"){
        data.resultPath = "87 Gallons or 329.3L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "Yes" &&  data.results[4].answer === "1" &&  data.results[5].answer === "No"){
        data.resultPath = "41 Gallons or 155.202L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "Yes" &&  data.results[4].answer === "2" &&  data.results[5].answer === "No"){
        data.resultPath = "61 Gallons or 230.9L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "Yes" &&  data.results[4].answer === "3" &&  data.results[5].answer === "No"){
        data.resultPath = "81 Gallons or 306.6L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "No" &&  data.results[5].answer === "Yes"){
        data.resultPath = "37.5 Gallons or 142L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "No" &&  data.results[5].answer === "No"){
        data.resultPath = "31.5 Gallons or 119.2L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "1" &&  data.results[5].answer === "Yes"){
        data.resultPath = "57.5 Gallons or 217.7L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "2" &&  data.results[5].answer === "Yes"){
        data.resultPath = "77.5 Gallons or 293.4L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "3" &&  data.results[5].answer === "Yes"){
        data.resultPath = "97.5 Gallons or 369L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "1" &&  data.results[5].answer === "No"){
        data.resultPath = "51.5 Gallons or 195L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "2" &&  data.results[5].answer === "No"){
        data.resultPath = "71.5 Gallons or 270.7L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "3" &&  data.results[5].answer === "No"){
        data.resultPath = "91.5 Gallons or 346.4L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "No" && data.results[5].answer === "Yes"){
        data.resultPath = "48 Gallons or 181.7L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "No" && data.results[5].answer === "No"){
        data.resultPath = "42 Gallons or 159L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "1" && data.results[5].answer === "Yes"){
        data.resultPath = "68 Gallons or 257.4L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "2" && data.results[5].answer === "Yes"){
        data.resultPath = "88 Gallons or 333.1L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "3" && data.results[5].answer === "Yes"){
        data.resultPath = "108 Gallons or 408.8L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "1" && data.results[5].answer === "No"){
        data.resultPath = "62 Gallons or 234.7L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "2" && data.results[5].answer === "No"){
        data.resultPath = "82 Gallons or 310.4L";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "3" && data.results[5].answer === "No"){
        data.resultPath = "102 Gallons or 386.1L";
    }
}

export const Test = () => {
//Testing
}
export default Test;