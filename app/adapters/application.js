import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'simplepractice-assessment/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  headers = {
    Accept: 'application/vnd.api+json',
    'Api-Version': '2020-01-01',
    'Application-Build-Version': '0.0.1',
    'Application-Platform': 'web'
  };
  host = ENV.APP.apiURL;
  namespace = 'client-postal-api';
}
