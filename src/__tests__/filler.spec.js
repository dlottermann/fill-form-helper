import { fillField } from '../filler';

describe('filler.js', () => {
  it('should have fillField function defined', () => {
    expect(fillField).toBeDefined();
  });

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

