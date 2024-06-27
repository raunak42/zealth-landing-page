import { atom } from "recoil";

export const showAppbarState = atom<boolean>({
    key: "showAppbarState",
    default: true
})