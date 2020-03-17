import {
  handleForm,
} from './form-filler';

/**
 * Boostraps the filling up of the form.
 *
 * @param {HTMLFormElement} form
 */
const init = (form) => {
  return handleForm(form);
};

export {
  init,
};
