import { IsNotEmpty } from 'class-validator/types/decorator/decorators';
import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignupRequestDto {
  @ApiProperty({
    example: 'test',
    description: '비밀번호',
  })
  @IsString()
  @IsNotEmpty()
  public userId: string;
}
