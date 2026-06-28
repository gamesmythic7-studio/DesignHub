import { Helmet } from "react-helmet-async";
import { LandingPage } from "./pages/LandingPage.js";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Workspace — Build faster, ship smarter</title>
        <meta
          name="description"
          content="A modern workspace for building and shipping products."
        />
      </Helmet>
      <LandingPage />
    </>
  );
}
