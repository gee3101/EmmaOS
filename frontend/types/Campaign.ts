export interface Campaign {

  //---------------------------------------
  // Facebook
  //---------------------------------------

  facebookPrimaryText: string;

  facebookHeadline: string;

  facebookDescription: string;

  //---------------------------------------
  // Instagram
  //---------------------------------------

  instagramCaption: string;

  instagramHashtags: string[];

  //---------------------------------------
  // Email
  //---------------------------------------

  emailSubject: string;

  emailBody: string;

  //---------------------------------------
  // Landing Page
  //---------------------------------------

  landingHeadline: string;

  landingSubheadline: string;

  //---------------------------------------
  // Creative Direction
  //---------------------------------------

  imagePrompt: string;

  videoPrompt: string;

  //---------------------------------------

  callToAction: string;

}