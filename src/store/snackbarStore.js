"use client";

import React from "react";

// snackbarStore.js
let listeners = [];
let snackbarState = { open: false, message: "", type: "info" };

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export function showSnackbar(message, type = "info") {
  snackbarState = { open: true, message, type };
  emitChange();
}

export function hideSnackbar() {
  snackbarState = { ...snackbarState, open: false };
  emitChange();
}

export function useSnackbarStore() {
  return React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getSnapshot // server snapshot
  );
}

function subscribe(listener) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot() {
  return snackbarState;
}
