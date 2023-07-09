import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1 className="text-2xl m-4 text-teal-600">You are signed in</h1>
  ) : (
    <h1 className="text-2xl m-4 text-red-400">You are not signed in </h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  console.log("LandingPage");
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

export default LandingPage;
