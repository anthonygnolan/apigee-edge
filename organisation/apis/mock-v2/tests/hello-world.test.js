const functions = require("../apiproxy/resources/jsc/hello-world");

let mock = jest.fn()

global.context = {
    getVariable: function(flowVariable) {
        return flowVariable;
    },
    setVariable: mock
};

describe("Hello World", () => {
    test("Validate hello world response", () => {
        functions.helloWorld([])
        expect(context.setVariable).toHaveBeenCalledTimes(1);
        expect(context.setVariable).toHaveBeenCalledWith("message.content", '{"message":"hello world"}');
    });
})