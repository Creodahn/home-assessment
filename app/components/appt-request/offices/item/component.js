import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApptRequestOfficesItemComponent extends Component {
  @service appointmentRequest;

  @tracked office;

  get cityStateZip() {
    const { city, state, zip } = this.office;
    let result = null;

    if (city && state && zip) {
      result = `${city}, ${state} ${zip}`;
    }
    return result;
  }

  constructor() {
    super(...arguments);

    this.office = this.args.office;

    console.log(this.office);
  }

  @action selectOffice() {
    const stepExtraData = `${this.args.office.name}\n${this.args.office.phone}`;

    this.appointmentRequest.updateStepExtraData(stepExtraData);
    this.appointmentRequest.goToNextStep();
  }
}
