import { FacebookRules } from "./FacebookRules";

export function getPlatformRules(platform: string) {

    switch (platform.toLowerCase()) {

        case "facebook":
            return FacebookRules;

        default:
            return FacebookRules;

    }

}