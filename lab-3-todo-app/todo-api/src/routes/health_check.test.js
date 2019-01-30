const healthCheck = require("./health_check");

describe("health check", () => {
  const resMock = jest.fn();

  beforeEach(() => {
    resMock.mockClear();
  });

  it("should send status as UP as response", () => {
    const req = {};
    const res = { send: resMock };
    healthCheck(req, res);
    expect(resMock).toHaveBeenCalled();
    expect(resMock).toHaveBeenCalledWith({ status: "UP" });
  });
});
