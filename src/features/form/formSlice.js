// eslint-disable-next-line
import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  showModal: false,
  formSaved: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
    addQuestion: (state, { payload }) => {
      state.questions.push(payload);
    },
    saveForm: (state, action) => {
      state.formSaved = true;
    },
  },
});

export const { toggleModal, addQuestion, saveForm } = formSlice.actions;

export default formSlice.reducer;
