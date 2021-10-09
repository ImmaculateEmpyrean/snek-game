const fs = require('fs-extra');
const path = require('path');
const {execSync} = require('child_process');

let deploymentTracker = require('./heroku-deployment-tracker.json');

//start building the front-end
console.log('starting to building the front end');
execSync('npm run build',{
    cwd: path.join(__dirname,"front-end"),
    stdio: 'inherit'
});
fs.emptyDirSync('dist/www');
fs.copySync(path.join(__dirname,'front-end/dist/'), path.join(__dirname,'dist/www/'));
console.log('finished building the front-end');
//ended building front-end

//start building the back-end
console.log('strting to build the back-end');
execSync('npm run build',{
   cwd: path.join(__dirname,'back-end'),
   stdio: 'inherit' 
});
fs.copySync(path.join(__dirname,'back-end/dist/'),path.join(__dirname,'dist/'));
console.log('finished building the back-end');
//ended building the backend

//started setting up to deploy to heroku
execSync('git init',{
    cwd: path.join(__dirname,"dist"),
    stdio: 'inherit'
});

execSync('heroku git:remote -a bird-flap-game',{
    cwd: path.join(__dirname,"dist"),
    stdio: 'inherit'
});

execSync('git add -A',{
    cwd: path.join(__dirname,"dist"),
    stdio: 'inherit'
});

let latestIndex = deploymentTracker.nextVersion;
deploymentTracker.nextVersion++;
fs.writeFileSync('./heroku-deployment-tracker.json',JSON.stringify(deploymentTracker), 'utf8');

execSync(`git commit -m "Version : ${latestIndex} being deployed"`,{
    cwd: path.join(__dirname,"dist"),
    stdio: 'inherit'
});
//ended setting up to deploy to heroku

//start deploying to heroku//
execSync(`git push heroku master --force`,{
    cwd: path.join(__dirname,"dist"),
    stdio: 'inherit'
});
//ended deploying to heroku

console.log('build deploy finished successfully!');
