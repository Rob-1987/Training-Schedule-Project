// level buttons output to functionality.js
let selectedLevel = 'level button';
let completedBodyweightDays = [];
let completedWeightDays = [];
let selectedDay;




document.getElementById('beginner-bodyweight').addEventListener('click', function () {
    selectedLevel = 'beginner';
    document.getElementById('level-output').innerHTML = '';
});

document.getElementById('intermediate-bodyweight').addEventListener('click', function () {
    selectedLevel = 'intermediate';
    document.getElementById('level-output').innerHTML = '';
});

document.getElementById('hard-bodyweight').addEventListener('click', function () {
    selectedLevel = 'hard';
    document.getElementById('level-output').innerHTML = '';
});

document.getElementById('advanced-bodyweight').addEventListener('click', function () {
    selectedLevel = 'advanced';
    document.getElementById('level-output').innerHTML = '';
});

// day buttons output to functionality.js
document.getElementById('monday-bodyweight-button').addEventListener('click', function () {
    selectedDay = 'monday';
    getBodyWeightPlan('monday', selectedLevel);
});
document.getElementById('tuesday-bodyweight-button').addEventListener('click', function () {
    selectedDay = 'tuesday';
    getBodyWeightPlan('tuesday', selectedLevel);
});
document.getElementById('wednesday-bodyweight-button').addEventListener('click', function () {
    selectedDay = 'wednesday';
    getBodyWeightPlan('wednesday', selectedLevel);
});
document.getElementById('thursday-bodyweight-button').addEventListener('click', function () {
    selectedDay = 'thursday';
    getBodyWeightPlan('thursday', selectedLevel);
});
document.getElementById('friday-bodyweight-button').addEventListener('click', function () {
    selectedDay = 'friday';
    getBodyWeightPlan('friday', selectedLevel);
});
document.getElementById('saturday-bodyweight-button').addEventListener('click', function () {
    selectedDay = 'saturday';
    getBodyWeightPlan('saturday', selectedLevel);
});
document.getElementById('sunday-bodyweight-button').addEventListener('click', function () {
    selectedDay = 'sunday';
    getBodyWeightPlan('sunday', selectedLevel);
});

// Function to get body weight workout plan based on day and level
function getBodyWeightPlan(day, level) {
    if (level === 'beginner') {
        getBodyWeightBeginnerPlan(day, level);
    } else if (level === 'intermediate') {
        getBodyWeightIntermediatePlan(day, level);
    } else if (level === 'hard') {
        getBodyWeightHardPlan(day, level);
    } else if (level === 'advanced') {
        getBodyWeightAdvancedPlan(day, level);
    }
}






// Function to get body weight workout plan based on day and level
function getBodyWeightBeginnerPlan(day, level) {
    const beginnerPlans = {
        monday: ["push-ups 2x8", "incline push-ups 2x10", "knee push-ups 2x8", "wall push-ups 2x12"],
        tuesday: ["superman holds 2x15seconds", "bird-dogs 2x8 each side", "dead-bugs 2x10 each side", "cat-cow stretches 2x10"],
        wednesday: ["bodyweight squats 2x15", "stactic lunges 2x8 each leg", "wall sits 2x20seconds", "caif raises 2x15"],
        thursday: ["triceps dips 2x8", "arm circles 2x20seconds", "wall handstand 2x10seconds", "shoulder shrugs 2x12"],
        friday: ["walking 15minutes", "burpees 2x5"],
        saturday: ["walking 15minutes", "burpees 3x5"],
        sunday: ["rest and recovery"]
    }
    const exercises = beginnerPlans[day.toLowerCase()];
    let html = `<h2>${day} - Beginner Level</h2>`;

    for (let i = 0; i < exercises.length; i++) {
        html += `<div>${exercises[i]}</div>`;
    }
    html += '<br><button onclick="completeBodyweightWorkout(\'' + day + '\')" class="main-button complete-day-colour" type="button" id="complete-bodyweight-day">Complete Day</button>';
    document.getElementById("output").innerHTML = html;
}


