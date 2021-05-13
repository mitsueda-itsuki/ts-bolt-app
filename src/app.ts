import { App } from '@slack/bolt';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message('hello', async ({ say }) => {
  await say('hello!');
});

(async () => {
  await app.start(3000);
  console.log('⚡️ Bolt app is running!');
})();
