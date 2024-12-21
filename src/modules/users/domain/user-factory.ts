import { EmailCorporateVO } from "../../../core/domain/value-objects/email-corporate";
import { EmailVO } from "../../../core/domain/value-objects/email-vo";
import { User } from "./user";


export class UserFactory {

  static create(
    id: string,
    name: string,
    email: string,
    password: string,
    roles: string[],
  ): User {
    const emailVO = EmailVO.create(email);
    const emailCorporateVO = EmailCorporateVO.create(email);
    // const isValidatePassword = this.validatePassword(password);
    const isValidateRole = this.validateRole(roles);
    const isValidateEmailCorporate = this.validateEmailCorporate(email);

    if (!isValidateRole) {
      throw new Error("Invalid role");
    }

    if (!isValidateEmailCorporate) {
      throw new Error("Invalid email corporate");
    }



    return new User(id, name, emailVO.getValue(), password, roles, new Date());
  }

  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validateEmailCorporate(email: string): boolean {
    // contain @company.com
    return email.includes("@company.com");
  }

  static validatePassword(password: string): boolean {
    return password.length >= 8;
  }

  static validateRole(role: string[]): boolean {
    return role.length > 0;
  }



}