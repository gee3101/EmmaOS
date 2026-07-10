import { CreativeBrief } from "../types/CreativeBrief";

import { SceneComposition } from "../types/SceneComposition";

import { buildAdComposition } from "./buildAdComposition";

import { buildSceneComposition } from "./buildSceneComposition";

export function buildSceneCompositionEngine(

    brief: CreativeBrief

): SceneComposition {

    //------------------------------------------
    // Advertisement Composition
    //------------------------------------------

    const adComposition =
        buildAdComposition(brief);

    //------------------------------------------
    // Scene Composition
    //------------------------------------------

    return buildSceneComposition(

        brief,

        adComposition

    );

}