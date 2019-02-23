import { sum } from '../src';

describe('basic', () => {
  test('sum function works', () => {
    expect(sum(1, 2)).toBe(3);
  });
});