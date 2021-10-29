export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  console.log('seeding development db...');

  // server.createList('post', 10);
  server.db.loadData({
    cptCodes: [
      {
        id: 3866,
        description: 'Psychiatric Diagnostic Evaluation',
        duration: 50,
        rate: '100.0',
        callToBook: false
      },
      {
        id: 31822614,
        description: 'Intro Call',
        duration: 15,
        rate: '0.0',
        callToBook: false
      }
    ]
  });

  server.db.loadData({
    offices: [
      {
        id: 8377723,
        name: 'Video Office',
        phone: '(626) 298-1956',
        isVideo: true,
        geolocation: {
          lat: '0.0',
          lng: '0.0'
        },
        isPublic: false
      }
    ]
  });
}
