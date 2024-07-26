const { exec } = require('child_process');

const flaskProcess = exec('python app/readerv3.py', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting Flask server: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Flask server stderr: ${stderr}`);
    return;
  }
  console.log(`Flask server stdout: ${stdout}`);
});

flaskProcess.on('close', (code) => {
  console.log(`Flask server process exited with code ${code}`);
});

const expoProcess = exec('npx expo start', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting Expo app: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Expo app stderr: ${stderr}`);
    return;
  }
  console.log(`Expo app stdout: ${stdout}`);
});

expoProcess.on('close', (code) => {
  console.log(`Expo app process exited with code ${code}`);
});