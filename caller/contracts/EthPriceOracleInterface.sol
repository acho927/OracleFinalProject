// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;
abstract contract EthPriceOracleInterface {
  function getLatestEthPrice() public virtual returns (uint256);
}
