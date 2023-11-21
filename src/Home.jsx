import { navigate } from "wouter/use-location";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <button  onClick={() => navigate("/")}>Go Back</button>
    </>
  );
}

export default Home;
