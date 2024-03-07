import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { handleError } from '../../shared/utils/handle-error.util';
import { MentorEntity } from '../mentors/entities/mentor.entity';
import { UserEntity } from '../user/entities/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async mentorSendEmailConfirmation(mentor: MentorEntity): Promise<void> {
    const { email, fullName, code } = mentor;
    const url = `${process.env.URL_CONFIRM_EMAIL}code=${code}&email=${email}`;

    await this.mailerService
      .sendMail({
        to: email,
        subject: 'Recuperação de Senha!',
        template: './send',
        context: {
          name: fullName,
          url,
        },
      })
      .catch(handleError);
  }

  async mentorSendCreationConfirmation(mentor: MentorEntity) {
    const { email, fullName, code } = mentor;
    const { URL_CONFIRM_EMAIL } = process.env;

    const url = `${URL_CONFIRM_EMAIL}code=${code}&email=${email}`;

    console.log(this.mailerService);
    try {
      await this.mailerService
        .sendMail({
          to: email,
          subject: 'Confirme sua conta - SouJunior!',
          template: './confirmEmail',
          context: {
            name: fullName,
            url,
            email,
          },
        })
        .catch(handleError);
    } catch (error) {
      console.log(error.message);
    }
  }

  async mentorSendRestorationEmail(mentorData: MentorEntity) {
    const { email, code } = mentorData;
    const { URL_RESTORATION_EMAIL } = process.env;

    const url = `${URL_RESTORATION_EMAIL}code=${code}&email=${email}`;

    try {
      await this.mailerService
        .sendMail({
          to: email,
          subject: 'Recuperação de conta - SouJunior!',
          template: './restoreEmail',
          context: {
            url,
          },
        })
        .catch(handleError);
    } catch (error) {
      console.log(error.message);
    }
  }

  async userSendEmailConfirmation(user: UserEntity): Promise<void> {
    const { email, fullName, code } = user;
    const url = `${process.env.URL_CONFIRM_EMAIL}code=${code}&email=${email}`;

    await this.mailerService
      .sendMail({
        to: email,
        subject: 'Recuperação de Senha!',
        template: './send',
        context: {
          name: fullName,
          url,
        },
      })
      .catch(handleError);
  }

  async userSendCreationConfirmation(user: UserEntity) {
    const { email, fullName, code } = user;
    const { URL_CONFIRM_EMAIL } = process.env;

    const url = `${URL_CONFIRM_EMAIL}code=${code}&email=${email}`;

    try {
      await this.mailerService
        .sendMail({
          to: email,
          subject: 'Confirme sua conta - SouJunior!',
          template: './confirmEmail',
          context: {
            name: fullName,
            url,
            email,
          },
        })
        .catch(handleError);
    } catch (error) {
      console.log(error.message);
    }
  }

  async userSendRestorationEmail(userData: UserEntity) {
    const { email, code } = userData;
    const { URL_RESTORATION_EMAIL } = process.env;

    const url = `${URL_RESTORATION_EMAIL}code=${code}&email=${email}`;

    try {
      await this.mailerService
        .sendMail({
          to: email,
          subject: 'Recuperação de conta - SouJunior!',
          template: './restoreEmail',
          context: {
            url,
          },
        })
        .catch(handleError);
    } catch (error) {
      console.log(error.message);
    }
  }
}
