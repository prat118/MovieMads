# MovieMads
Ionic framework Sample Application
This is a sample application which consumes REST API service and fetches the movie data in JSON format. If you want to run the project, first of all make sure you have installed nodeJS, ionic and cordova. To check this, use
  
  $ node --version
  $ npm --version
  $ ionic --version
  $ cordova --version

If you have everything installed, clone the project, move to directory and run "$ npm install" to download all the dependencies or you can also download all the dependencies individually.
  
  $ npm install @angular/common@latest --save
  $ npm install @angular/compiler@latest --save
  $ npm install @angular/compiler-cli@latest --save
  $ npm install @angular/core@latest --save
  $ npm install @angular/forms@latest --save
  $ npm install @angular/http@latest --save
  $ npm install @angular/platform-browser@latest --save
  $ npm install @angular/platform-browser-dynamic@latest --save

Once this is done, you need to add one plugin for checking the network connectivity of your device to the internet. Use following commands to do that,

  $ ionic cordova plugin add cordova-plugin-network-information

After adding the plugin, download the plugin specific dependencies using,
  
  $ npm install @ionic-native/network --save
  
If done with all the steps mentioned above, you can run the project on browser using

  $ ionic serve
  
command, but you won't be able to see the "toast" feature or network checking functionality of the app because of cordova not available for browser. For that purpose you need to test the app on android or iOS device.
Add the platform to ionic project using,
  
    $ ionic cordova platform add android

Then connect your device to the system and check the serial number using
  
  $ adb devices
  
command. Now build and run the app on your device using,

  $ ionic cordova build android
  $ ionic cordova run android --target= serial_number_from_list
  
