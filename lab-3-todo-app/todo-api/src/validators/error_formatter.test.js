const errorFormatter = require("./error_formatter");

describe("Error Formatter", () => {
  it("should return parameters as a string", () => {
    const params = {
      location: "/",
      msg: "A fancy message",
      param: 1
    };
    const result = errorFormatter(params);
    expect(result).toBe("/[1]: A fancy message");
  });
});