function getBodyWeightIntermediatePlan(day, level) {
    const intermediatePlans = {
        monday: ["push-ups 3x15", "wide-arm push-ups 3x12", "incline push-ups 3x15", "chest dips 3x8"],
        tuesday: ["superman holds 3x30seconds", "reverse snow angles 3x15", "door frame rows 3x10", "backpack deadlifts 3x12", "wall slides 3x15"],
        wednesday: ["bodyweight squats 3x20", "lunges 3x12 each leg", "wall sits 3x30seconds", "calf raises 3x20", "jump squats 3x10"],
        thursday: ["dimond push-ups 3x10", "tricep dips 3x12", "bicep curls 3x15", "arm circles 3x30seconds", "pike shoulder taps 3x20"],
        friday: ["20-minute run", "burpees 3x10"],
        saturday: ["20minute run", "burpees 5x10"],
        sunday: ["rest and recovery"]
    }
    const exercises = intermediatePlans[day.toLowerCase()];
    let html = `<h2>${day} - Intermediate Level</h2>`;

    for (let i = 0; i < exercises.length; i++) {
        html += `<div>${exercises[i]}</div>`;
    }
    html += '<br><button onclick="completeBodyweightWorkout(\'' + day + '\')" class="main-button complete-day-colour" type="button" id="complete-bodyweight-day">Complete Day</button>';
    document.getElementById("output").innerHTML = html;
}


function getBodyWeightHardPlan(day, level) {
    const hardPlans = {
        monday: ["push-ups 4x20", "wide-arm push-ups 4x15", "incline push-ups 4x20", "chest dips 4x12"],
        tuesday: ["superman holds 4x30seconds", "pull-ups 4x6", "door frame rows 4x10", "reverse rows 4x12", "planks 4x45seconds"],
        wednesday: ["jump squats 4x15", "lunges 4x15 each leg", "wall sits 4x45seconds", "calf raises 4x25", "bulgarian split squats 4x8 each leg"],
        thursday: ["pike push-ups 4x10", "tricep dips 4x15", "bicep curls 4x20", "arm circles 4x45seconds", "handstand holds 4x20seconds"],
        friday: ["30-minute run", "burpees 4x15"],
        saturday: ["30-minute run", "burpees 6x15"],
        sunday: ["rest and recovery"]
    }
    const exerses = hardPlans[day.toLowerCase()];
    let html = `<h2>${day} - Hard Level</h2>`;

    for (let i = 0; i < exerses.length; i++) {
        html += `<div>${exerses[i]}</div>`;
    }
    html += '<br><button onclick="completeBodyweightWorkout(\'' + day + '\')" class="main-button complete-day-colour" type="button" id="complete-bodyweight-day">Complete Day</button>';
    document.getElementById("output").innerHTML = html;
}


function getBodyWeightAdvancedPlan(day, level) {
    const advancedPlans = {
        monday: ["clap push-ups 5x10", "archer push-ups 5x8", "decline push-ups 5x15", "ring dips 5x15"],
        tuesday: ["superman holds 5x45seconds", "pull-ups 5x10", "door frame rows 5x15", "reverse rows 5x15", "planks 5x60seconds"],
        wednesday: ["jump squats 5x20", "pistol squats 5x10 each leg", "wall sits 5x60seconds", "calf raises 5x30", "bulgarian split squats 5x12 each leg"],
        thursday: ["handstand push-ups 5x10", "tricep dips 5x20", "bicep curls 5x25", "arm circles 5x60seconds", "handstand holds 5x30seconds"],
        friday: ["20-minute run", "mountain climbers 5x30", "star jumps 5x15", "burpees 5x20"],
        saturday: ["45-minute run", "burpees 7x20"],
        sunday: ["rest and recovery"]
    }
    const exercises = advancedPlans[day.toLowerCase()];
    let html = `<h2>${day} - Advanced Level</h2>`;

    for (let i = 0; i < exercises.length; i++) {
        html += `<div>${exercises[i]}</div>`;
    }
    html += '<br><button onclick="completeBodyweightWorkout(\'' + day + '\')" class="main-button complete-day-colour" type="button" id="complete-bodyweight-day">Complete Day</button>';
    document.getElementById("output").innerHTML = html;
}


// End of body weight workout plans functions





// Weight training workout plans functions to be added here

let selectedWeight = 'weight button';

document.getElementById('beginner-weight-button').addEventListener('click', function () {
    selectedWeight = 'beginner';
    document.getElementById('weight-output').innerHTML = '';
});
document.getElementById('intermediate-weight-button').addEventListener('click', function () {
    selectedWeight = 'intermediate';
    document.getElementById('weight-output').innerHTML = '';
});
document.getElementById('hard-weight-button').addEventListener('click', function () {
    selectedWeight = 'hard';
    document.getElementById('weight-output').innerHTML = '';
});
document.getElementById('advanced-weight-button').addEventListener('click', function () {
    selectedWeight = 'advanced';
    document.getElementById('weight-output').innerHTML = '';
});
// End of weight training workout plans functions

