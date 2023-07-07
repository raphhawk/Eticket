import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <h1 className="text-2xl bg-teal-500 w-fit px-4 m-4 rounded-md text-white">
      Landing Page
    </h1>
  );
};

LandingPage.getInitialProps = async () => {
  const response = await axios.get("/api/users/currentuser");
  return response.data;
};

export default LandingPage;
