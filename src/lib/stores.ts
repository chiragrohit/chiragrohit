import { writable } from "svelte/store";

export const theme = writable("light");

function sidebarStore() {
  const { subscribe, set, update } = writable({
    leftOpen: true,
    rightOpen: true,
  });

  function toggleLeft() {
    update((state) => ({ ...state, leftOpen: !state.leftOpen }));
  }

  function toggleRight() {
    update((state) => ({ ...state, rightOpen: !state.rightOpen }));
  }

  return { subscribe, toggleLeft, toggleRight };
}

export const sidebar = sidebarStore();
