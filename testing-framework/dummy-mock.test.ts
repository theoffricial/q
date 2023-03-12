import { myFunc } from './my-module';

jest.mock('./my-module', () => ({
    myFunc: () => 21,
}))

it('should that jest.mock works', () => {
   expect(myFunc()).toBe(21)
})