# EtherLink

A decentralized platform built on Ethereum that streamlines rental agreements, food ordering, and library management through smart contracts and IPFS storage.

## 🚀 Features

- **Decentralized Food Ordering System**: Order food using blockchain technology
- **Digital Library Management**: Manage library resources on the blockchain
- **Modern React-based UI**: Responsive and user-friendly interface with parallax effects

## 🛠️ Technology Stack

- **Blockchain**: Ethereum
- **Smart Contract Development**: Truffle Framework
- **File Storage**: IPFS (InterPlanetary File System)
- **Frontend**: 
  - React.js (v17.0.2)
  - HTML5
  - CSS3
  - Bootstrap v5.1
- **Blockchain Interaction**: 
  - Web3.js
  - MetaMask/Nifty Wallet
- **Local Blockchain**: Ganache
- **Node.js Environment**
- **UI Components**: Material-UI, React Bootstrap
- **Styling**: Styled Components, CSS

## 📦 Smart Contracts

The project includes three main smart contracts:

1. **FoodOrder.sol**: Manages food ordering system
2. **Library.sol**: Controls library resource management

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version)
- [Ganache](https://trufflesuite.com/ganache/) - Local blockchain
- [MetaMask](https://metamask.io/) or Nifty Wallet browser extension
- [Truffle Framework](https://trufflesuite.com/)
- Git

## 📥 Detailed Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/etherlink.git
cd etherlink
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Ganache Setup
1. Download and install Ganache from the [official website](https://trufflesuite.com/ganache/)
2. Open Ganache and create a new workspace
3. Add your project:
   - Go to the workspace settings
   - Navigate to the src directory
   - Select `truffle-config.js`
   - Save the workspace
   - This will initialize 10 accounts with 100 ETH each

### 4. Deploy Smart Contracts
```bash
cd src
truffle migrate --reset
```

### 5. MetaMask Configuration
1. Install MetaMask browser extension
2. Add a new network in MetaMask:
   - Click on Network Selection
   - Select "Add Network" > "Add Network Manually"
   - Network Settings:
     - Network Name: Ganache Local
     - RPC URL: (Copy from Ganache, usually http://127.0.0.1:7545)
     - Chain ID: (Same as Network ID in Ganache)
     - Currency Symbol: ETH

### 6. Import Ganache Account to MetaMask
1. In Ganache, select the first account (admin account)
2. Click the key icon to reveal the private key
3. In MetaMask:
   - Select the Ganache network you created
   - Click "Import Account"
   - Paste the private key
   - Click "Import"
   - You should see 100 ETH balance

### 7. Start the Application
```bash
# From the project root directory
npm start
```
The application will start on `localhost:3000`

## 🔑 Important Notes

- The account that deploys the contracts becomes the admin account
- Ensure Ganache is running before starting the application
- Make sure MetaMask is connected to the Ganache network
- Keep your private keys secure and never share them

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## 📄 License

This project is licensed under the MIT License.