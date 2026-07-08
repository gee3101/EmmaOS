export interface RelationshipKnowledge {

  //------------------------------------------
  // Identity
  //------------------------------------------

  id: string;

  name: string;

  //------------------------------------------
  // Buyer
  //------------------------------------------

  buyerPersona: string;

  //------------------------------------------
  // Psychology
  //------------------------------------------

  emotionalTriggers: string[];

  painPoints: string[];

  desires: string[];

  objections: string[];

  //------------------------------------------
  // Marketing
  //------------------------------------------

  campaignThemes: string[];

  hooks: string[];

  headlines: string[];

  callToActions: string[];

  //------------------------------------------
  // Creative
  //------------------------------------------

  environments: string[];

  moods: string[];

  lighting: string[];

  visualStyles: string[];

  //------------------------------------------
  // Story
  //------------------------------------------

  storyIdeas: string[];

}