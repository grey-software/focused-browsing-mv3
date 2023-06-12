import { useStorageLocal } from "~/composables/useStorageLocal";
import { AppState, FocusStates, FocusState } from "~/focus/types";

const initialFocusStates: FocusStates = {
    Twitter: FocusState.Focused,
    LinkedIn: FocusState.Focused,
    Youtube: FocusState.Focused,
    Unsupported: FocusState.Unsupported,
    Access: FocusState.Unsupported
}

const initialAppState: AppState = {
    isSponsor: true,
    focusStates: initialFocusStates
};

export const appStateStorage = useStorageLocal("fb-asb-1", JSON.stringify(initialAppState));
