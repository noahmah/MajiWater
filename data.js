
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
    waterUsage: "",
    resultPath: {
        suggestion1: "",
        suggestion2: "",
        suggestion3: ""
    },
    fact: "",



}



// if(process.browser){
//     var sessiondata = sessionStorage.getItem("data");
//     data=JSON.parse(sessiondata);

// }



export function ChangeData(d,n){
    console.log(d,n);
    // sessionStorage.setItem("data",JSON.stringify(data));
    data.results[n].answer = d;
}

export function Restart(){
    data = {
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
        waterUsage: "",
        resultPath: {
            suggestion1: "",
            suggestion2: "",
            suggestion3: ""
        },
        fact: "",
}
}

export function checkPath(){
    if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "No" && data.results[5].answer === "Yes"){
        data.waterUsage = "86 Gallons or 325.5L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 358L of water you consumed could have supported another 7 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 40 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = ""
        data.resultPath.suggestion3 = ""   
     }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "No" && data.results[5].answer === "No"){
        data.waterUsage = "80 Gallons or 302.8L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 252L of water you consumed could have supported another person 5 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 40 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = ""
        data.resultPath.suggestion3 = ""    
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "Yes" && data.results[4].answer === "1"  && data.results[5].answer === "Yes"){
        data.waterUsage = "106 Gallons or 401.2L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 358L of water you consumed could have supported another 7 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 40 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = "Hand washing dishes uses twice as much water as the dish washer."
        
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "Yes" && data.results[4].answer === "2"  && data.results[5].answer === "Yes"){
        data.waterUsage = "126 Gallons or 476.96L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 427L of water you consumed could have supported another 8.5 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 40 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = "Hand washing dishes uses twice as much water as the dish washer."
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "Yes" && data.results[4].answer === "3"  && data.results[5].answer === "Yes"){
        data.waterUsage = "146 Gallons or 552.7L";
        data.fact = "Unfortunately you have used the most water possible in this quiz. The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 502.7L of water you consumed could have supported another 10 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 40 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = "Hand washing dishes uses twice as much water as the dish washer."
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "Yes" && data.results[4].answer === "1"  && data.results[5].answer === "No"){
        data.waterUsage = "100 Gallons or 378.5L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 328L of water you consumed could have supported another 6.6 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 40 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "Yes" && data.results[4].answer === "2"  && data.results[5].answer === "No"){
        data.waterUsage = "120 Gallons or 454.2L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 404L of water you consumed could have supported another 8 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 40 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Full" && data.results[3].answer === "Yes" && data.results[4].answer === "3"  && data.results[5].answer === "No"){
        data.waterUsage = "140 Gallons or 530L";
        data.fact = "Unfortunately you need to work on really need to evaluate your water consumption. The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 358L of water you consumed could have supported another 7 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 40 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "No" && data.results[5].answer === "Yes"){
        data.waterUsage = "46 Gallons or 174.1L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 404L of water you consumed could have supported another 8 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 20 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = "Hand washing dishes uses twice as much water as the dish washer."      
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "No" && data.results[5].answer === "No"){
        data.waterUsage = "40 Gallons or 151.4L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 101L of water you consumed could have supported another 2 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 20 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = ""
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "Yes" && data.results[4].answer === "1" && data.results[5].answer === "Yes"){
        data.waterUsage = "66 Gallons or 249.8L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 200L of water you consumed could have supported another 4 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 20 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = "Hand washing dishes uses twice as much water as the dish washer."
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "Yes" && data.results[4].answer === "2" && data.results[5].answer === "Yes"){
        data.waterUsage = "86 Gallons or 325.5L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 275L of water you consumed could have supported another 5.5 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 20 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = "Hand washing dishes uses twice as much water as the dish washer."
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "Yes" && data.results[4].answer === "3" && data.results[5].answer === "Yes"){
        data.waterUsage = "106 Gallons or 401.3L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 351L of water you consumed could have supported another 7 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 20 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = "Hand washing dishes uses twice as much water as the dish washer."
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "Yes" && data.results[4].answer === "1" && data.results[5].answer === "No"){
        data.waterUsage = "60 Gallons or 227.1L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 177L of water you consumed could have supported another 3.5 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 20 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "Yes" && data.results[4].answer === "2" && data.results[5].answer === "No"){
        data.waterUsage = "80 Gallons or 302.8L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 252L of water you consumed could have supported another 5 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 20 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Bath" && data.results[2].answer === "Half" && data.results[3].answer === "Yes" && data.results[4].answer === "3" && data.results[5].answer === "No"){
        data.waterUsage = "100 Gallons or 378.5L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 328L of water you consumed could have supported another 6.6 people.";
        data.resultPath.suggestion1 = "Baths are a giant waste water, the amount of water you used in your bath is the equivalent of a 20 minute shower. You could save a lot more water by taking short showers!"
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "No" &&  data.results[5].answer === "Yes"){
        data.waterUsage = "27 Gallons or 102.2L";
        data.fact = "Congrats! Your water consumption is super low! The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 52L of water you consumed  could have supported another person.";
        data.resultPath.suggestion1 = "Hand washing dishes uses twice as much water as the dish washer."
        data.resultPath.suggestion2 = ""
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "No" &&  data.results[5].answer === "No"){
        data.waterUsage = "21 Gallons or 79.5L";
        data.fact = "Congrats! Your water consumption is the lowest possible on the quiz! The UN estimates that a human needs 50L of water per day to stay clean and healthy. Unfortunately a 10 minute shower uses 79.5L of water.";
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "Yes" &&  data.results[4].answer === "1" &&  data.results[5].answer === "Yes"){
        data.waterUsage = "47 Gallons or 177.914L";
        data.fact = "- The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 128L of water you consumed could have supported another person 2.5 people.";
        data.resultPath.suggestion1 = "Only wash your clothes when necessary."
        data.resultPath.suggestion2 = "Hand washing dishes uses twice as much water as the dish washer."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "Yes" &&  data.results[4].answer === "2" &&  data.results[5].answer === "Yes"){
        data.waterUsage = "67 Gallons or 253.6L";
        data.fact = "- The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 203L of water you consumed could have supported another person 4 people.";
        data.resultPath.suggestion1 = "Only wash your clothes when necessary."
        data.resultPath.suggestion2 = "Hand washing dishes uses twice as much water as the dish washer."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "Yes" &&  data.results[4].answer === "3" &&  data.results[5].answer === "Yes"){
        data.waterUsage = "87 Gallons or 329.3L";
        data.fact = "- The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 279.3L of water you consumed could have supported another person 5.6 people.";
        data.resultPath.suggestion1 = "Only wash your clothes when necessary."
        data.resultPath.suggestion2 = "Hand washing dishes uses twice as much water as the dish washer."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "Yes" &&  data.results[4].answer === "1" &&  data.results[5].answer === "No"){
        data.waterUsage = "41 Gallons or 155.202L";
        data.fact = "- The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 105L of water you consumed could have supported another person 2 people.";
        data.resultPath.suggestion1 = "Only wash your clothes when necessary."
        data.resultPath.suggestion2 = ""
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "Yes" &&  data.results[4].answer === "2" &&  data.results[5].answer === "No"){
        data.waterUsage = "61 Gallons or 230.9L";
        data.fact = "- The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 180L of water you consumed could have supported another person 3.6 people.";
        data.resultPath.suggestion1 = "Only wash your clothes when necessary."
        data.resultPath.suggestion2 = ""
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "10 Minutes" && data.results[3].answer === "Yes" &&  data.results[4].answer === "3" &&  data.results[5].answer === "No"){
        data.waterUsage = "81 Gallons or 306.6L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 256.6L of water you consumed could have supported another person 5 people.";
        data.resultPath.suggestion1 = "Only wash your clothes when necessary."
        data.resultPath.suggestion2 = ""
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "No" &&  data.results[5].answer === "Yes"){
        data.waterUsage = "37.5 Gallons or 142L";
        data.fact = "Congrats! Your water consumption is super low! The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 92L of water you consumed  could have supported another 1.8 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = "Hand washing dishes uses twice as much water as the dish washer."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "No" &&  data.results[5].answer === "No"){
        data.waterUsage = "31.5 Gallons or 119.2L";
        data.fact = "Congrats! Your water consumption is low! The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 69L of water you consumed  could have supported another person.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = ""
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "1" &&  data.results[5].answer === "Yes"){
        data.waterUsage = "57.5 Gallons or 217.7L";
        data.fact = "Congrats! Your water consumption is super low! The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 92L of water you consumed  could have supported another 1.8 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = "Hand washing dishes uses twice as much water as the dish washer."
        data.resultPath.suggestion3 = ""
        
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "2" &&  data.results[5].answer === "Yes"){
        data.waterUsage = "77.5 Gallons or 293.4L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 145L of water you consumed could have supported another 3 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = "Hand washing dishes uses twice as much water as the dish washer."
        data.resultPath.suggestion3 = "Only wash your clothes when necessary."
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "3" &&  data.results[5].answer === "Yes"){
        data.waterUsage = "97.5 Gallons or 369L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 319L of water you consumed could have supported another 6 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = "Hand washing dishes uses twice as much water as the dish washer."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "1" &&  data.results[5].answer === "No"){
        data.waterUsage = "51.5 Gallons or 195L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 145L of water you consumed could have supported another 3 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "2" &&  data.results[5].answer === "No"){
        data.waterUsage = "71.5 Gallons or 270.7L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 145L of water you consumed could have supported another 3 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "15 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "3" &&  data.results[5].answer === "No"){
        data.waterUsage = "91.5 Gallons or 346.4L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 296L of water you consumed could have supported another 6 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers!"
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "No" && data.results[5].answer === "Yes"){
        data.waterUsage = "48 Gallons or 181.7L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 131L of water you consumed could have supported another 2.6 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = "Hand washing dishes uses twice as much water as the dish washer."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "No" && data.results[5].answer === "No"){
        data.waterUsage = "42 Gallons or 159L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 296L of water you consumed could have supported another 6 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers!"
        data.resultPath.suggestion2 = ""
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "1" && data.results[5].answer === "Yes"){
        data.waterUsage = "68 Gallons or 257.4L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 207L of water you consumed could have supported another 4 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = "Hand washing dishes uses twice as much water as the dish washer."
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "2" && data.results[5].answer === "Yes"){
        data.waterUsage = "88 Gallons or 333.1L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 283L of water you consumed could have supported another 5.7 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = "Hand washing dishes uses twice as much water as the dish washer."
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "3" && data.results[5].answer === "Yes"){
        data.waterUsage = "108 Gallons or 408.8L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 358L of water you consumed could have supported another 7 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = "Hand washing dishes uses twice as much water as the dish washer."
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "1" && data.results[5].answer === "No"){
        data.waterUsage = "62 Gallons or 234.7L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 184L of water you consumed could have supported another 3.7 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "2" && data.results[5].answer === "No"){
        data.waterUsage = "82 Gallons or 310.4L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 260L of water you consumed could have supported another 5.2 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = ""
    }
    else if(data.results[0].answer === "Shower" && data.results[1].answer === "20 Minutes" && data.results[3].answer === "Yes" && data.results[4].answer === "3" && data.results[5].answer === "No"){
        data.waterUsage = "102 Gallons or 386.1L";
        data.fact = "The UN estimates that a human needs 50L of water per day to stay clean and healthy. The extra 336L of water you consumed could have supported another 7 people.";
        data.resultPath.suggestion1 = "You could save a lot more water by taking shorter showers! "
        data.resultPath.suggestion2 = "Only wash your clothes when necessary."
        data.resultPath.suggestion3 = ""
    }
}