// weight training day buttons output to functionality.js
document.getElementById('monday-weight-button').addEventListener('click', function () {
    getWeightPlan('monday', selectedWeight);
});
document.getElementById('tuesday-weight-button').addEventListener('click', function () {
    getWeightPlan('tuesday', selectedWeight);
});
document.getElementById('wednesday-weight-button').addEventListener('click', function () {
    getWeightPlan('wednesday', selectedWeight);
});
document.getElementById('thursday-weight-button').addEventListener('click', function () {
    getWeightPlan('thursday', selectedWeight);
});
document.getElementById('friday-weight-button').addEventListener('click', function () {
    getWeightPlan('friday', selectedWeight);
});
document.getElementById('saturday-weight-button').addEventListener('click', function () {
    getWeightPlan('saturday', selectedWeight);
});
document.getElementById('sunday-weight-button').addEventListener('click', function () {
    getWeightPlan('sunday', selectedWeight);
});
// End of weight training day buttons output to functionality.js

// Function to get weight training workout plan based on day and level
function getWeightPlan(day, level) {
    if (level === 'beginner') {
        getWeightBeginnerPlan(day, level);
    } else if (level === 'intermediate') {
        getWeightIntermediatePlan(day, level);
    } else if (level === 'hard') {
        getWeightHardPlan(day, level);
    } else if (level === 'advanced') {
        getWeightAdvancedPlan(day, level);
    }
}

// End of weight training workout plans functions




// weight training beginner plan function
function getWeightBeginnerPlan(day, level) {
    const beginnerWeightPlans = {
        monday: ["Bench press 3x8", " Incline Dumbbell press 3x8", "Chest fly 3x10", "Triceps Extensions 3x10"],
        tuesday: ["Lat Pulldown 3x8", "Seated Row 3x8", "Dumbbell Curls 3x8", "Hammer Curls 3x8"],
        wednesday: ["Leg Press 3x10", "Leg Curls 3x10", "Calf Raises 3x15", "Leg Extensions 3x10"],
        thursday: ["Shoulder Press 3x8", "Lateral Raises 3x8", "rear Delt Fly 3x8", "Shrugs 3x10"],
        friday: ["15-minute light cardio", "Bodyweight squats 3x15"],
        saturday: ["15-minute light cardio", "Bodyweight squats 3x15"],
        sunday: ["rest and recovery"]
    }
    const exercises = beginnerWeightPlans[day.toLowerCase()];
    let html = `<h2>${day} - Beginner Weight Training Level</h2>`;

    for (let i = 0; i < exercises.length; i++) {
        html += `<div>${exercises[i]}</div>`;
    }

    html += '<br><button onclick="completeWeightWorkout(\'' + day + '\')" class="main-button complete-day-colour" type="button" id="complete-weight-day">Complete Day</button>';

    document.getElementById("weight-output").innerHTML = html;
}

function getWeightIntermediatePlan(day, level) {
    const intermediateWeightPlans = {
        monday: ["Bench press 4x10", " Incline Dumbbell press 4x10", "Chest fly 4x12", "Triceps Extensions 4x12", "close-grip bench press 3x8"],
        tuesday: ["Lat Pulldown 4x10", "Seated Row 4x10", "barbell Curls 4x10", "Hammer Curls 4x10"],
        wednesday: ["Leg Press 4x12", "Leg Curls 4x12", "Calf Raises 4x20", "Leg Extensions 4x12", "walking lunges 3x10 each leg"],
        thursday: ["overhead Press 4x10", "Lateral Raises 4x10", "rear Delt Fly 4x10", "Shrugs 4x12"],
        friday: ["20-minute moderate cardio", "Bodyweight squats 4x20"],
        saturday: ["20-minute moderate cardio", "Bodyweight squats 4x20"],
        sunday: ["rest and recovery"]
    }
    const exercises = intermediateWeightPlans[day.toLowerCase()];
    let html = `<h2>${day} - Intermediate Weight Training Level</h2>`;
    for (let i = 0; i < exercises.length; i++) {
        html += `<div>${exercises[i]}</div>`;
    }
    html += '<br><button onclick="completeWeightWorkout(\'' + day + '\')" class="main-button complete-day-colour" type="button" id="complete-weight-day">Complete Day</button>';

    document.getElementById("weight-output").innerHTML = html;
}

