(function () {
  'use strict';

  angular.module('App')
  .controller('cCtrl',cCtrl);

  function cCtrl() {
    var ctrl=this;
    ctrl.navDisplay=false;
    console.log(window.innerHeight,window.innerWidth);
    if (window.innerWidth<=500) {
      ctrl.navDisplay=true;
    }
    else {
      ctrl.navDisplay=false;
    }
  }
})()
