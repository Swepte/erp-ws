import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersManagementService } from 'src/users-management/users-management.service';

@Injectable()
export class AuthService {
  constructor(private userManagement: UsersManagementService) {}

  public async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userManagement.findOne(username);
    if (user?.hash !== pass) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
