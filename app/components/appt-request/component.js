import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class ApptRequestComponent extends Component {
  @service appointmentRequest;

  get activeComponent() {
    let result;

    switch (this.appointmentRequest.activeStep) {
      case 1:
        result = 'appt-request/clinician';
        break;
      case 2:
        result = 'appt-request/available-services';
        break;
      case 3:
        result = 'appt-request/offices';
        break;
      case 4:
        result = 'appt-request/calendar';
        break;
      default:
        result = 'appt-request/error';
    }

    console.log(result);

    return result;
  }
}
