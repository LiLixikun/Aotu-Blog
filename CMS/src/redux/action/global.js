export const type = {
    GLOBAL_CONFIG: "GLOBAL_CONFIG"
}

export function setGlobalConfig(globalConfig){
    return {
        type: type.GLOBAL_CONFIG,
        globalConfig
    }
}