module.exports = {
  apps: [
    {
      name: "tweet",
      script: "./bin/www",
      instances: "max",
      watch: "true",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
