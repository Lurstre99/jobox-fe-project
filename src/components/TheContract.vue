<template>
  <b-container class="text-left">
    <p class="h6 font-weight-bold my-5">FIXED TERM AGREEMENT</p>
    <section class="pdf-item my-5">
      <p>between</p>
      <div class="font-weight-bold text-center">
        <p>BMF ATTORNEYS</p>
        <P>with company registration number 2022/123456/07</P>
      </div>
      <p>and</p>
      <div class="font-weight-bold text-center">
        <p>{{ details.name }}</p>
      </div>
      <p>Collectively referred herein as the "parties"</p>
    </section>
    <div class="html2pdf__page-break"></div>
    <ol>
      <li class="font-weight-bold">Payment Terms:</li>
      <ul>
        <li>
          BMF Attorney’s fee R {{ details.cost }} (excluding VAT). The retainer fee can be paid
          upfront, or month-to-month and the payment terms can be payable as follows:
          <ul>
            <li>Upfront:
              <ul>
                <li>
                  Three-twelfths of the fee during the probation period in 3 equal instalments by
                  the 7<sup>th</sup> day of each month
                </li>
                <li>
                  Nine-twelfths of the fee upon conclusion of the probation period of employment
                  payable on the 7<sup>th</sup> day of the 4<sup>th</sup> month.
                </li>
              </ul>
            </li>
            <li>Month-to-month:
              <ul>
                <li>
                  The month-to-month fee shall be paid by the 7th day of each month
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          No variation or amendment to this Agreement shall be of any effect unless such amendment
          is put in writing and signed by all parties
        </li>
        <li>
          Any documentation prepared by <strong>BMF Attorneys</strong> remains its property
        </li>
      </ul>
      <li class="font-weight-bold">Appointment</li>
      <ol>
        <li>
          The Client has procured the services of <strong>BMF Attorneys</strong> and hereby accepts
          the appointment as an independent contractor of the Client for a fixed period of time.
        </li>
        <li>
          The reason for this fixed-term contract is <strong>for the appointment and completion of
            the {{ details.description }}</strong>
        </li>
      </ol>
      <li class="font-weight-bold">Duration</li>
      <ol>
        <li>
          Notwithstanding the date of signature hereof, this fixed term contract shall be deemed to
          have commenced on the <strong>{{ details.startDate }}</strong> and will terminate, without
          further notice, on the <strong>{{ details.endDate }}</strong>.
        </li>
        <li>
          The automatic termination of the contract on the Termination Date shall not be construed
          as a dismissal but as the completion of a fixed term contract.
        </li>
      </ol>

      <div class="html2pdf__page-break"></div>

      <li class="font-weight-bold"></li>
      <b-row>
        <b-col cols="12" md="6">
          <p>Signed at</p>
          <b-form-group description="Who warrants authority on behalf of Jobox">
            <b-form-input type="text" class="signature" />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <p>on</p>
        </b-col>
        <b-col cols="12" md="6">
          <p>Signed at</p>
          <b-form-group :description="`Who warrants authority on behalf of ${details.name}`">
            <b-form-input type="text" class="signature" />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <p>on</p>
        </b-col>
      </b-row>
    </ol>
  </b-container>
</template>

<script>
import {
  BContainer,
  BCol,
  BFormInput,
  BFormGroup,
  BRow,
} from 'bootstrap-vue';

export default {
  components: {
    BContainer,
    BCol,
    BFormInput,
    BFormGroup,
    BRow,
  },
  name: 'TheContractComponent',
  props: {
    details: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style>
ol {
  counter-reset: item
}
ol > li {
  counter-increment: item;
}
ol ol > li {
  display: block
}
ol ol > li:before {
  content: counters(item, ".") " ";
  counter-increment: item
}
.signature {
  border: 0;
  border-bottom: 1px solid #000;
}
</style>
