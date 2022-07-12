import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import QuestionsList from "./pages/QuestionsList";

const App = () => {
  const { formSaved } = useSelector((store) => store.form);

  return (
    <>
      <Navbar />
      {!formSaved ? <Main /> : <QuestionsList />}
    </>
  );
};

export default App;
