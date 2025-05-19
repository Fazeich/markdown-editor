import { createEvent, createStore } from "effector";
import { DEFAULT_MARKDOWN } from "../lib/constants";

export interface IEditorStore {
  editorText: string;
  isAutosaving: boolean;
}

export const $editor = createStore<IEditorStore>({
  editorText: localStorage.getItem("markdown") || DEFAULT_MARKDOWN,
  isAutosaving: false,
});

export const changeEditor = createEvent<Partial<IEditorStore>>();

$editor.on(changeEditor, (state, payload) => {
  return {
    ...state,
    ...payload,
  };
});
