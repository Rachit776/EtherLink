const FoodOrder = artifacts.require("FoodOrder");
const Library = artifacts.require("Library");

module.exports = function (deployer) {
  deployer.deploy(FoodOrder);
  deployer.deploy(Library);
};
