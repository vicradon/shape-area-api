class UnsuppliedParameterError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnsuppliedParameterError";
  }
}

module.exports = {
  UnsuppliedParameterError,
};
