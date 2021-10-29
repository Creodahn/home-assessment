import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class ApptRequestAvailableServicesItemComponent extends Component {
  @service appointmentRequest;

  @action selectService() {
    const { service } = this.args;
    const stepExtraData = `${service.description}\n${service.duration} minutes`;

    this.appointmentRequest.updateSelectedService(service.id);
    this.appointmentRequest.updateStepExtraData(stepExtraData);
    this.appointmentRequest.goToNextStep();
  }
}
