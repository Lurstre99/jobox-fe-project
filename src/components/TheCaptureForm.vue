<template>
  <validation-observer v-slot="{ handleSubmit, invalid }">
    <b-form
      autocomplete="off"
    >
      <b-card class="mb-2">
        <b-row class="mb-3">
          <b-col cols="12">
            <the-validated-form-element
              rules="required"
            >
              <template #form-element>
                <b-form-input
                  name="name"
                  type="text"
                  placeholder="Name of client"
                  v-model="localPayload.name"
                />
              </template>
            </the-validated-form-element>
          </b-col>
          <b-col cols="12">
            <b-row>
              <b-col cols="12" lg="6">
                <b-input-group
                  prepend="Start date"
                  class="mb-3"
                >
                  <b-form-datepicker
                    :max="new Date()"
                    v-model="localPayload.startDate"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="12" lg="6">
                <b-input-group
                  prepend="End date"
                  class="mb-3"
                >
                  <b-form-datepicker
                    :min="new Date()"
                    v-model="localPayload.endDate"
                  />
                </b-input-group>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12">
            <b-input-group
              prepend="R"
              class="mb-3"
            >
              <b-form-input
                name="serviceCode"
                type="number"
                placeholder="Service cost"
                v-model="localPayload.cost"
              />
            </b-input-group>
          </b-col>
          <b-col cols="12">
            <b-form-textarea
              name="description"
              placeholder="Service description"
              type="text"
              rows="3"
              max-rows="6"
              v-model="localPayload.description"
            />
          </b-col>
        </b-row>
        <b-button
          block
          @click="handleSubmit(submit)"
          :disabled="invalid"
          variant="dark"
        >
          Generate Contract
        </b-button>
      </b-card>
    </b-form>
  </validation-observer>
</template>

<script>
import { required } from 'vee-validate/dist/rules';
import { ValidationObserver, extend } from 'vee-validate';
import {
  BButton,
  BCard,
  BCol,
  BForm,
  BFormDatepicker,
  BFormInput,
  BFormTextarea,
  BInputGroup,
  BRow,
} from 'bootstrap-vue';

import TheValidatedFormElement from '@/components/TheValidatedFormElement.vue';

extend('required', {
  ...required,
  message: 'This field is required',
});

export default {
  components: {
    BButton,
    BCard,
    BCol,
    BForm,
    BFormDatepicker,
    BFormInput,
    BFormTextarea,
    BInputGroup,
    BRow,
    TheValidatedFormElement,
    ValidationObserver,
  },
  data() {
    return {
      localPayload: {
        name: '',
        startDate: null,
        endDate: null,
        cost: 0.00,
        description: '',
      },
    };
  },
  methods: {
    submit() {
      this.$emit('submitted', this.localPayload);
    },
  },
  name: 'TheCaptureForm',
};
</script>

<style scoped>

</style>
