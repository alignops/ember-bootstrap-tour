/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function()
  {
    return this.addBowerPackageToProject('bootstrap-tour', '0.10.3');
  }
};
