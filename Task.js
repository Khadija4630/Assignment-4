function calculateTax(income,expenses){

    if(income <= 0 || expenses <= 0 || expenses > income){
        return "Invalid Input" ;
    }

    let difference = income - expenses; 

    let tax = difference * 0.20;

    return tax;

}




// function calculateTax(income, expense) {
//     // Check if both inputs are numbers
//     if (typeof income !== 'number' || typeof expense !== 'number') {
//         return "Invalid Input";
//     }

//     // Check if both inputs are positive numbers
//     if (income < 0 || expense < 0) {
//         return "Invalid Input";
//     }

//     // Check if income is greater than or equal to expense
//     if (income < expense) {
//         return "Invalid Input";
//     }

//     // Calculate the difference between income and expense
//     let difference = income - expense;

//     // Calculate 20% of the difference
//     let tax = difference * 0.20;

//     // Return the calculated tax
//     return tax;
// }

// return (income - expenses) * 0.20;
    // console.log( calculateTax(10000, 3000));
    // console.log(calculateTax (34000, 1753));
    // console.log(calculateTax ( 5000, 1500));
    // console.log(calculateTax (7000, 7000));
    // console.log(calculateTax ( -5000, 2000));
    // console.log(calculateTax (  6000, -1500));
   

    function sendNotification(email) {
        if( !email.includes('@')){
            return "Invalid Email"
        }
        let [userName, domainName] = email.split('@');

        let notification = userName.concat ('sent you an email from ') + domainName;

        return notification;

    }



    // if (typeof email !== 'string') {
    //     return "Invalid Input";
    // }

    // // Check if the email contains the @ character
    // if (email.indexOf('@') === -1) {
    //     return "Invalid Email";
    // }

    // // Split the email into username and domain name
    // let parts = email.split('@');
    // let username = parts[0];
    // let domainName = parts[1];

    // // Generate the notification message
    // let notificationMessage = `${username} sent you an email from ${domainName}.`;

    // Return the notification message
    // return notificationMessage;



// console.log(sendNotification("zihad@gmail.com"));
// console.log(sendNotification("farhan34@yahoo.com"));
// console.log(sendNotification("nadim.naem5@outlook.com"));
// console.log(sendNotification("fahim234.hotmail.com"));
// console.log(sendNotification("sadia8icloud.com"));

// email.indexOf('@') === -1 || email.split('@').length !== 2


function checkDigitsInName(name) {
  
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    
    for (let char of name) {
        if (!isNaN (char)) {
            return true;
        }
    }
    return false;
        
}

// // Initialize a flag to false
// let hasDigits = false;

// // Loop through each character in the input string
// for (let i = 0; i < input.length; i++) {
//     // Check if the current character is a digit
//     if (!isNaN(input[i])) {
//         hasDigits = true;
//         break;
//     }
// }

// // Return true if there are digits, false otherwise
// return hasDigits;
// }


    

// char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57
// console.log(checkDigitsInName("Raj0123"));
// console.log(checkDigitsInName("Suman"));
// console.log(checkDigitsInName("Name2024"));
// console.log(checkDigitsInName("!@#"));
// console.log(checkDigitsInName(["Raj"]));
// console.log(checkDigitsInName("Raj 123"));



function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }

    let finalScore = 0;

    finalScore += obj.testScore;
    finalScore += obj.schoolGrade;


    if (obj.isFFamily) {
        finalScore += 20;
    }

    if (finalScore >= 80) {
        return true;
    } 
    else {
        return false;
    }
   
}


// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  } ))
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }  ))
// console.log(calculateFinalScore("hello" ))
// console.log(calculateFinalScore( { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  } ))



function waitingTime(interviewTimes, serialNumber) {
    if (!Array.isArray(interviewTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let sum = 0;
    for (let time of interviewTimes) {
        sum += time;
    }
    let averageTime = Math.round(sum / interviewTimes.length);

    let peopleInFront = serialNumber - 1;

    let peopleLeft = peopleInFront - interviewTimes.length;

    let waitingTime = peopleLeft * averageTime;

    return waitingTime;

}

// console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10

// ));
// console.log(waitingTime([13, 2], 6

// ));
// console.log(waitingTime([13, 2, 6, 7, 10], 6

// ));
// console.log(waitingTime([6], 4

// ));
// console.log(waitingTime(7 , 10

// ));
// console.log(waitingTime("[6,2]", 9

// ));
// console.log(waitingTime([7, 8, 3, 4, 5], "9"

// ));


