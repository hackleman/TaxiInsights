const mainApp = require('./services/authentication.js');


async function startmainApp() {
  console.log("Starting main app..");
  try {
	  await mainApp.initialize();
  } catch (err) {
	  console.error(err);
  	  process.exit(1);
  }
}

startmainApp();


async function shutdown(e) {
  let err = e;
  console.log('Shutting down');
  try {
    await mainApp.close();
  } catch (e) {
    console.log('Encountered error', e);
    err = err || e;
  }


  console.log('Exiting process');

  if (err) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

// Ensure proper shutdown on CTRL + C case
process.on('SIGTERM', () => {
  console.log('Received SIGTERM');
  shutdown();
});

process.on('SIGINT', () => {
  console.log('Received SIGINT');

  shutdown();
});

process.on('uncaughtException', err => {
  console.log('Uncaught exception');
  console.error(err);

  shutdown(err);
});
