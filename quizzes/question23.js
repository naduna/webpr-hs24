
const q23_1 = () => {
    // is exact same as 6? yes, but with other evaluation
    const idPromise = x => new Promise(resolve => resolve(x));
    
    const writer = x => {
        document.writeln(x);
        return idPromise(x);
    };
    
    idPromise(1)
        .then(writer)
        .then(it => it + 1)
        .then(writer);
    
    // shows '1 2'?
};

const q23_2 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    idPromise(1)
        .then(it => { document.writeln(it); return idPromise(it); })
        .then(it => document.writeln(it));

    // shows '1 1'?
};

const q23_3 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    idPromise(1)
        .then(it => document.writeln(it));

    // shows '1'?
};

const q23_4 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    const writer = x => {
        document.writeln(x);
        return idPromise(x);
    };

    idPromise(1)
        .then(writer)
        .then(it => document.writeln(it));

    // shows '1 1'?
};

const q23_5 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    idPromise(1)
        .then(it => { document.writeln(it); return it; })
        .then(it => document.writeln(it));

    // shows '1 1'?
};

const q23_6 = () => {
    // is exact same as 1? yes, but with other evaluation
    const idPromise = x => new Promise(resolve => resolve(x));

    const writer = x => {
        document.writeln(x);
        return idPromise(x);
    };

    idPromise(1)
        .then(writer)
        .then(it => it + 1)
        .then(writer);

    // shows '1 1'?
};

const q23_7 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    const writer = x => {
        document.writeln(x);
        return idPromise(x);
    };
    
    const filterEven = n => n % 2 === 0 ? n : undefined;

    idPromise(1)
        .then(writer)
        .then(it => document.writeln(it));

    // shows '1 1'?
};

const q23_8 = () => {
    function handle(callback) {
        const result = [];
        callback( result );
        return result;
    }

    document.writeln( handle( it.push(1) ).length === 1);
}

const q23_9 = () => {
    function handle(callback) {
        const result = [];
        callback( result );
        return result;
    }

    document.writeln( handle( () => [1] ).length === 1);
}

const q23_10 = () => {
    function handle(callback) {
        const result = [];
        callback( result );
        return result;
    }

    let it = [];
    document.writeln( handle( it => it.push(1) ).length === 1);
}

const q23_11 = () => {
    function handle(callback) {
        const result = [];
        callback( result );
        return result;
    }
    
    document.writeln( handle( it => it.push(1) ).length === 1);
}

const q23_12 = () => {
    function handle(callback) {
        const result = [];
        callback( result );
        callback( result );
        return result;
    }
    
    document.writeln( handle( it => it.push(1) ).length === 2);
}

const solveAll23 = () => {
    printQuizSection(23);
    
    solveQuiz(q23_1, "q23_1");
    solveQuiz(q23_2, "q23_2");
    solveQuiz(q23_3, "q23_3");
    solveQuiz(q23_4, "q23_4");
    solveQuiz(q23_5, "q23_5");
    solveQuiz(q23_6, "q23_6");
    solveQuiz(q23_7, "q23_7");
    solveQuiz(q23_8, "q23_8");
    solveQuiz(q23_9, "q23_9");
    solveQuiz(q23_10, "q23_10");
    solveQuiz(q23_11, "q23_11");
    solveQuiz(q23_12, "q23_12");
}
