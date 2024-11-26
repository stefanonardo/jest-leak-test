import { testFoo } from "./aws-sdk-imports";

describe("memory leak", () => {
  beforeEach(() => {
    testFoo();
  });

  it("1", () => {
    return;
  });
});
