const express = require("express");
const { RPCObserver, RPCRequest } = require("./rpc");
const PORT = 9000;

const app = express();
app.use(express.json());

const fakeCustomerResponse = {
    _id: "yt686tu8763tyyr98734",
    name: "Yua Mikami",
    country: "Japan",
}

RPCObserver("CUSTOMER_RPC", fakeCustomerResponse);