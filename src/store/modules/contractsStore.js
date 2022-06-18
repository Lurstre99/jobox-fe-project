import { GettersUtilities, MutationsUtility } from '@/store/utilities';
import { STATE_VARS } from '@/store/constants';

const initialState = () => ({
  [STATE_VARS.DATA]: null,
  [STATE_VARS.IS_LOADING]: false,
});

const STATE_VARS_TO_EXPOSE = [
  ...Object.values(STATE_VARS),
];

const state = initialState();

const getters = {
  ...GettersUtilities.scaffold(state, STATE_VARS_TO_EXPOSE),
};

const mutations = {
  ...MutationsUtility.scaffold(state, STATE_VARS_TO_EXPOSE),
};

export default {
  getters,
  mutations,
  state,
};
