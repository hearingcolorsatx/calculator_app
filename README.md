# Calculator App

This is a basic caclulator app written in JavaScript with some associated tests in Cucumber and Jest. This README will be expanded further but for now, the following are the commands to get things up and running.

<!-- Open PowerShell as Administrator and install choco if necessary -->

`Get-ExecutionPolicy`

<!-- If the output is Restricted, then: -->

`Set-ExecutionPolicy AllSigned`

<!-- Say Yes, all when prompted whether you really, really want to do it. -->

<!-- Install Chocolatey if not already installed: -->

`Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`

<!-- Installing node and npm in Windows: -->

  <!-- install nodejs and npm -->
   ```
  choco install -y --force nodejs-lts 
  npm i -g npm
  ```


<!-- Setting up Cucumber.js -->

`npm init -y`

<!-- Install Cucumber.js and other dependencies: -->
```
npm install cucumber
npm install jest
npm install chai --save-dev
```

<!-- Run the cucumber tests execute the following: -->
`npm test`

<!-- Run the jest tests execute the following: -->
`npx jest calculator.test.js`