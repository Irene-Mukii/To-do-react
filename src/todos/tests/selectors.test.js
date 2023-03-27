import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';

describe('The get completed todo selectot', ()=>{
    it('returns only completed todos',()=>{

        const fakeTodos = [{
            text: 'Say Hello',
            isCompleted: true,
        },{
            text: 'say goodbye',
            isCompleted: false,
        },{
            text: 'fight a bear',
            isCompleted: false,
        }];

        const expected = [{
            text: 'Say Hello',
            isCompleted: true,
        }];

        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).deep.equal(expected);
    })
})