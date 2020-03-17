import {
  genStr,
  genTwoWords,
} from '../gen-data';

describe('gen-data.js', () => {
  describe('genStr()', () => {
    it('should generate string of length 7', () => {
      expect(
        genStr('aeiou', 7),
      ).toHaveLength(7);
    });

    it('should generate string with the specified chars only', () => {
      expect(
        genStr('AEIOU', 5).split(''),
      ).toEqual(
        expect.not.arrayContaining('BCDFGHJKLMNPQRSTVWXZ'.split('')),
      );
    });
  });

  describe('genTwoWords()', () => {
    it('should generate name and surname as a single string', () => {
      expect(genTwoWords(5)).toMatch(/[a-z]{5} [a-z]{5}/);
    });
  });
});
