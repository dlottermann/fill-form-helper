import {
  fillField,
  verifyCapitalization,
} from '../filler';

describe('filler.js', () => {
  it('should have fillField function defined', () => {
    expect(fillField).toBeDefined();
  });

  it('should not verify capitalization when explicit value is provided', () => {
    const field = document.createElement('input');
    field.setAttribute('type', 'text');
    fillField(field, 'The force is strong with this one!');
    expect(field.value).toEqual('The force is strong with this one!');
  });

  describe('verifyCapitalization()', () => {
    it('should not change string if not one of capitalizable situations', () => {
      expect(verifyCapitalization('radio', null)).toEqual(null);
      expect(verifyCapitalization('email', 'foo@bar.io')).toEqual('foo@bar.io');
    });

    it('should capitalize text types', () => {
      expect(verifyCapitalization('text', 'aayla secura')).toEqual('Aayla Secura');
    });
  });

  describe('text field', () => {
    it('should fill a text field with ‘Ahsoka Tano’', () => {
      const field = document.createElement('input');
      field.setAttribute('type', 'text');

      fillField(field, 'Ahsoka Tano');
      expect(field.value).toEqual('Ahsoka Tano');
    });

    it('should fill a text field with a generated text', () => {
      const field = document.createElement('input');
      field.setAttribute('type', 'text');

      fillField(field);

      expect(field.value).not.toEqual('undefined');
      expect(field.value.length).toBeGreaterThan(1);
    });

    it('should dispatch the correct event after filled', () => {
      const field = document.createElement('input');
      field.setAttribute('type', 'text');

      const onChange = jest.fn();

      field.addEventListener('change', onChange);
      fillField(field, 'Aayla Secura');

      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('email fields', () => {
    it('should fill email field with provided email', () => {
      const field = document.createElement('input');
      field.setAttribute('type', 'email');

      fillField(field, 'ahsokatano@start.io');

      expect(field.value).toEqual('ahsokatano@start.io');
    });

    it('should fill email field with generated value', () => {
      const field = document.createElement('input');
      field.setAttribute('type', 'email');

      fillField(field);

      expect(field.value).toMatch(/^[a-z]{2,8}@[a-z]{2,8}\.[a-z]{2,4}$/);
    });
  });
});

