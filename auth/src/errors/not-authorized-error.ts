import { CustomErrors } from "./custom-errors";

export class NotAuthorizedError extends CustomErrors {
  statusCode = 401;
  constructor() {
    super("Not Authorized");
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  serializeErrors = () => [{ message: "Not Authorized" }];
}
