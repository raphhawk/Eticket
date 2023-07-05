import { useState } from "react";

export default ({ url, method, body }) => {
  const [errors, setErrors] = useState(null);
  const doRequest = async () => {
    try {
      const response = await axios[method](url, body);
      return response.data;
    } catch (err) {
      setErrors(
        <div className="bg-red-300 py-2 px-8 rounded-md flex flex-col">
          <h1 className="text-red-900 text-2xl">Ooops...</h1>
          <ul className="text-red-800 list-disc text-sm">
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };
  return { doRequest, errors };
};
