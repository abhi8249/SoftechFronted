module.exports = {
  apps: [
    {
      name: 'nextusingec2',
      script: './node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      cwd: '/home/ubuntu/SoftechFronted', // Path to your project
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
