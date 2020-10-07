export default {
  url: process.env.VUE_APP_SIGNALR_URL,
  options: {
    logging: process.env.NODE_ENV !== 'production',
  },
};
