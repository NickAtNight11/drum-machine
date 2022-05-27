import React, { useState, useEffect } from 'react'
import './DrumMachine.css'


function DrumMachine() {

    const [volume, setVolume] = useState(50);
    const [clip, setClip] = useState("");
    const [drumsound, setDrumSound] = useState(null);

    let clave = new Audio('./sounds/Clave.wav');
    let closedhihat = new Audio('./sounds/Closed Hi-Hat.wav');
    let cymbal = new Audio('./sounds/Cymbal.wav');
    let handclap = new Audio('./sounds/Hand Clap.wav');
    let hightom = new Audio('./sounds/High Tom.wav');
    let kick = new Audio('./sounds/Kick.wav');
    let lowtom = new Audio('./sounds/Low Tom.wav');
    let openhihat = new Audio('./sounds/Open Hi-Hat.wav');
    let snare = new Audio('./sounds/Snare.wav');

    useEffect(() => {
        window.addEventListener("keydown", keyPressed);
        return () => {
            window.removeEventListener("keydown", keyPressed);
        };
    });

    let changeVolume = ((e) => { 
        setVolume(e.currentTarget.value);
    });

    let changeClip = ((e) => { 
        setClip(e.target.getAttribute("name"));
        setDrumSound(e.target.getAttribute("sound"));
        playClip();
    });
      
    let keyPressed = ((e) => {
        let k = String.fromCharCode(e.keyCode)
        for(let i=0; i<9; i++)
        {
            if(document.getElementById("pad-grid").children[i].getAttribute("padkey") === k)
            {
                let a = document.getElementById("pad-grid").children[i]
                setClip(a.target.getAttribute("name"));
                setDrumSound(a.target.getAttribute("sound"));
                playClip();
                break;
            }
        }
    });
      
    let playClip = (() => {
        drumsound.volume = volume/100;
        drumsound.play();
        if(!drumsound.paused) {
          drumsound.currentTime = 0;
        }
    });
      
    
    return (
        <div id="background"> {/*onMouseUp={stopDrag} >*/}
            <div id="interface">
                <div id="output">
                <h1 id="volume-output">{volume}</h1>
                <h1 id="display">{clip}</h1>
                </div>
                <div id="buttons">
                <div id = "volume">
                    <input type="range"  orient="vertical" id="line" min="0" max="100" onInput={changeVolume}/>
                </div>
                <div id="pad-grid">
                    <div name="Kick" padkey="Q" className="drum-pad" sound={kick} onClick={changeClip}><h3>Q</h3></div>
                    <div name="Snare" padkey="W" className="drum-pad" sound={snare} onClick={changeClip}><h3>W</h3></div>
                    <div name="Hand Clap" padkey="E" className="drum-pad" sound={handclap} onClick={changeClip}><h3>E</h3></div>
                    <div name="Closed Hi-Hat" padkey="A" className="drum-pad" sound={closedhihat} onClick={changeClip}><h3>A</h3></div>
                    <div name="Open Hi-Hat" padkey="S" className="drum-pad" sound={openhihat} onClick={changeClip}><h3>S</h3></div>
                    <div name="Cymbal" padkey="D" className="drum-pad" sound={cymbal} onClick={changeClip}><h3>D</h3></div>
                    <div name="Low Tom" padkey="Z" className="drum-pad" sound={lowtom} onClick={changeClip}><h3>Z</h3></div>
                    <div name="High Tom" padkey="X" className="drum-pad" sound={hightom} onClick={changeClip}><h3>X</h3></div>
                    <div name="Clave" padkey="C" className="drum-pad" sound={clave} onClick={changeClip}><h3>C</h3></div>
                </div>
                </div>
            </div>
        </div>
    );
      
}

export default DrumMachine