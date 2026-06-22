export function Greeting(hours) {
    if (hours < 4 || hours > 19) return `Good Night`
    if (hours < 9) return "Good morning"
    if (hours < 16) return "Good afternoon"
    else "Good Evening"
}

// exporting module

// common js
// module.exports = Greeting;

// ESM
// export default Greeting;