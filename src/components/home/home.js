import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const Home = () => {
    window.loaded_web3 = false;

    const history = useHistory();
    const handleClick1 = () => {
        history.push('/explore');
    }
    const handleClick2 = () => {
        history.push('/mint');
    }

    return (
        <div>
        <Box className="home-container" color="white"  p={1}>
            <div className="d-flex col-sm-4" style={{justifyItems: "flex-end", flex:"1", alignItems: "center" }}>
            <div className="card shadow-sm">
                <div className="max-300">
                    <img width={435} height={300} src={"../homeNft.JPG"} />
                </div>
                <div>
                <Box textAlign={"center"} color="black" 
                bgcolor="#a7e1b7" p={1}>Featured NFT</Box></div>
            </div>
            </div>

            <div>
                <div>
                    <h2>Welcome to NFT Marketplace</h2>
                    <p style={{color: "#ffffff4f", fontSize: '18px'}}>
                        Here you can buy and sell NFTs. As word spreads about the rise of Non-Fungible Tokens (NFTs), we’re fielding more and more questions from artists and creators looking to sell their work on the blockchain. Here’s how to turn your art into NFTs and list them for sale.
                    </p>
                </div>
            <div className="d-flex justify-content-end align-items-center align-self-end">
                <div style={{padding: "10px"}}>
                <Button onClick={handleClick1} style={{color: "black", backgroundColor: "#a7e1b7"}}>Explore NFTs</Button>
                </div>
                <div>
                <Button onClick={handleClick2} style={{color: "black", backgroundColor: "#a7e1b7"}}>Create NFTs</Button>
                </div>
            </div>
            </div>
            </Box>
        </div>
    )
};

export default Home;
