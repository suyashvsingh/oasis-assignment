import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestion, toggleModal } from "../features/form/formSlice";
import toast from "react-hot-toast";

const Modal = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    type: "checkbox",
    label: "",
    inputType: "",
    option: "",
    options: [],
  });

  const handleOnChange = (e) => {
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleOnClickAddOption = () => {
    setState((prevState) => {
      let options = [...state.options, state.option];
      return { ...prevState, option: "", options };
    });
    toast.success("Option added", {
      duration: 1000,
    });
  };

  const handleOnClickAddQuestion = () => {
    dispatch(addQuestion(state));
    dispatch(toggleModal());
    toast.success("Question added", {
      duration: 1000,
    });
  };

  const optionsList = state.options.map((option, idx) => {
    return (
      <div className="my-2" key={idx}>
        <div className="font-normal list-item mx-8">{option}</div>
      </div>
    );
  });

  return (
    <div className="my-8 p-8 bg-slate-900  rounded-xl flex flex-col">
      <label htmlFor="type" className="mr-4 mb-2 font-bold">
        Select type:
      </label>
      <select
        name="type"
        id="type"
        value={state.type}
        className="text-slate-900 p-1 rounded w-fit mb-4"
        onChange={handleOnChange}
      >
        <option value="checkdown">Checkbox</option>
        <option value="dropdown">Dropdown</option>
      </select>
      <label htmlFor="input" className="mr-4 mb-2 font-bold">
        Type label here:
      </label>
      <input
        type="text"
        name="label"
        id="label"
        value={state.label}
        className="text-slate-900 p-1 rounded w-full mb-4 max-w-[1000px]"
        placeholder="Label"
        onChange={(e) => handleOnChange(e)}
      />
      <label htmlFor="input--type" className="mr-4 mb-2 font-bold">
        Specify the input type:
      </label>
      <input
        type="text"
        id="inputType"
        name="inputType"
        value={state.inputType}
        className="text-slate-900 p-1 rounded w-full mb-4 max-w-[1000px]"
        placeholder="Input type"
        onChange={(e) => handleOnChange(e)}
      />
      <label htmlFor="input--type" className="mr-4 mb-2 font-bold">
        Options: {optionsList}
      </label>
      <input
        type="text"
        id="option"
        name="option"
        value={state.option}
        className="text-slate-900 p-1 rounded w-full mb-4 max-w-[1000px]"
        placeholder="Type option here"
        onChange={(e) => handleOnChange(e)}
      />
      <div className="flex">
        <button
          className="rounded-xl bg-slate-600 px-4 py-2 hover:bg-slate-700 w-50 mr-4 my-4"
          onClick={handleOnClickAddOption}
        >
          Add Option
        </button>
        <button
          className="rounded-xl bg-slate-600 px-4 py-2 hover:bg-slate-700 w-50 mr-4 my-4"
          onClick={handleOnClickAddQuestion}
        >
          Add Question
        </button>
      </div>
    </div>
  );
};

export default Modal;
