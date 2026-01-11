# jest-testing-practice

---

1. Writing a sample test using jest

"describe" is used to contain a test suit.

"it" is used to describe a test case.

expect().toBe()
expect().toEqual()
.toThrow()

2. Testing asynchronous code.

need to use the kewords like resolves.toBe() or rejects.toThrowError()

3. Mocking and Spying

const mockFunc = jest.fn((x) => x + 43)
expect(mockFunc(12)).toBe(55)
