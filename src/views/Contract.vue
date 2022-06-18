<template>
  <vue-html2pdf
    enable-download
    :filename="filename"
    float-layout
    :html-to-pdf-options="htmlToPdfOptions"
    manual-pagination
    pdf-content-width="800px"
    pdf-format="a4"
    :pdf-quality="2"
    ref="html2Pdf"
    v-if="!!Contract"
  >
    <section slot="pdf-content">
      <the-contract :details="Contract" />
    </section>
  </vue-html2pdf>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import {
  GETTERS,
  MUTATIONS,
  ContractsStore as CS,
} from '@/store/constants';

import VueHtml2pdf from 'vue-html2pdf';
import TheContract from '@/components/TheContract.vue';

export default {
  components: {
    VueHtml2pdf,
    TheContract,
  },
  computed: {
    ...mapGetters({
      Contract: `${CS.Name}/${GETTERS.DATA}`,
    }),
    filename() {
      if (!this.Contract) return `bmf-${new Date().toISOString().split('T')[0]}`;
      return `${this.Contract?.name}-${new Date().toISOString().split('T')[0]}`;
    },
    htmlToPdfOptions() {
      return {
        margin: [20, 10, 20, 10],
        filename: this.filename,
      };
    },
  },
  methods: {
    ...mapMutations({
      SetIsLoading: `${CS.Name}/${MUTATIONS.SET_IS_LOADING}`,
    }),
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
      this.$router.push({ name: 'Home' });
    },
  },
  mounted() {
    if (!this.Contract) this.$router.push({ name: 'Home' });
    this.generateReport();
  },
  name: 'TheContractView',
};
</script>
