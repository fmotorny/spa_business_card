import { PrismaClient } from '@prisma/client';
import * as https from 'https';

export const sendMsg = (req: any, res: any) => {
 // let reqBody = req.body;
  let fields = [
    "<b>Name</b>: " + 'Fed22',
    "<b>Email</b>: " + 'Test TEST!!',

  ];
  let msg = "";
  fields.forEach((field) => {
    msg += field + "\n";
  });
  msg = encodeURI(msg);
  https.get(
    `https://api.telegram.org/bot${process.env["TG_BOT_TOKEN"]}/sendMessage?chat_id=${process.env["CHAT_ID"]}&parse_mode=html&text=${msg}`,
    (response) => {


     const prisma = new PrismaClient();

      async function main() {
        const user = await prisma.user.create({
          data: {
            name: 'Alice',
            email: 'alice@prisma.io',
          },
        })
        console.log(user)
      }

      main()
        .then(async () => {
          await prisma.$disconnect()
        })
        .catch(async (e) => {
          console.error(e)
          await prisma.$disconnect()
          process.exit(1)
        })

      console.log("statusCode:", response && response.statusCode);
   //   console.log("body:", body);
      if (response.statusCode === 200) {
        res.status(200).json({ status: "ok", message: "Успешно отправлено!" });
      }
      if (response.statusCode === 400) {
        res.status(400).json({ status: "error", message: "Произошла ошибка!" });
      }
    },
  );
}
