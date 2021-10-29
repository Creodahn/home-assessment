import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApptRequestClinicianComponent extends Component {
  @service appointmentRequest;

  @action selectClinician() {
    this.appointmentRequest.updateStepExtraData('Johnny Appleseed');
    this.appointmentRequest.goToNextStep();
  }
}
