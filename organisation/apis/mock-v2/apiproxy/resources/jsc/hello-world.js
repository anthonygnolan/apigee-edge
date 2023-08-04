const functions = {
    helloWorld: () => {
        context.setVariable("message.content", JSON.stringify({message: 'hello world',}));
    }
};

(function () {
    // Only export when running in Node environment
    if (typeof module === "object" && module) {
        module.exports = functions;
    } else {
        functions.helloWorld();
    }
}());