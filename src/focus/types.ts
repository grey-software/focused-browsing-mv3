export enum FocusState {
  Focused = 0,
  Unfocused = 1,
  Premium = 2,
  Unsupported
}

export enum Website {
  Access = "Access",
  Twitter = "Twitter",
  LinkedIn = "LinkedIn",
  Youtube = "Youtube",
  Unsupported = "Unsupported",
}

export interface AppState {
  isSponsor: boolean,
  focusStates: FocusStates
}

export interface FocusStates extends Record<Website, FocusState> {
  Twitter: FocusState
  LinkedIn: FocusState
  Youtube: FocusState
}

export interface KeyPressedState extends Record<string, boolean> {
  ShiftLeft: boolean
  ShiftRight: boolean
}
