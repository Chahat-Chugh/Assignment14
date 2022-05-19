import {} from "mocha";
import {expect,createStubInstance, StubbedInstanceWithSinonAccessor, sinon} from '@loopback/testlab';
import { CustomerRepository} from '../../repositories';
import { CustomerUserController} from '../../controllers';
import { HasManyRepositoryFactory } from "@loopback/repository";
import { User } from "../../models";

describe('Role controller',()=>{
    let repository: StubbedInstanceWithSinonAccessor<CustomerRepository>;
    let controller: CustomerUserController;

    beforeEach(() => {
        repository = createStubInstance(CustomerRepository);
        controller = new CustomerUserController(repository);
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

}) 