import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class UserForgotPasswordDto {
  @ApiProperty()
  @IsString()
  email: string;
}