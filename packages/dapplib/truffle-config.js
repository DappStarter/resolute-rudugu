require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remind exchange good private tail giant'; 
let testAccounts = [
"0xf87047edec0b9ee9af7bf0ffdf1f189e216654ff03158323f620dfe8f4f7a85c",
"0xcf670872be4eb17f29554f55b75596fa161e45992691a71a28d875b60bdeb602",
"0x838702131d45d94f1de1ac13b49874ebb033a27126912f07b066805a1379fd28",
"0xebaa4726ba9e7c49689f5d9aa8f11769f3c3f8020c89aaa3dfcf1d35ed75a9e4",
"0x084c67c1693e8518c0e4b00fae44905c63cfefb93945f3681d38e5ba9673c697",
"0x48d45be15392dbd2a83bb7eb3fc0699a82227bbe49cc16c62cfd439854a1a84f",
"0x21a21bca90d46dcbc3c606d980dc581eade5e04758295b053ec4deb57f933cb0",
"0x10af3dd8bc028b4ee021c73a0d0e88753b18d2a523d96ab91aa37e460b71e925",
"0x4d3d96c571c9421a5a9d6c29b21a47c83bcec36c710d56d1decaee8569a4b40e",
"0xfd8eb957b2b168c626b1504bead7ff4fd77885b5c98011373e9a7cda630dc734"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
