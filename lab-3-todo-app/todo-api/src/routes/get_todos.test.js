const getTodos = require("./get_todos");
const Todo = require("../models/todo");

describe("Get Todos", () => {
  const mockNext = jest.fn();
  const mockJson = jest.fn();
  const req = {};
  const res = { json: mockJson };

  beforeEach(() => {
    mockNext.mockClear();
    mockJson.mockClear();
  });

  it("Returns data", async () => {
    jest.spyOn(Todo, "find").mockReturnValue(Promise.resolve({ data: "data" }));

    await getTodos(req, res, mockNext);

    expect(mockNext).not.toHaveBeenCalled();
    expect(mockJson).toHaveBeenCalledTimes(1);
    expect(mockJson).toHaveBeenCalledWith({ data: "data" });
  });

  it("Fails", async () => {
    jest.spyOn(Todo, "find").mockReturnValue(Promise.reject(mockNext));

    await getTodos(req, res, mockNext);

    expect(mockJson).not.toHaveBeenCalled();
    expect(mockNext).toHaveBeenCalledTimes(1);
  });
});
