"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const controllers_1 = require("../../controllers");
const repositories_1 = require("../../repositories");
describe('UserController', () => {
    let repository;
    beforeEach(() => {
        repository = (0, testlab_1.createStubInstance)(repositories_1.UserRepository);
    });
    it('gets users properly', async () => {
        const findStub = repository.find;
        const controller = new controllers_1.UserController(repository);
        const arr = [
            {
                "id": 34,
                "firstname": "Neil",
                "middlename": "-",
                "lastname": "Irani",
                "email": "neil.irani@gmail.com",
                "phone": "408-10000",
                "address": "Australia",
                "created_on": "2022-12-05T11:59:24.000Z",
                "modified_on": "2022-05-14T18:20:28.000Z",
                "role": "superadmin",
                "customerId": 1
            },
            {
                "id": 36,
                "firstname": "Tom",
                "middlename": "-",
                "lastname": "Hanks",
                "email": "tom.hanks123@gmail.com",
                "phone": "408-11100",
                "address": "USA",
                "created_on": "2022-03-18T17:31:50.000Z",
                "modified_on": "2022-05-14T18:17:32.000Z",
                "role": "admin",
                "customerId": 2
            },
        ];
        findStub.resolves(arr);
        const details = await controller.find();
        (0, testlab_1.expect)(details).to.equal(arr);
        (0, testlab_1.expect)(findStub).to.be.calledOnce;
    });
    it('deletes users properly', async () => {
        const findStub = repository.deleteById;
        const controller = new controllers_1.UserController(repository);
        const arr = [
            {
                "id": 34,
                "firstname": "Neil",
                "middlename": "-",
                "lastname": "Irani",
                "email": "neil.irani@gmail.com",
                "phone": "408-10000",
                "address": "Australia",
                "created_on": "2022-12-05T11:59:24.000Z",
                "modified_on": "2022-05-14T18:20:28.000Z",
                "role": "superadmin",
                "customerId": 1
            },
            {
                "id": 36,
                "firstname": "Tom",
                "middlename": "-",
                "lastname": "Hanks",
                "email": "tom.hanks123@gmail.com",
                "phone": "408-11100",
                "address": "USA",
                "created_on": "2022-03-18T17:31:50.000Z",
                "modified_on": "2022-05-14T18:17:32.000Z",
                "role": "admin",
                "customerId": 2
            },
        ];
        // findStub.resolves(arr);
        console.log(findStub.resolves(arr));
        const details = await controller.deleteById(34);
        // expect(details).to.equal(arr);
        (0, testlab_1.expect)(findStub).to.be.calledOnce;
    });
});
//# sourceMappingURL=user.controller.acceptance.js.map