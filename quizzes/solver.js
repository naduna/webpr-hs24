
// "Quiz solver" logic
const solveQuiz = (quizFn, quizName) => {
    // Print the quiz name
    document.writeln(`Solving quiz: ${quizName}`);

    // Print the function code
    document.writeln(`Function Code:\n${quizFn.toString()}`);

    // Capture the result of running the function (if it writes output)
    document.writeln("Result:");
    quizFn(); // Execute the function (this will execute document.writeln)
    
    document.writeln("-------------")
};

const printQuizSection = nr => {
    document.writeln("----------------------------")
    document.writeln("-- QUESTION " + nr)
    document.writeln("----------------------------")
}