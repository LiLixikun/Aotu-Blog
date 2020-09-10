export const type = {
    MENU_KEY: "MENU_KEY"
}

export function setMenuKey(menuKey){
    return {
        type: type.MENU_KEY,
        menuKey
    }
}

export { setGlobalConfig } from './global'