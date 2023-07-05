import { useState } from "react";

import useRequest from "../../hooks/use-request";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: {
      email,
      password,
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    doRequest();
  };

  return (
    <form onSubmit={onSubmit} className="w-fit m-4">
      <h1 className="text-4xl mb-4">Sign Up</h1>
      <div className="flex flex-col my-2">
        <lable className="text-slate-600 mb-2">Email Address</lable>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-1 ring-2 ring-gray-200 outline-none focus:ring-blue-200 focus:ring-4 transition delay-50 rounded-sm w-80"
        />
      </div>
      <div className="flex flex-col my-2">
        <lable className="text-slate-600 mb-2">Password</lable>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-1 ring-2 ring-gray-200 outline-none focus:ring-blue-200 focus:ring-4 transition delay-50 rounded-sm w-80"
        />
      </div>
      {errors}
      <button className="bg-blue-500 hover:bg-blue-600 ring-0 hover:ring-4 hover:ring-blue-200 py-2 px-4 rounded-md text-white my-4 transition delay-50">
        Sign Up
      </button>
    </form>
  );
};
