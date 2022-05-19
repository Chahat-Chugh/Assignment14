"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const repositories_1 = require("../../repositories");
const controllers_1 = require("../../controllers");
describe('Role controller', () => {
    let repository;
    let controller;
    beforeEach(() => {
        repository = (0, testlab_1.createStubInstance)(repositories_1.CustomerRepository);
        controller = new controllers_1.CustomerUserController(repository);
    });
    /*
        it('should get all roles',async()=>{
            const findStub = repository.stubs.customerUsers ;
            const arr = [
                {
                  "id": 183,
                  "firstname": "Chahat",
                  "middlename": "-",
                  "lastname": "Chugh",
                  "email": "c12@gmail.com",
                  "phone": "98219011",
                  "address": "India",
                  "created_on": "2022-05-13T19:09:18.577Z",
                  "modified_on": "2022-05-14T20:20:36.000Z",
                  "role": "subscriber",
                  "customerId": 7
                }
            ];
            
            findStub.resolves(arr);
            const details = await controller.find(7);
            expect(details).to.deepEqual(arr);
            sinon.assert.calledWithMatch(findStub,7);
        }); */
});
//# sourceMappingURL=customer-user.controller.acceptance.js.map