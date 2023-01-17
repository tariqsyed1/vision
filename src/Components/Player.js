import React from "react";
import MusicIcon from "../Assets/Svg/Vector.svg"
// import ProgressIcon from "../Assets/Svg/ProgressIcon.svg"
import './Player.css'

const Player = props => {


    // Fix this: Make it transform-origin of svg based on % of progress_ms

    // const progressPercent = (props.progress_ms * 100 / props.item.duration_ms)
    // const progressPx = progressPercent * 410;
//   const progressBarStyles = {
    // width: (props.progress_ms * 100 / props.item.duration_ms) + '%',
//   };

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  // TODO: Remove extra divs for margins/padding

  return (
    <div className='Player'>
        <div className='BlurredBackground'>
        </div>
        <div className='PlayerGrid'>
            <div className='AlbumArt'>
                <img src={props.item.album.images[0].url} alt='Album Art'/>
            </div>
            <div className='SongInformation'>
                <div className='Title'>
                    {props.item.name}
                </div>
                <div className='Song'>
                    {props.item.artists[0].name}
                </div>
                <div className='Device'>
                    <span>
                        <img className="MusicIcon" src={MusicIcon} alt='Music Icon' />
                    </span>
                    <span className='DeviceName'>
                        {props.device_name}
                    </span>
                 </div>
            </div>
        </div>
        <div>
            <div className="progress">
                {/* <img className="progress__bar" style={progressBarStyles} src={ProgressIcon}>
                </img> */}
            </div>
            <div className='ProgressTime'>
                <span className='StartTime'>
                    {millisToMinutesAndSeconds(props.progress_ms)}
                </span>
                <span className='EndTime'>
                    {millisToMinutesAndSeconds(props.duration_ms)}
                </span>
            </div>
        </div>
    </div>
  );
}

export default Player;