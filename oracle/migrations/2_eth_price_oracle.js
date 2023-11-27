const EthPriceOracle = artifacts.require("EthPriceOracle")

module.exports = function (deployer) {
  deployer.deploy(EthPriceOracle,"0xe2462b38EF45542633146645FC4243b50A132460" )
}