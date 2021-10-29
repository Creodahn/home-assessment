import Model, { attr } from '@ember-data/model';

export default class StepModel extends Model {
  @attr('string') extraData;
  @attr('string') title;
}
