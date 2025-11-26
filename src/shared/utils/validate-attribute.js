import ErrorHandler from "../errors/handle-error.js";

export const validateIfIsEmpty = (value) => {
  if (value === null || value === undefined || value === "") {
    throw new ErrorHandler("Validator error: The attribute is required", 400);
  }
  return value;
};
