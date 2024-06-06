import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignInDto } from './dto/auth-sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('/register/one')
  // create(@Body() createUsersManagementDto: CreateUsersManagementDto) {
  //   return this.usersManagementService.create(createUsersManagementDto);
  // }

  @Post('/login')
  signIn(@Body() authSignInDto: AuthSignInDto) {
    return this.authService.signIn(
      authSignInDto.username,
      authSignInDto.password,
    );
  }

  // @HttpCode(HttpStatus.OK)
  // @Post('login')

  // signIn(@Body() this.signInDto: Record<string, any>) {
  //   return this.authService.signIn
  // }
}
