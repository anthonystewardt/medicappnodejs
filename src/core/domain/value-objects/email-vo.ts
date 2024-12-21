import { ValueObject } from "./value-object";


export class EmailVO extends ValueObject<string> {


  constructor(email: string) {
    super(email);
  }

  private static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static create(email: string): EmailVO {
    if (!this.validateEmail(email)) {
      throw new Error("Invalid email");
    }
    return new EmailVO(email);
  }


}




