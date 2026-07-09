import { CreativeBrief } from "../types/CreativeBrief";
import { SceneSpecification } from "../types/SceneSpecification";

import { directScene } from "./sceneDirector";

/**
 * ------------------------------------------
 * Scene Specification Builder
 * ------------------------------------------
 *
 * Converts a CreativeBrief into the canonical
 * SceneSpecification used by every rendering
 * pipeline.
 *
 * This is intentionally a thin orchestration
 * layer. All creative reasoning belongs inside
 * the directors. Providers (OpenAI, Imagen,
 * Flux, Composite Renderer, etc.) consume the
 * SceneSpecification—not the CreativeBrief.
 */

export function buildSceneSpecification(
  brief: CreativeBrief
): SceneSpecification {

  //------------------------------------------
  // Scene Director
  //------------------------------------------

  const scene =
    directScene(brief);

  //------------------------------------------
  // Return
  //------------------------------------------

  return scene;

}