import React, {useState} from 'react'
import './Projecten.css'
import{FiChevronRight, FiChevronLeft, FiMaximize2} from "react-icons/fi";

function importAll(r) {
    return r.keys().map(r);
}

function Projecten() {

    const  project1= importAll(require.context("../ProjectImages/PokemonExample", false, /\.(png|jpe?g|svg)$/));
    
    const  project2= importAll(require.context("../ProjectImages/VoegwerkenExample", false, /\.(png|jpe?g|svg)$/));
    
    const  project3= importAll(require.context("../ProjectImages/GeenInspiratie", false, /\.(png|jpe?g|svg)$/));
    
    const projects = [project1, project2, project3];
    const [projectIndexes, setProjectIndexes] = useState([0, 0, 0]);

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    function changeImage(p,i){
        let incr = 1;
        if(i === false){
            incr = -1;
        }        
        let temp = [];
        for(let j = 0; j < projectIndexes.length; j++){
            temp.push(projectIndexes[j]);
        }
        if(i === false && projectIndexes[p] === 0){
            temp[p] = projects[p].length-1;
        }
        else{
            temp[p] = (projectIndexes[p]+incr)%projects[p].length;
        }
        setProjectIndexes(temp);
    }

    return (
        <div class="Projects">
            <text class="UpperTitle">Onze realisaties</text>
            <div class="RowContainer">
                <div class="ProjectContainer">
                    <div class="ImageContainer">
                        <div class="Images">
                            <img class="Image" src={project1[projectIndexes[0]]} alt="Project 1"></img>
                            <div class="middle">
                                <FiMaximize2 class="Maximise"/>
                            </div>
                        </div>
                        <FiChevronRight class="NextImage" onClick={() => changeImage(0,true)}/>
                        <FiChevronLeft class="PreviousImage" onClick={() => changeImage(0,false)}/>
                    </div>
                    <div class="ProjectInfo">
                        <div class="TitleDiv">
                            <text class="Title">Voegen voegen voegen</text>
                            <text class="ImageCount">{projectIndexes[0]+1}/{project1.length}</text>
                        </div>
                        <text class="Info">heel veel blablabla over dit project zeer interessant lets go</text>

                    </div>
                </div>
                <div class="ProjectContainer">
                    <div class="ImageContainer">
                        <div class="Images">
                            <img class="Image" src={project2[projectIndexes[1]]} alt="Project 1"></img>
                            <div class="middle">
                                <FiMaximize2 class="Maximise"/>
                            </div>
                        </div>                        
                        <FiChevronRight class="NextImage" onClick={() => changeImage(1,true)}/>
                        <FiChevronLeft class="PreviousImage" onClick={() => changeImage(1,false)}/>
                    </div>
                    <div class="ProjectInfo">
                        <div class="TitleDiv">
                            <text class="Title">Nog meer voegen</text>
                            <text class="ImageCount">{projectIndexes[1]+1}/{project2.length}</text>
                        </div>
                        <text class="Info">heel veel blablabla over dit project zeer interessant lets go</text>
                    </div>
                </div>
                <div class="ProjectContainer">
                    <div class="ImageContainer">
                        <div class="Images">
                            <img class="Image" src={project3[projectIndexes[2]]} alt="Project 1"></img>
                            <div class="middle">
                                <FiMaximize2 class="Maximise"/>
                            </div>
                        </div>
                        <FiChevronRight class="NextImage" onClick={() => changeImage(2,true)}/>
                        <FiChevronLeft class="PreviousImage" onClick={() => changeImage(2,false)}/>
                        </div>
                    <div class="ProjectInfo">
                        <div class="TitleDiv">
                            <text class="Title">Plintjes plaatsen met bijzondere kindjes</text>
                            <text class="ImageCount">{projectIndexes[2]+1}/{project3.length}</text>
                        </div>
                        <text class="Info">heel veel blablabla over dit project zeer interessant lets go</text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projecten
