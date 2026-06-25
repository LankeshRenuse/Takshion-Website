// PM2 configuration for Tashion website

module.exports = {
  apps: [
    {
      name: "tashion-web",
      script: "server/server.js",
      cwd: __dirname,

      env: {
        NODE_ENV: "production",
        PORT: 5000,
      },

      instances: 1,
      autorestart: true,
      max_memory_restart: "300M",
    },
  ],
};