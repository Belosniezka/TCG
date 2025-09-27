export interface Checkout {
  delivery: {
    country: string;
    city: string;
    address: string;
    zipCode: string;
  };
  personalInfo: {
    firstName: string;
    lastName: string;
  };
  date: Date;
}
