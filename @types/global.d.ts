declare global {
  interface BaseTestData {
    username: string;
    password: string;
  }
  interface CheckoutTestData extends BaseTestData {
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

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "../../test-data/CheckoutTestData.json" {
  const value: CheckoutTestData;
  export default value;
}

declare module "../../test-data/LoginFailTestData.json" {
  const value: LoginFailTestData;
  export default value;
}

declare module "../../test-data/SortingTestData.json" {
  const value: LoginFailTestData;
  export default value;
}

export {};
