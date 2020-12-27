let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Please serve Vengan Only dishes")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Please offer vegan accordingly")
} else {
    console.log("Offer anything of their choices")
}