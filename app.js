
// ==================================
// Q-01 Weekly Temperature Record
// ==================================

console.log("===== Q-01 Weekly Temperature Record =====");

let temperatures = [32, 35, 30, 34, 36, 31, 33];

let total = 0;
let count = 0;

for (let i = 0; i < temperatures.length; i++) {
    console.log("Day " + (i + 1) + ": " + temperatures[i]);
    total += temperatures[i];
}

let average = total / temperatures.length;

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > average) {
        count++;
    }
}

console.log("Average Temperature: " + average);
console.log("Days Above Average: " + count);


// ==================================
// Q-02 Class Test Marks
// ==================================

console.log("\n===== Q-02 Class Test Marks =====");

let marks = [75, 45, 88, 60, 39, 92, 55, 70];

let highest = marks[0];
let lowest = marks[0];
let passed = 0;

console.log("Original Marks:");

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);

    if (marks[i] > highest) {
        highest = marks[i];
    }

    if (marks[i] < lowest) {
        lowest = marks[i];
    }

    if (marks[i] >= 50) {
        passed++;
    }
}

console.log("Reverse Marks:");

for (let i = marks.length - 1; i >= 0; i--) {
    console.log(marks[i]);
}

console.log("Highest Marks: " + highest);
console.log("Lowest Marks: " + lowest);
console.log("Students Passed: " + passed);


// ==================================
// Q-03 Shop Sales Across Branches
// ==================================

console.log("\n===== Q-03 Shop Sales Across Branches =====");

let sales = [
    [12000, 15000, 11000, 14000],
    [10000, 18000, 16000, 13000],
    [17000, 14000, 19000, 16000]
];

let grandTotal = 0;
let highestSales = 0;
let highestBranch = 0;

for (let i = 0; i < sales.length; i++) {

    let branchTotal = 0;

    console.log("Branch " + (i + 1) + " Sales:");

    for (let j = 0; j < sales[i].length; j++) {
        console.log("Day " + (j + 1) + ": " + sales[i][j]);

        branchTotal += sales[i][j];
    }

    console.log("Branch Total: " + branchTotal);

    grandTotal += branchTotal;

    if (branchTotal > highestSales) {
        highestSales = branchTotal;
        highestBranch = i + 1;
    }
}

console.log("Total Sales: " + grandTotal);
console.log("Highest Sales Branch: Branch " + highestBranch);
console.log("Highest Branch Sales: " + highestSales);


// ==================================
// Q-04 Reversing a Delivery Route
// ==================================

console.log("\n===== Q-04 Reversing a Delivery Route =====");

let stops = [2, 4, 6, 8, 10, 12];

console.log("Original Route: " + stops);

let reversed = [];

for (let i = stops.length - 1; i >= 0; i--) {
    reversed.push(stops[i]);
}

console.log("Reversed Route: " + reversed);


// ==================================
// Q-05 Checking a Product Code
// ==================================

console.log("\n===== Q-05 Checking a Product Code =====");

let code = "LEVEL";

let originalCode = code.toUpperCase();
let reversedCode = "";

for (let i = originalCode.length - 1; i >= 0; i--) {
    reversedCode += originalCode[i];
}

console.log("Entered Product Code: " + code);

if (originalCode === reversedCode) {
    console.log("This is a Palindrome Code.");
} else {
    console.log("This is Not a Palindrome Code.");
}
