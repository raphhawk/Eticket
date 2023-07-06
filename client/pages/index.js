const LandingPage = ({ color }) => {
  console.log("I am in the Component", color);
  return (
    <h1 className="text-2xl bg-teal-500 w-fit px-4 m-4 rounded-md text-white">
      Landing Page
    </h1>
  );
};

LandingPage.getInitialProps = () => {
  console.log("I am on the server");
  return { color: "red" };
};

export default LandingPage;
