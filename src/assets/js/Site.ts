export const name = "Money with Confidence";
export const title = `${name} - Financial Coaching with Natasha Carrillo`;
export const domain = "moneywithconfidence.com";

export interface PageAttributes {
  title: string;
  description: string;
  image: PageImageAttributes;
}

export interface PageImageAttributes {
  fileName: string;
  alt: string;
}
