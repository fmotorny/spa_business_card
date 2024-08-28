import * as https from 'https';
import { ResponseStatusEnum } from '../../app/shared/models/response.model';
import { FeedbackDataModel } from '../../app/shared/models/feedback-data.model';
import { PrismaClient } from '@prisma/client';

export const sendMsg = (req: any, res: any) => {
  const prisma = new PrismaClient();
  const feedbackData: FeedbackDataModel = req.body;

  async function main() {
    sendToTg(feedbackData);

    const hasUser = await prisma.user.findFirst({
      where: {
        phone: { contains: feedbackData.phone },
      },
    });

    if (hasUser) {
      console.log('hasUser');
      return Promise.reject(new Error());
    }

    await prisma.user.create({
      data: {
        name: feedbackData.name,
        phone: `+7${feedbackData.phone}`,
        email: feedbackData.email,
      },
    });
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      await prisma.$disconnect();
    });

  function sendToTg(feedbackData: FeedbackDataModel) {
    let fields = [
      '<b>Имя</b>: ' + feedbackData.name,
      '<b>Телефон</b>: ' + `+7${feedbackData.phone}`,
    ];
    let msg = '';
    fields.forEach((field) => {
      msg += field + '\n';
    });
    msg = encodeURI(msg);

    console.log(process.env['TG_BOT_TOKEN']);

    https.get(
      `https://api.telegram.org/bot${process.env['TG_BOT_TOKEN']}/sendMessage?chat_id=${process.env['CHAT_ID']}&parse_mode=html&text=${msg}`,
      (response) => {
        console.log('statusCode:', response && response.statusCode);
        //   console.log("body:", body);
        if (response.statusCode === 200) {
          res.status(200).json({
            status: ResponseStatusEnum.success,
            message: 'Заявка успешно отправлена!',
          });
        }
        if (response.statusCode === 400) {
          res.status(400).json({
            status: ResponseStatusEnum.error,
            message: 'Произошла ошибка!',
          });
        }
      },
    );
  }
};
