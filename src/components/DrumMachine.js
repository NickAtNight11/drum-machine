import React, { useState, useEffect } from 'react'
import { Howl, Howler } from 'howler';
import './DrumMachine.css'
import Clave from './sounds/Clave.wav';
import ClosedHiHat from './sounds/Closed Hi-Hat.wav';
import Cymbal from './sounds/Cymbal.wav';
import HandClap from './sounds/Hand Clap.wav';
import HighTom from './sounds/High Tom.wav';
import Kick from './sounds/Kick.wav';
import LowTom from './sounds/Low Tom.wav';
import OpenHiHat from './sounds/Open Hi-Hat.wav';
import Snare from './sounds/Snare.wav';

function DrumMachine() {

    const [volume, setVolume] = useState(50);
    const [clip, setClip] = useState("");

    let clave = new Howl({src: Clave});
    let closedhihat = new Howl({src: ClosedHiHat});
    let cymbal = new Howl({src: Cymbal});
    let handclap = new Howl({src: HandClap});
    let hightom = new Howl({src: HighTom});
    let kick = new Howl({src: Kick});
    let lowtom = new Howl({src: LowTom});
    let openhihat = new Howl({src: OpenHiHat});
    let snare = new Howl({src: Snare});

    let sounds = [kick, snare, handclap, closedhihat, openhihat, cymbal, lowtom, hightom, clave];

    useEffect(() => {
        window.addEventListener("keydown", keyPressed);
        return () => {
            window.removeEventListener("keydown", keyPressed);
        };
    });

    let changeVolume = ((e) => { 
        setVolume(e.currentTarget.value);
    });

    let playClip = ((e, s) => {
        setClip(e.getAttribute("name"));
        Howler.volume(volume/100);
        s.play();
    });
      
    let keyPressed = ((e) => {
        let k = String.fromCharCode(e.keyCode)
        for(let i=0; i<9; i++)
        {
            if(document.getElementById("pad-grid").children[i].children[0].innerHTML === k)
            {
                playClip(document.getElementById("pad-grid").children[i], sounds[i]);
                break;
            }
        }
    });
      
    return (
        <div id="background">
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
                    <div name="Kick" className="drum-pad" onClick={(e) => {playClip(e.target, kick)}}><h3>Q</h3></div>
                    <div name="Snare" className="drum-pad" onClick={(e) => {playClip(e.target, snare)}}><h3>W</h3></div>
                    <div name="Hand Clap" className="drum-pad" onClick={(e) => {playClip(e.target, handclap)}}><h3>E</h3></div>
                    <div name="Closed Hi-Hat" className="drum-pad" onClick={(e) => {playClip(e.target, closedhihat)}}><h3>A</h3></div>
                    <div name="Open Hi-Hat" className="drum-pad" onClick={(e) => {playClip(e.target, openhihat)}}><h3>S</h3></div>
                    <div name="Cymbal" className="drum-pad" onClick={(e) => {playClip(e.target, cymbal)}}><h3>D</h3></div>
                    <div name="Low Tom" className="drum-pad" onClick={(e) => {playClip(e.target, lowtom)}}><h3>Z</h3></div>
                    <div name="High Tom" className="drum-pad" onClick={(e) => {playClip(e.target, hightom)}}><h3>X</h3></div>
                    <div name="Clave" className="drum-pad" onClick={(e) => {playClip(e.target, clave)}}><h3>C</h3></div>
                </div>
                </div>
            </div>
        </div>
    );  
}

export default DrumMachine