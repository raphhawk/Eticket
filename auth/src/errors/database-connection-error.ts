import { CustomErrors } from "./custom-errors";

export class DatabaseConnectionError extends CustomErrors {
  statusCode = 500;
  reason = "Error connecting to database";

  constructor() {
    super("Error Connecting to db");
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors = () => {
    return [{ message: this.reason }];
  };
}
