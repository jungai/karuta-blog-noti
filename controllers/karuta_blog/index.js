const { WebhookClient, MessageEmbed } = require("discord.js");

const karutaBlogNoti = (req, res) => {
  if (req.body?.action !== "completed") {
    res.status(200).send({ success: true });

    return;
  }

  const webhookClient = new WebhookClient({
    id: process.env.WEBHOOK_ID,
    token: process.env.WEBHOOK_TOKEN,
  });

  const embed = new MessageEmbed()
    .setTitle("🚀 Karuta Blog has been deploy!!")
    .setThumbnail(
      "https://media1.giphy.com/media/3og0IAQG2BtR13joe4/giphy.gif?cid=ecf05e47ih9qftqrsdy9drk1w8kltp9rqvckbkxpdw0y8i72&rid=giphy.gif&ct=g"
    )
    .setDescription(
      `
**Author**
${req.body?.workflow_run?.head_commit?.author?.name || "Bug kub"}
**Commit**
${req.body?.workflow_run?.head_commit?.message || "Bug kub"}
**See -> ${process.env.URL || Bug} **
    `
    )
    .setColor("#2ecc71");

  webhookClient.send({
    embeds: [embed],
  });

  res.status(200).json({ success: true });
};

module.exports = {
  karutaBlogNoti,
};
