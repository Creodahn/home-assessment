import Model, { attr } from '@ember-data/model';

export default class CptCodeModel extends Model {
  @attr('boolean') callToBook;

  @attr('string') description;

  @attr('number') duration;

  @attr('number') rate;
}
