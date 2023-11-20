const contractAddress = "0x03Eed11038cc3f422a07D81C947622f8e7a0FA4b";
const contractABI = [
	{
		"inputs": [],
		"name": "increaseNum",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_msg",
				"type": "string"
			}
		],
		"name": "NumSet",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "num",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] 
const NFTStorageKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlCMzhiOGNmMjg3MGQ1NUUxZDI5M0NmQTdCZGNGZTkwM2NmYjY0YjkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwMDQzMTc2MDUwMywibmFtZSI6IkR5bmFtaWMgTkZUIEV4YW1wbGUifQ.Ikj-uMhtEjK1_VKLI8l8-zqTNRq8CaA3EQ7UfHurey4"