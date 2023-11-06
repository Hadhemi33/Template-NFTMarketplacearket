import React, { useState } from "react";
import { TiMediaPause, TiMediaPlay } from 'react-icons/ti'; // Use the correct import for the icons

import Image from "next/image";

// INTERNAL IMPORT
import Style from "./AudioCardSmall.module.css";
import images from "../../../img";
import LikeProfile from "@/components/LikeProfile/LikeProfile";

const AudioCardSmall = () => {
    const [play, setPlay] = useState(false);

    const playMusic = () => {
        setPlay(!play);
    };

    return (
        <div className={Style.AudioPlayer}>
            <div className={Style.AudioPlayer_box}>
                <Image
                    src={images.creatorbackground1}
                    alt="music"
                    height={100}
                    width={100}
                    className={Style.AudioPlayer_box_img}
                />
                <div className={Style.AudioPlayer_box_info}>
                    <h4>  NFT music #1142</h4>
                    <div className={Style.AudioPlayer_box_info_box}>
                        <LikeProfile />
                        <div className={Style.AudioPlayer_box_info_box_price}>
                            <small>Price</small>
                            <p>1.00 ETH</p>
                        </div>
                    </div>
                    <div
                        className={Style.AudioPlayer_box_playBtn}
                        onClick={playMusic}
                    >
                        {play ? <TiMediaPause /> : <TiMediaPlay />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioCardSmall;
