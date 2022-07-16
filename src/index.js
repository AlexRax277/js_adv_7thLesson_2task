class Validator {
  constructor(inputPhonenumber) {
    this.Phonenumber = inputPhonenumber;
  }

  validatePhonenumber() {
    return this.Phonenumber.replace(/\s|\(|\)|[-]/gm, '').replace(/^\8/, '+7');
  }
}

export default Validator;
