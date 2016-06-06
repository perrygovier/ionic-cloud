import { IonicPlatform } from './core';

var privateData: any = {};

function privateVar(key) {
  return privateData[key] || null;
}

export class App {

  devPush: boolean;
  gcmKey: string;

  constructor(appId, apiKey) {
    if (!appId || appId === '') {
      IonicPlatform.logger.info('Ionic App: No app_id was provided');
      return;
    }

    if (!apiKey || apiKey === '') {
      IonicPlatform.logger.info('Ionic App: No api_key was provided');
      return;
    }

    privateData.id = appId;
    privateData.apiKey = apiKey;

    // other config value reference
    this.devPush = null;
    this.gcmKey = null;
  }

  get id() {
    return privateVar('id');
  }

  get apiKey() {
    return privateVar('apiKey');
  }

  toString() {
    return '<App [\'' + this.id + '\'>';
  }
}