// Global scope (name = John)
    // Local scope (name = Micke)
        // Local (name changed to Sam)
    // Local

let name = "John"

if (true) {
    let name = "Micke"
    
    if (true) {
        let name = "Sam"
        console.log(name)
    }
}

if (true) {
    console.log(name)
}