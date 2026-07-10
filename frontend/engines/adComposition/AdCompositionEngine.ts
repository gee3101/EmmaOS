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

            objective:
                brief.objective,

            //----------------------------------
            // Product
            //----------------------------------

            productDominance:
                "hero",

            heroProductCoverage:
                rules.heroCoverage,

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
            // Presentation Area
            //----------------------------------

            /*
             * Percentages of the canvas.
             *
             * These values intentionally leave a
             * large empty presentation area for
             * the product composite.
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
            // Composition
            //----------------------------------

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
            // Mobile
            //----------------------------------

            mobileOptimized:
                rules.mobileOptimized,

            safeReadingDistance:
                rules.safeReadingDistance,

        };

    }

}