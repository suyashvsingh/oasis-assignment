import { useSelector } from "react-redux";

const QuestionsList = () => {
  const { questions } = useSelector((store) => store.form);

  return (
    <div className="text-fuchsia-50 w-full p-4 mt-4">
      {questions.map((question, idx) => {
        const { type, label, options } = question;
        if (type === "dropdown") {
          return (
            <div key={idx}>
              <label className="mr-4 mb-2 font-bold">{label}</label>
              <select className="text-slate-900 p-1 rounded w-fit mb-4">
                {options.map((option, idx) => {
                  return <option key={idx}>{option}</option>;
                })}
              </select>
            </div>
          );
        } else {
          return (
            <div key={idx}>
              <label className="mr-4 mb-2 font-bold">{label}</label>
              {options.map((option, idx) => {
                return (
                  <label className="mr-4" key={idx}>
                    {option}
                    <input type="checkbox" className="ml-2" />
                  </label>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

export default QuestionsList;
