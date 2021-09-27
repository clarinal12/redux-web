module.exports = {
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/home',
        permanent: false,
      },
    ];
  },
};
