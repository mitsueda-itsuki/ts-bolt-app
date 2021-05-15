import { App } from '@slack/bolt';

export const postSimple = (app: App) => {
  app.message('hello', async ({ say }) => {
    await say('Hello!');
  });
}

export const postSimpleRegexp = (app: App) => {
  app.message(/hi/, async ({ say }) => {
    await say('Hi');
  });
}
