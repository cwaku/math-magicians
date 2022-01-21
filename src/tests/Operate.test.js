import operate from '../logic/operate';

describe('test the calculator operations', () => {
  test('Test if the addition(+) operator works', () => {
    const answer = operate(1, 2, '+');

    expect(answer).toBe('3');
  });

  test('Test the multiplication operation works(x)', () => {
    const answer = operate(4, 2, 'x');
    expect(answer).toBe('8');
  });
  

  test('Test the divide operation works(÷)', () => {
    const answer = operate(4, 2, '÷');
    expect(answer).toBe('2');
  });


  test('Test the divide operation works(-)', () => {
    const answer = operate(8, 3, '-');
    expect(answer).toBe('5');
  });

});
