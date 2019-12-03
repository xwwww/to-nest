import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './local.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './contants';
import { JwtStrategy } from './jwt.stategy';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    UsersModule, 
    PassportModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600000s' }
    })
  ],
  exports: [AuthService]
})
export class AuthModule {}
