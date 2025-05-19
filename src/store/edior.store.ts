import { createEvent, createStore } from "effector";

export interface IEditorStore {
  editorText: string;
}

export const $editor = createStore<IEditorStore>({
  editorText: "",
});

export const changeEditor = createEvent<Partial<IEditorStore>>();

$editor.on(changeEditor, (state, payload) => {
  return {
    ...state,
    ...payload,
  };
});
