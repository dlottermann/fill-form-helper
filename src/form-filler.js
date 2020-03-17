import {
  fillField,
} from './filler';

/**
 * Iterates over the elements of a form to do the filling.
 *
 * @param {HTMLFormElement} form
 */
const handleForm = (form) => {
  if (!form || !form.elements) {
    // eslint-disable-next-line no-console
    console.error('[FillFormHelper]: parameter to ‘init()’ function is not a form element');
    return;
  }

  Array.prototype.slice.call(form.elements).forEach((field) => {
    fillField(field);
  });
};

export {
  handleForm,
};
