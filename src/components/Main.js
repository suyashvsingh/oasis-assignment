import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal, saveForm } from "../features/form/formSlice";
import toast from "react-hot-toast";

const Main = () => {
  const { showModal } = useSelector((store) => store.form);
  const dispatch = useDispatch();

  const handleOnClickSaveForm = () => {
    dispatch(saveForm());
    toast.success("Form saved", {
      duration: 1000,
    });
  };

  return (
    <div className="text-fuchsia-50 w-full p-4 mt-4">
      <button
        className="rounded-2xl bg-slate-700 p-4 mr-4 hover:bg-slate-900"
        onClick={() => dispatch(toggleModal())}
      >
        Add new question
      </button>
      <button
        className="rounded-2xl bg-slate-700 p-4 mr-4 hover:bg-slate-900"
        onClick={handleOnClickSaveForm}
      >
        Save form
      </button>
      {showModal && <Modal />}
    </div>
  );
};

export default Main;
