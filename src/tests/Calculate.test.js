import calculate from '../logic/calculate.js';

describe('Calculates 2 + 1 correctly', () => {
  test('Clicked on 1', () => {
    const object = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(object, '1').next).toBe('1');
  });

  test('Clicked on +', () => {
    const object = {
      total: null,
      next: '1',
      operation: null,
    };
    expect(calculate(object, '+').operation).toBe('+');
  });

  test('Clicked on 2', () => {
    const object = {
      total: '1',
      next: null,
      operation: '+',
    };
    expect(calculate(object, '2').next).toBe('2');
  });

  test('Clicked on =', () => {
    const object = {
      total: '1',
      next: '2',
      operation: '+',
    };
    expect(calculate(object, '=').total).toBe('3');
  });
});