function getWeightHardPlan(day, level) {
    const hardWeightPlans = {
        monday: ["Bench press 5x12", " Incline Dumbbell press 5x12", "Chest fly 5x15", "Triceps Extensions 5x15", "close-grip bench press 4x10"],
        tuesday: ["Lat Pulldown 5x12", "Seated Row 5x12", "barbell Curls 5x12", "Hammer Curls 5x12"],
        wednesday: ["Leg Press 5x15", "Leg Curls 5x15", "Calf Raises 5x25", "Leg Extensions 5x15", "walking lunges 4x12 each leg"],
        thursday: ["overhead Press 5x12", "Lateral Raises 5x12", "rear Delt Fly 5x12", "Shrugs 5x15"],
        friday: ["20-minute intense cardio", "Bodyweight squats 5x25"],
        saturday: ["20-minute intense cardio", "Bodyweight squats 5x25"],
        sunday: ["rest and recovery"]
    }
    const exercises = hardWeightPlans[day.toLowerCase()];
    let html = `<h2>${day} - Hard Weight Training Level</h2>`;
    for (let i = 0; i < exercises.length; i++) {
        html += `<div>${exercises[i]}</div>`;
    }
    html += '<br><button onclick="completeWeightWorkout(\'' + day + '\')" class="main-button complete-day-colour" type="button" id="complete-weight-day">Complete Day</button>';

    document.getElementById("weight-output").innerHTML = html;
}

function getWeightAdvancedPlan(day, level) {
    const advancedWeightPlans = {
        monday: ["Bench press 6x15", " Incline Dumbbell press 6x15", "Chest fly 6x20", "Triceps Extensions 6x20", "close-grip bench press 5x12"],
        tuesday: ["Lat Pulldown 6x15", "Seated Row 6x15", "barbell Curls 6x15", "Hammer Curls 6x15", "deadlifts 4x10"],
        wednesday: ["Leg Press 6x20", "Leg Curls 6x20", "Calf Raises 6x30", "Leg Extensions 6x20", "walking lunges 5x15 each leg"],
        thursday: ["overhead Press 6x15", "Lateral Raises 6x15", "rear Delt Fly 6x15", "Shrugs 6x20"],
        friday: ["20-minute intense cardio", "Bodyweight squats 6x30"],
        saturday: ["20-minute intense cardio", "Bodyweight squats 6x30"],
        sunday: ["rest and recovery"]
    }
    const exercises = advancedWeightPlans[day.toLowerCase()];
    let html = `<h2>${day} - Advanced Weight Training Level</h2>`;
    for (let i = 0; i < exercises.length; i++) {
        html += `<div>${exercises[i]}</div>`;
    }
    html += '<br><button onclick="completeWeightWorkout(\'' + day + '\')" class="main-button complete-day-colour" type="button" id="complete-weight-day">Complete Day</button>';

    document.getElementById("weight-output").innerHTML = html;
}
// End of weight training advanced plan function






// Functions to complete days and weeks and reset schedules to be added here
let completedBodyweightDaysCount = 0;

function completeBodyweightWorkout(day) {
    const dayLower = day.toLowerCase();
    if (!completedBodyweightDays.includes(dayLower)) {
        completedBodyweightDays.push(dayLower);
        const button = document.getElementById(dayLower + '-bodyweight-button');
        if (button) {
            button.innerHTML = day + '✓';
            button.style.backgroundColor = ' #1df750'; // Change button color to green
        }
        document.getElementById('output').innerHTML = `<h3>Great job! You have completed your ${day} bodyweight workout.</h3>`;
        checkBodyweightWeekCompletion();


        completedBodyweightDaysCount++;
        document.getElementById('bodyweightCountDays').innerHTML = completedBodyweightDaysCount;
    }
}

let completedWeightDaysCount = 0;

function completeWeightWorkout(day) {
    const dayLower = day.toLowerCase();

    if (!completedWeightDays.includes(dayLower)) {
        completedWeightDays.push(dayLower);

        const button = document.getElementById(dayLower + '-weight-button');
        if (button) {
            button.innerHTML = day + '✓';
            button.style.backgroundColor = ' #1df750'; // Change button color to green
        }
        document.getElementById('weight-output').innerHTML = `<h3>Great job! You have completed your ${day} weight workout.</h3>`;

        checkWeightWeekCompletion();


        completedWeightDaysCount++;
        document.getElementById('weightCountDays').innerHTML = completedWeightDaysCount;
    }
}





