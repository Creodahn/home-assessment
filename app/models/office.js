import Model, { attr } from '@ember-data/model';

export default class OfficeModel extends Model {
  @attr('string') city;

  @attr() geolocation;

  @attr('boolean') isPublic;

  @attr('boolean') isVideo;

  @attr('string') name;

  @attr('string') phone;

  @attr('string') state;

  @attr('string') street;

  @attr('string') zip;
}
