async function connectWallet() {
  if (window.ethereum) {
    try {
      // Requesting user to connect to MetaMask
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Show the dashboard after successful connection
      document.getElementById("connectButton").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("MetaMask not detected. Please install MetaMask extension.");
  }
}

function sendTransaction() {
  // Implement your transaction sending logic here
  const receiverAddress = document.getElementById("receiverAddress").value;
  const amount = document.getElementById("amount").value;

  // Display transaction history (for demonstration purposes)
  const transactionHistory = document.getElementById("transactionHistory");
  const transactionEntry = document.createElement("p");
  transactionEntry.textContent = `Sent ${amount} ETH to ${receiverAddress}`;
  transactionHistory.appendChild(transactionEntry);
}
