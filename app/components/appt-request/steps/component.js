import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class ApptRequestStepsComponent extends Component {
  @service appointmentRequest;
}
