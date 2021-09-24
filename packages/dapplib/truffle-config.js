require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture strong deny spike purse hundred light army gasp'; 
let testAccounts = [
"0x19f2b213e656f70effa498f82af804233de217ef84e22d099023a63ec3aa0807",
"0x81418dc4b2a0789c274ede08ae7044c02b8a422cc89a9dc171416c8154b55996",
"0x65f137d654a72a9cfa42756371585a41466df9c631b871a56eba0a5d4729e0a3",
"0x12a9147cf0d410e1acdb9d25c68da1264ff3a138aceb4ee04f407efa3a9533f5",
"0x89bc1c7b7494cad8902c20766af2931d27b625a8141623c7fa92939f773adc10",
"0x992b28f87cf9253a45d98a6f4877978cb71d7f26d6c6664b27e81412d8f6f710",
"0x7b79524f4cd8e543b4e4eef3485cb810b642d650061999897c517b1f5acad2a8",
"0xb50f393c8a42b86d6c214aedae0a6458445df6ba61412133b8ffccad00b14b0f",
"0x54231590e5e59f18a168736d0fad9a44312a9a7d2df0cac817f5489052945c4c",
"0xcefab74d98ba463c1bb4e19b6700b6fc53ab9f6a13b0429d161364e63f67070a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


