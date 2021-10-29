import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class ApptRequestAvailableServicesComponent extends Component {
  @service appointmentRequest;

  get services() {
    return this.appointmentRequest.services;
  }

  constructor() {
    super(...arguments);

    this.appointmentRequest.loadServices();
  }
}
