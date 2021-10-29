import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class ApptRequestStepsStepComponent extends Component {
  @service appointmentRequest;

  get isActiveStep() {
    return this.args.step.id === this.appointmentRequest.activeStep;
  }

  get isCompletedStep() {
    return this.args.step.id < this.appointmentRequest.activeStep;
  }
}
