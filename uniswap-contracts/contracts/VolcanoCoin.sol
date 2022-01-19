// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol';

contract VolcanoCoin is ERC20Detailed, ERC20Mintable {
    
    uint256 public MINTED_AMOUNT = 5 ether;
    
    constructor() ERC20Detailed("Volcano Coin", "VLC", 18) public {
        _mint(msg.sender, 1000000000000000000000000);
    }
    
    function mintTokens() public {
        // Mints the defined amount of tokens for the caller
        _mint(msg.sender, MINTED_AMOUNT);
    }
    
}
