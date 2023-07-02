export interface ContactForm {
  name: string;
  email: string;
  whatAreYouInterestedIn: string;
  whereDidYouHearAboutMwc: string;
  comment: string;
}

export function isValidEmail(email: string): boolean {
  if (email.length < 5) {
    return false;
  }

  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
