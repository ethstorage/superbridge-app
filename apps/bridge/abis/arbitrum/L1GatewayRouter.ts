export const L1GatewayRouterAbi = [
  {
    inputs: [
      { internalType: "address", name: "_token", type: "address" },
      { internalType: "address", name: "_refundTo", type: "address" },
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "uint256", name: "_maxGas", type: "uint256" },
      { internalType: "uint256", name: "_gasPriceBid", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "outboundTransferCustomRefund",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "payable",
    type: "function",
  },
] as const;
