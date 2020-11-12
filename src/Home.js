import React from 'react';
import './Home.css';
import Product from './Product';





function Home() {

    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" alt=""/>
                <div className="home_row">
                    <Product
                        id="56787"
                        title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
                        price={67.89}
                        image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id="9088776"
                        title="Oculus Quest All-in-one VR Gaming Headset – 128GB"
                        price={557.88}
                        image="https://images-na.ssl-images-amazon.com/images/I/71D9OsZmWxL._SX522_.jpg"
                        rating={4}
                    />
                    <Product
                        id="234155"
                        title="RUNMUS Gaming Headset for PS4, Xbox One, PC Headset w/Surround Sound, Noise Canceling Over Ear Headphones with Mic, Compatible with PS4, Xbox One, Switch, PC, PS3, Mac, Laptop"
                        price={24.78}
                        image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SL1500_.jpg"
                        rating={3}
                    />
                    <Product
                        id="789554"
                        title="EDOW Throw Pillow Insert, Set of 2 Down Alternative Polyester Square Form Decorative Pillow, Cushion,Sham Stuffer. (White, 18x18)"
                        price={15.77}
                        image="https://images-na.ssl-images-amazon.com/images/I/71p0wTseBOL._AC_SL1500_.jpg"
                        rating={1}
                    />
                    
                </div>
                <div className="home_row">
                    <Product
                        id="5634210"
                        title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Backlit Keyboard, Alexa Built-in, AN515-54-5812"
                        price={775.45}
                        image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="078654"
                        title="FEZIBO Dual Motor Height Adjustable Electric Standing Desk, 55 x 24 Inches Full Sit Stand Home Office Table with Splice Board, Black Frame/Black and Rustic Brown Top"
                        price={400}
                        image="https://images-na.ssl-images-amazon.com/images/I/71lIvF3SaeL._AC_SL1500_.jpg"
                        rating={2}
                    />
                    <Product
                        id="675554324"
                        title="Samsung Electronics UN32N5300AFXZA 32 1080p Smart LED TV (2018), Black"
                        price={999.78}
                        image="https://images-na.ssl-images-amazon.com/images/I/91UsHjAPTlL._AC_SL1500_.jpg"
                        rating={4}
                    />

                </div>
                <div className="home_row">
                    <Product
                        id="8543622"
                        title="TOZO T10 Bluetooth 5.0 Wireless Earbuds with Wireless Charging Case IPX8 Waterproof TWS Stereo Headphones in Ear Built in Mic Headset Premium Sound with Deep Bass for Sport Black"
                        price={34.90}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Hy1JKI4%2BL._AC_SL1500_.jpg"
                        rating={4}
                        />
                    <Product
                        id="4321665"
                        title="All-new Fire HD 8 tablet, 8 HD display, 32 GB, designed for portable entertainment, Black"
                        price={63.89}
                        image="https://m.media-amazon.com/images/I/61jIs7q6SML._AC_UY218_.jpg"
                        rating={3}
                    />

                </div>
            </div> 
        </div>
    )
}

export default Home;
