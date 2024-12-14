
const q17_1 = () => {
    function Todo(text) {
        let done = false;
        return {
            getText: () => text,
            isDone: () => done,
            check: () => done = true
        };
    }

    let todo = Todo("buy milk");
    todo.check();
    document.writeln(todo.isDone());
};

const q17_2 = () => {
    function Todo(text, done) {
        function check() {
            done = true;
        }

        return {
            getText: () => text,
            isDone: () => done,
            check: check
        };
    }

    let todo = Todo("buy milk", false);
    todo.check();
    document.writeln(todo.isDone());
}

const solveAll17 = () => {
    printQuizSection(17);
    
    solveQuiz(q17_1, "q17_1");
    solveQuiz(q17_2, "q17_2");
}
