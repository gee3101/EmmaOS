import { CreativeBrief } from "../../types/CreativeBrief";
import { AdCompositionSpecification } from "../../types/AdCompositionSpecification";

import { getPlatformRules } from "./PlatformRules";

export class AdCompositionEngine {

    static build(

        brief: CreativeBrief

    ): AdCompositionSpecification {

        //------------------------------------------
        // Platform Rules
        //------------------------------------------

        const rules =
            getPlatformRules("facebook");

        //------------------------------------------
        // Creative Direction
        //------------------------------------------

        const objective =
            brief.objective ||
            "Create a premium Facebook advertisement.";

        const visualObjective =
            "Create a premium Facebook feed advertisement where the product is the unmistakable visual hero.";

        const compositionIntent =
            "Compose the entire advertisement around an invisible hero product that will be composited later. Every visual decision should reinforce the product as the primary focus.";

        const photographerBrief =
            "Imagine the hero product is already sitting inside the reserved presentation area during the photoshoot. Compose the image exactly as if photographing a luxury commercial advertisement. The environment, subjects, lighting, framing, and composition should all support the product rather than compete with it.";

        //------------------------------------------
        // Return Composition Specification
        //------------------------------------------

        return {

            //----------------------------------
            // Platform
            //----------------------------------

            platform:
                "facebook",

            //----------------------------------
            // Advertisement Style
            //----------------------------------

            creativeStyle:
                "hero_product",

            objective,

            visualObjective,

            compositionIntent,

            photographerBrief,

            //----------------------------------
            // Product
            //----------------------------------

            productDominance:
                "hero",

            heroProductCoverage:
                rules.heroCoverage,

            heroProductDescription:
                "Treat the reserved presentation area as though a premium commercial product already exists there. The product is invisible during background generation but should remain the visual centerpiece of the advertisement.",

            heroProductPriority:
                100,

            breathingRoomPercent:
                12,

            //----------------------------------
            // Viewer Attention
            //----------------------------------

            viewerAttention:
                "product-first",

            visualHierarchy: [

                "product",

                "headline",

                "people",

                "environment"

            ],

            eyeFlow: [

                "product",

                "headline",

                "cta"

            ],

            //----------------------------------
            // Scene
            //----------------------------------

            peopleCount:
                2,

            subjectScale:
                rules.preferredSubjectScale,

            cameraDistance:
                rules.preferredCamera,

            negativeSpace:
                rules.preferredNegativeSpace,

            //----------------------------------
            // Subject Direction
            //----------------------------------

            subjectPurpose:
                "Support and emphasize the hero product without visually overpowering it.",

            subjectFocus:
                "product",

            subjectInteraction:
                "Subjects should naturally face, frame, admire, present, or gesture toward the invisible hero product while leaving the presentation area unobstructed.",

            //----------------------------------
            // Environment
            //----------------------------------

            environmentPurpose:
                "Provide context and emotional storytelling while keeping the hero product visually dominant.",

            environmentComplexity:
                "minimal",

            distractionLevel:
                "low",

            //----------------------------------
            // Presentation Area
            //----------------------------------

            /*
             * Canvas percentages (0–100)
             *
             * This area is intentionally reserved
             * for the product composite.
             */

            presentationX:
                30,

            presentationY:
                22,

            presentationWidth:
                40,

            presentationHeight:
                56,

            //----------------------------------
            // Subject Placement
            //----------------------------------

            leftSubjectPosition:
                "Outer left third facing center",

            rightSubjectPosition:
                "Outer right third facing center",

            //----------------------------------
            // Camera
            //----------------------------------

            cameraAngle:
                "Eye Level",

            cameraHeight:
                "Chest Height",

            focalLength:
                "85mm",

            depthOfField:
                "Shallow",

            //----------------------------------
            // Mobile Optimization
            //----------------------------------

            mobileOptimized:
                rules.mobileOptimized,

            safeReadingDistance:
                rules.safeReadingDistance,

        };

    }

}