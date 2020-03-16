const { readFileSync } = require('fs');
const { resolve } = require('path');

describe('renders html in jsdom', function() {
  let body;

  beforeEach(() => {
    const html = readFileSync(resolve(__dirname, './sample-form-1.html'), 'utf8');
    window.document.body.innerHTML = html.toString();;
    body = window.document.body;
  });

  it('should have a form with one input and a submit button', function() {
    expect(body.querySelectorAll('form')).toHaveLength(1);
    expect(body.querySelectorAll('input[type="text"]')).toHaveLength(1);
    expect(body.querySelectorAll('button[type="submit"]')).toHaveLength(1);
  });

  it('should have the form-1 sample DOM nodes', () => {
    expect(body).toMatchSnapshot();
  });
});

