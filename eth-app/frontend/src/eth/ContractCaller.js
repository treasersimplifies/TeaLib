// https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider

import React, {useState} from 'react'
import {ethers, utils} from 'ethers'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import WethAbi from './contracts/WETH_abi.json'

const ContractCaller = () => {
    
    let contractAddress = '0xDf032Bc4B9dC2782Bb09352007D4C57B75160B15'; // mainnet WETH '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    // const [contractAddress, setContractAddress] = useState(null);
    const [contract, setContract] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const [contractResult, setContractResult] = useState(null);
    const [gasPrice, setGasPrice] = useState(null);
    const [maxFeePerGas, setMaxFeePerGas] = useState(null);
    const [maxPriorityFeePerGas, setMaxPriorityFeePerGas] = useState(null);

    const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
	}

    const connectWalletHandler = () =>{
        if (window.ethereum && window.ethereum.isMetaMask) {
            setProvider(new ethers.providers.Web3Provider(window.ethereum))
            setSigner(provider.getSigner())
            provider.send("eth_requestAccounts", []).then( result => {
                accountChangedHandler(result[0]);
                setConnButtonText('Wallet Connected');
            }).catch(error => {
				setErrorMessage(error.message);
                console.log('Need to install MetaMask');
			});
		} else {
			console.log('Need to install MetaMask');
		}
    }

    const checkFeeHandler = async () => {
        let feeData = await provider.getFeeData()
        // {
        //   gasPrice: { BigNumber: "19732309040" },
        //   maxFeePerGas: { BigNumber: "38964618080" },
        //   maxPriorityFeePerGas: { BigNumber: "1500000000" }
        // }
        let gasPrice = utils.formatUnits(feeData.gasPrice, "gwei")
        let maxFeePerGas = utils.formatUnits(feeData.maxFeePerGas, "gwei")
        let maxPriorityFeePerGas = utils.formatUnits(feeData.maxPriorityFeePerGas, "gwei")
        console.log(gasPrice, maxFeePerGas, maxPriorityFeePerGas)
        setGasPrice(gasPrice)
        setMaxFeePerGas(maxFeePerGas)
        setMaxPriorityFeePerGas(maxPriorityFeePerGas)
    }

    const signMsgHandler = async () => {
        let signature = await signer.signMessage("Lets Fuking Goooo!!!");
        console.log("signature:", signature)
    }

    const checkContractHandler = async () => {
        let contract = new ethers.Contract(contractAddress, WethAbi, provider);
        console.log(contract)

        let balanceBigN = await contract.balanceOf(defaultAccount);
        console.log(balanceBigN)

        let symbol = await contract.symbol()
        console.log(symbol)
        setContractResult(symbol)
    }

    const callContractHandler = async () => {
        console.log(provider)
        let contract = new ethers.Contract(contractAddress, WethAbi, provider.getSigner());
        console.log(contract)

        const amount = ethers.utils.parseUnits("0.01", 18);
        let tx = await contract.transfer("0x3b5418282282F75adC2992B63e518a0C763935E6", amount);
        console.log(tx)
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

	return (
        <Box sx={{ flexGrow: 1 }}>

            <h2> Contract Caller V0.1</h2>
            <h3> LLFFGG!! </h3>
            <h4> gasPrice: {gasPrice}/gwei, maxFeePerGas: {maxFeePerGas}/gwei, maxPriorityFeePerGas: {maxPriorityFeePerGas}/gwei</h4>
            
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Item> <h4>{"1. Connect Your Wallet"}</h4> </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <Button variant="contained" size="small" onClick={connectWalletHandler}>Connect</Button>
                        <Button variant="contained" color="secondary"  size="small" onClick={signMsgHandler}>Sign Msg</Button>
                    </Item>
                    <Item>
                    <Button variant="contained" size="small" onClick={checkFeeHandler}>Check Fee</Button>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item><h4>{connButtonText} : {defaultAccount} </h4></Item>
                </Grid>
                <Grid item xs={3}>
                    <Item><h4>{"2. Input Contract Address and ABJ.json in directory"} </h4> </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Button variant="contained" size="small" onClick={checkContractHandler}>Check</Button>
                    </Item>
                    <Item>
                        <Button variant="contained" color="secondary" size="small" onClick={callContractHandler}>SendTx</Button>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item><h4>Contract Address : {contractAddress} </h4></Item>
                </Grid>
                <Grid item xs={1.5}>
                    <Item> <h4>{"3. Result:"}</h4> </Item>
                </Grid>
                <Grid item xs={10.5}>
                    <Item> <h4>{contractResult}</h4> </Item>
                </Grid>
                {errorMessage}
            </Grid>
        </Box>
	);
}

export default ContractCaller;