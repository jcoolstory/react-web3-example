import Web3 from 'web3';

const providerUri = 'https://ropsten.infura.io/v3/a3a43b393ba948dea0808eccb2c5c0b6';
var web3 = new Web3(new Web3.providers.HttpProvider(providerUri));
console.log(web3);
export function Config()  {
    
    return web3;
}