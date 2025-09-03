declare global {
  interface BaseTestData {
    username: string;
    password: string;
  }
  interface CheckoutTestData extends BaseTestData {
    username: string;
    password: string;
    productName1: string;
    productName2: string;
    firstName: string;
    lastName: string;
    zipCode: string;
    price: number;
  }
  interface LoginFailTestData extends BaseTestData {}
  interface SortingTestData extends BaseTestData {}
}

export {};
