import logo from './logo.svg';
import './App.css';
import { NFTStorage } from 'nft.storage'

function App() {
  const token = process.env.REACT_APP_NFT_STORAGE_TOKEN
  if (!token) throw new Error('Missing environment var REACT_APP_NFT_STORAGE_TOKEN')
  const client = new NFTStorage({ token })

  const handleButtonClick = async () => {
    const cid = await client.storeBlob(new Blob(['Hello World!']))
    console.log(`https://nftstorage.link/ipfs/${cid}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleButtonClick}>Upload to nft.storage</button>
      </header>
    </div>
  );
}

export default App;
