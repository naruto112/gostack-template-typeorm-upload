import * as TransactionsRepository from "./TransactionsRepository"
// @ponicode
describe("getBalance", () => {
    let inst: any

    beforeEach(() => {
        inst = new TransactionsRepository.default()
    })

    test("0", async () => {
        await inst.getBalance()
    })
})
