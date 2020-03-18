import {
  capitalizeWords,
} from '../string-helpers';

describe('string-helpers.js', () => {
  describe('capitalizeWords', () => {
    it('should not change already capitalized word', () => {
      expect(capitalizeWords('Aayla Secura')).toEqual('Aayla Secura');
    });

    it('should capitalized single word string', () => {
      expect(capitalizeWords('yoda')).toEqual('Yoda');
    });

    it('should capitalize uncapitalized words', () => {
      expect(capitalizeWords('ahsoka tano')).toEqual('Ahsoka Tano');
    });
  });
});
