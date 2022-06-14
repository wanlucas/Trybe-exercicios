const { fatorial, MMC, removeItem } = require('./script');

describe('fatorial function', () => {
  test('if fatorial function exists', () => {
    expect(typeof fatorial).toBe('function');
  });
  
  it('!4 is 24', () => {
    expect(fatorial(4)).toBe(24);
  });  

  it('!8 is 40320', () => {
    expect(fatorial(8)).toBe(40320);
  });
});

describe('MMC function', () => {
  test('if MMC function exists', () => {
    expect(typeof MMC).toBe('function');
  });
  
  test('if MMC of 4 and 6 is 12', () => {
    expect(MMC([4, 6])).toBe(12); 
  });

  test('if MMC of 8, 15 and 23 is 2760', () => {
    expect(MMC([8, 15, 23])).toBe(2760); 
  });

  test('if MMC of 123, 34, 234 and 23 is 3751254', () => {
    expect(MMC([123, 34, 234, 23])).toBe(3751254); 
  });
});

describe('RemoveItem function', () => {
  test('removeItem([1, 2, 3, 4], 3) returns [1, 2, 4]', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('removeItem([1, 2, 3, 4], 3) does not return [1, 2, 3, 4]', () => {
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('removeItem([1, 2, 3, 4], 5) return [1, 2, 3, 4]', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});