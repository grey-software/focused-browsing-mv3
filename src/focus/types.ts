export enum FocusMode {
  Focused = 0,
  Unfocused = 1,
  Premium = 2,
}

export enum Website {
  Twitter = 'Twitter',
  LinkedIn = 'LinkedIn',
  Youtube = 'Youtube',
}

export interface AppState extends Record<Website, FocusMode> {
  Twitter: FocusMode
  LinkedIn: FocusMode
  Youtube: FocusMode
}

export interface KeyPressedState extends Record<string, boolean> {
  ShiftLeft: boolean
  ShiftRight: boolean
}
