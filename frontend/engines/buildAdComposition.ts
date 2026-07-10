import { CreativeBrief } from "../types/CreativeBrief";

import { AdCompositionSpecification } from "../types/AdCompositionSpecification";

import { AdCompositionEngine } from "./adComposition/AdCompositionEngine";

export function buildAdComposition(

    brief: CreativeBrief

): AdCompositionSpecification {

    return AdCompositionEngine.build(brief);

}