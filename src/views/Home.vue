<template>
  <b-container fluid>
    <b-row class="create-form no-gutters">
      <b-card
        cols="12"
        class="col-lg-6 offset-lg-3 my-auto"
        header="Contract Information"
        header-bg-variant="dark"
        header-text-variant="white"
      >
        <the-capture-form @submitted="generatePdf" />
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex';
import {
  BCard,
  BContainer,
  BRow,
} from 'bootstrap-vue';
import {
  MUTATIONS,
  ContractsStore as CS,
} from '@/store/constants';

import TheCaptureForm from '@/components/TheCaptureForm.vue';

export default {
  components: {
    BCard,
    BContainer,
    BRow,
    TheCaptureForm,
  },
  methods: {
    ...mapMutations({
      SetContractData: `${CS.Name}/${MUTATIONS.SET_DATA}`,
    }),
    generatePdf(payload) {
      this.SetContractData(payload);
      this.$router.push({ name: 'Contract' });
    },
  },
  name: 'Home',
};
</script>

<style scoped>
.create-form {
  margin-top: 10%;
  height: calc(100% - 80px);
}
</style>
