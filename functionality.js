

// Function to get body weight workout plan based on day and level
function getBodyWeightBeginnerPlan(day, level) {
    const beginnerPlans = {
        monday: "push-ups 2x8, incline push-ups 2x10, knee push-ups 2x8, wall push-ups 2x12",
        tuesday: "superman holds 2x15seconds, bird-dogs 2x8 each side, dead-bugs 2x10 each side, cat-cow stretches 2x10",
        wednesday: "bodyweight squats 2x15, stactic lunges 2x8 each leg, wall sits 2x20seconds, caif raises 2x15",
        thursday: "triceps dips 2x8, arm circles 2x20seconds, wall handstand 2x10seconds, shoulder shrugs 2x12",
        friday: "walking 15minutes, burpees 2x5",
        saturday: "walking 15minutes, burpees 3x5",
        sunday: "rest and recovery"
    }
    console.log(beginnerPlans[day.toLowerCase()], level);
}
function getBodyWeightIntermediatePlan(day, level) {
    const intermediatePlans = {
        monday: "push-ups 3x15, wide-arm push-ups 3x12, incline push-ups 3x15, chest dips 3x8",
        tuesday: "superman holds 3x30seconds, reverse snow angles 3x15, door frame rows 3x10, backpack deadlifts 3x12, wall slides 3x15",
        wednesday: "bodyweight squats 3x20, lunges 3x12 each leg, wall sits 3x30seconds, calf raises 3x20, jump squats 3x10",
        thursday: "dimond push-ups 3x10, tricep dips 3x12, bicep curls 3x15, arm circles 3x30seconds, pike shoulder taps 3x20",
        friday: "20-minute run, burpees 3x10",
        saturday: "20minute run, burpees 5x10",
        sunday: "rest and recovery"
    }
    console.log(intermediatePlans[day.toLowerCase()], level);
}
function getBodyWeightHardPlan(day, level) {
    const hardPlans = {
        monday: "push-ups 4x20, wide-arm push-ups 4x15, incline push-ups 4x20, chest dips 4x12",
        tuesday: "superman holds 4x30seconds, pull-ups 4x6, door frame rows 4x10, reverse rows 4x12, planks 4x45seconds",
        wednesday: "jump squats 4x15, lunges 4x15 each leg, wall sits 4x45seconds, calf raises 4x25, bulgarian split squats 4x8 each leg",
        thursday: "pike push-ups 4x10, tricep dips 4x15, bicep curls 4x20, arm circles 4x45seconds, handstand holds 4x20seconds",
        friday: "30-minute run, burpees 4x15",
        saturday: "30-minute run, burpees 6x15",
        sunday: "rest and recovery"
    }
    console.log(hardPlans[day.toLowerCase()], level);
}
function getBodyWeightAdvancedPlan(day, level) {
    const advancedPlans = {
        monday: "clap push-ups 5x10, archer push-ups 5x8, decline push-ups 5x15, ring dips 5x15",
        tuesday: "superman holds 5x45seconds, pull-ups 5x10, door frame rows 5x15, reverse rows 5x15, planks 5x60seconds",
        wednesday: "jump squats 5x20, pistol squats 5x10 each leg, wall sits 5x60seconds, calf raises 5x30, bulgarian split squats 5x12 each leg",
        thursday: "handstand push-ups 5x10, tricep dips 5x20, bicep curls 5x25, arm circles 5x60seconds, handstand holds 5x30seconds",
        friday: "20-minute run, mountain climbers 5x30, star jumps 5x15, burpees 5x20",
        saturday: "45-minute run, burpees 7x20",
        sunday: "rest and recovery"
    }
    console.log(advancedPlans[day.toLowerCase()], level);
}

