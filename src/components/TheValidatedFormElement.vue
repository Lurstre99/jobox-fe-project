<template>
  <b-form-group>
    <validation-provider
      v-slot="{ errors }"
      :rules="rules"
      :vid="vid"
    >
      <float-label
        :fixed="fixedLabel"
        :label="label"
      >
        <slot name="form-element">
          No form element
        </slot>
      </float-label>
      <validation-error-label :error="errors[0]" />
    </validation-provider>
  </b-form-group>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { BFormGroup } from 'bootstrap-vue';

import ValidationErrorLabel from '@/components/TheValidationErrorLabel.vue';

export default {
  components: {
    BFormGroup,
    ValidationErrorLabel,
    ValidationProvider,
  },
  name: 'TheValidatedFormElement',
  props: {
    fixedLabel: {
      default: false,
      required: false,
      type: Boolean,
    },
    label: {
      default: null,
      required: false,
      type: String,
    },
    rules: {
      default: '',
      required: false,
      type: String,
    },
    vid: {
      default: '',
      required: false,
      type: String,
    },
  },
};
</script>

<style>

</style>
