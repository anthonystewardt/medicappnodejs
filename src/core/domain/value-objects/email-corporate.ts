import { EmailVO } from "./email-vo";
import { ValueObject } from "./value-object";

export class EmailCorporateVO extends ValueObject<string> {
  constructor(email: string) {
    super(email);
  }

  static validateEmailCorporate(email: string): boolean {
    // contain @company.com
    return email.includes("@company.com");
  }

  static create(email: string): EmailCorporateVO {
    if (!this.validateEmailCorporate(email)) {
      throw new Error("Invalid email corporate");
    }
    return new EmailCorporateVO(email);
  }



}