// Function to check if all days in the bodyweight week are completed

function checkBodyweightWeekCompletion() {
    if (completedBodyweightDays.length === 7) {
        const completeButton = document.getElementById('complete-bodyweight');
        if (completeButton) {
            completeButton.classList.add('flash-button');
        }
    }
}

function checkWeightWeekCompletion() {
    if (completedWeightDays.length === 7) {
        const completeButton = document.getElementById('complete-weight');
        if (completeButton) {
            completeButton.classList.add('flash-button');
        }
    }
}





// Event listener for completing bodyweight week

document.getElementById('complete-bodyweight').addEventListener('click', function () {
    if (completedBodyweightDays.length === 7) {
        this.classList.remove('flash-button');

        document.getElementById('output').innerHTML = `<h2>🎉 CONGRATULATIONS! 🎉 You have completed the Bodyweight Training Week!</h2>`;

        const weekProgress = document.querySelector('.blue-card p');
        if (weekProgress) {
            weekProgress.innerHTML = `7/7 Days completed`;
            weekProgress.style.color = '#1df750'; // Green color of completion text
            weekProgress.style.fontWeight = 'bold';
        }
    } else {
        document.getElementById('output').innerHTML = `<h3 style="color: red;">you've only completed ${completedBodyweightDays.length} out of 7 days.</h3>
        <p>keep going! you're doing great!</p>`;
    }
});

// Event listener for completing weight week
document.getElementById('complete-weight').addEventListener('click', function () {
    if (completedWeightDays.length === 7) {
        this.classList.remove('flash-button');

        document.getElementById('weight-output').innerHTML = `<h2>🎉 CONGRATULATIONS! 🎉 You have completed the Weight Training Week!</h2>
    `;
        const weekProgress = document.querySelector('.yellow-card p');
        if (weekProgress) {
            weekProgress.innerHTML = `7/7 Days completed`;
            weekProgress.style.color = '#1df750'; // Green color of completion text
            weekProgress.style.fontWeight = 'bold';
        } else {
            document.getElementById('weight-output').innerHTML = `<h3 style="color: red;">you've only completed ${completedWeightDays.length} out of 7 days.</h3>
        <p>keep going! you're doing great!</p>`;
        }
    };
});







// Function to reset both schedules
document.getElementById('reset-bodyweight').addEventListener('click', function () {
    const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    completedBodyweightDays = [];

    weekdays.forEach(day => {
        const button = document.getElementById(day + '-bodyweight-button');
        if (button) {
            button.innerHTML = day.charAt(0).toUpperCase() + day.slice(1);
            button.style.backgroundColor = ''; // Reset button color
        }
    });
    document.getElementById('output').innerHTML = ''; // Clear output message
    completedBodyweightDaysCount = 0;
    document.getElementById('bodyweightCountDays').innerHTML = completedBodyweightDaysCount;
});

const completeButton = document.getElementById('complete-bodyweight');
if (completeButton) {
    completeButton.classList.remove('flash-button');
}
const weekProgress = document.querySelector('.blue-card p');
if (weekProgress) {
    weekProgress.innerHTML = `0/7 Days completed`;
    weekProgress.style.color = '';
    weekProgress.style.fontWeight = '';
}
document.getElementById('output').addEventListener('click', function () {
});



// Function to reset weight training schedule
document.getElementById('reset').addEventListener('click', function () {
    const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    completedWeightDays = [];

    weekdays.forEach(day => {
        const button = document.getElementById(day + '-weight-button');
        if (button) {
            button.innerHTML = day.charAt(0).toUpperCase() + day.slice(1);
            button.style.backgroundColor = ''; // Reset button color
        }
    });
    document.getElementById('weight-output').innerHTML = ''; // Clear output message

    completedWeightDaysCount = 0;
    document.getElementById('weightCountDays').innerHTML = completedWeightDaysCount;
});
const completeWeightButton = document.getElementById('complete-weight');
if (completeWeightButton) {
    completeWeightButton.classList.remove('flash-button');
}
const weightWeekProgress = document.querySelector('.yellow-card p');
if (weightWeekProgress) {
    weightWeekProgress.innerHTML = `0/7 Days completed`;
    weightWeekProgress.style.color = '';
    weightWeekProgress.style.fontWeight = '';
}
document.getElementById('weight-output').addEventListener('click', function () {
});