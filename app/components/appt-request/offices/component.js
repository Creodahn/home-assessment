import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class ApptRequestOfficesComponent extends Component {
  @service appointmentRequest;

  constructor() {
    super(...arguments);

    this.appointmentRequest.loadOffices();
  }
}
