import { App } from '@slack/bolt';
import { postSimple, postSimpleRegexp } from './scripts/message';
import { config } from 'dotenv';
config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

postSimple(app);
postSimpleRegexp(app);

(async () => {
  await app.start(3000);
  console.log('⚡️ Bolt app is running!');
})();
