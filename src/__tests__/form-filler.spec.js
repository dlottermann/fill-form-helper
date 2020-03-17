import {
  handleForm,
} from '../form-filler';

describe('form-filler.js', () => {
  it('should bail out if not provided with a form element', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => null);
    handleForm(null);
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
  });

  it('should work', () => {
    const html = `
      <form>
        <input type='text' name='fullname' />
        <input type='text' name='company' />
      </form>
    `;

    document.body.innerHTML = html;

    const form = document.forms[0];

    handleForm(form);

    expect(form.firstElementChild.value).toMatch(/[A-Za-z]{2,10} [A-Z-a-z]{2,10}/);
    expect(form.lastElementChild.value).toMatch(/[A-Za-z]{2,10} [A-Z-a-z]{2,10}/);
  });
});
