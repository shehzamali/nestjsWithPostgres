import { IsString, IsEmail, IsInt, MinLength, MaxLength, Matches, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'name should not be empty' })
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'username should not be empty' })
  @MinLength(3, { message: 'Username must have atleast 3 characters.' })
  @Matches(/^[a-zA-Z0-9]+$/, { message: 'Username does not allow other than alpha numeric chars.' })
  username: string;

  @IsEmail({}, { message: 'Please provide valid Email.' })
  @IsNotEmpty({ message: 'email should not be empty' })
  email: string;

  @IsInt({ message: 'age must be an integer number' })
  age: number;

  @IsString()
  @IsNotEmpty({ message: 'password should not be empty' })
  @MinLength(8, { message: 'Password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character' })
  @MaxLength(20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, { message: 'Password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'gender should not be empty' })
  @Matches(/^(m|f)$/, { message: 'gender must be one of the following values: m, f' })
  gender: string;
}