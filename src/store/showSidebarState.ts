import { atom } from "recoil";

export const showSideBarState = atom<boolean>({
    key: "showSideBarState",
    default: false
})