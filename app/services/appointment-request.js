import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { isEmpty } from '@ember/utils';
import { action } from '@ember/object';

export default class AppointmentRequestService extends Service {
  @service store;

  @tracked _activeStep = 2;

  @tracked _clinicianId = 2;

  @tracked _offices;

  @tracked _services;

  @tracked _serviceId;

  @tracked _steps = [
    {
      id: 1,
      extraData: 'Johnny Appleseed',
      title: 'Clinician'
    },
    {
      id: 2,
      title: 'Select a Service'
    },
    {
      id: 3,
      title: 'Select a Location'
    },
    {
      id: 4,
      title: 'Select a Date & Time'
    },
    {
      id: 5,
      title: 'Your Information'
    }
  ];

  get activeStep() {
    return this._activeStep;
  }

  get offices() {
    return this._offices;
  }

  get services() {
    return this._services;
  }

  get steps() {
    return this._steps;
  }

  async loadServices() {
    if (isEmpty(this._services)) {
      this._services = await this.store.query('cpt-code', {
        filter: {
          clinicianId: this._clinicianId
        }
      });
    }

    return new Promise((resolve) => {
      resolve(this._services);
    });
  }

  async loadOffices() {
    if (isEmpty(this._offices)) {
      this._offices = await this.store.query('office', {
        filter: {
          clinicianId: this._clinicianId,
          cptCodeId: this._serviceId
        }
      });

      return new Promise((resolve) => {
        resolve(this._offices);
      });
    }
  }

  @action updateActiveStep(step) {
    this._activeStep = step;
  }

  @action updateSelectedService(serviceId) {
    this._serviceId = serviceId;
  }

  @action updateStepExtraData(data) {
    this.steps.filter((step) => step.id === this.activeStep).extraData = data;
  }
}
