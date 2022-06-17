module.exports = ({ env }) => ({
  proxy: true,
  url: env("strapi-heroku9.herokuapp.com"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
