
let signalColor = prompt("Enter the traffic signal color (red, yellow, green):");


if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to move");
} else if (signalColor === "green") {
    alert("Move Now");
} else {
    alert("Invalid input. Please enter red, yellow, or green.");
}

   