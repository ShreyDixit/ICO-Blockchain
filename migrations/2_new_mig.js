const BMU = artifacts.require("./BMUToken.sol");

module.exports = function (deployer) {
  deployer.deploy(BMU);
};
