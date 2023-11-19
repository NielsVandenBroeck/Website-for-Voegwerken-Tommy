import React, {useState} from 'react'
import './Projecten.css'
import{FiChevronRight, FiChevronLeft, FiMaximize2} from "react-icons/fi";
import {FaTimes} from 'react-icons/fa'

function importAll(r) {
    return r.keys().map(r);
}

function Projecten() {
    const [currentProject, setCurrentProject] = useState(0);

    const  project1= importAll(require.context("../ProjectImages/Project1", false, /\.(png|jpe?g|svg)$/));
    
    const  project2= importAll(require.context("../ProjectImages/Project2", false, /\.(png|jpe?g|svg)$/));
    
    const  project3= importAll(require.context("../ProjectImages/Project3", false, /\.(png|jpe?g|svg)$/));

    const  project4= importAll(require.context("../ProjectImages/Project4", false, /\.(png|jpe?g|svg)$/));

    const  project5= importAll(require.context("../ProjectImages/Project1", false, /\.(png|jpe?g|svg)$/));
    
    const projects = [project1, project2, project3, project4, project5];
    const [projectIndexes, setProjectIndexes] = useState([0, 0, 0, 0, 0]);

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

    function maximize(p){
        setCurrentProject(p);
        document.getElementById("popup").classList.add("active")
    }

    function minimize(){
        document.getElementById("popup").classList.remove("active")
    }

    return (
        <div class="Projects">
            <div id="popup" class="popup">
                <FaTimes class="minimizeM" onClick={() => minimize()}/>
                <FiChevronRight class="NextImageM" onClick={() => changeImage(currentProject,true)}/>
                <FiChevronLeft class="PreviousImageM" onClick={() => changeImage(currentProject,false)}/>
                <img class="LargeImage" src={projects[currentProject][projectIndexes[currentProject]]} alt="Project"/>
            </div>

            <div class="UpperTitle">Onze realisaties</div>
            <div class="RowContainer">
                <div class="ProjectContainer">
                    <div class="ImageContainer">
                        <div class="Images">
                            <img class="Image" src={project1[projectIndexes[0]]} alt="Project 1" onClick={() => maximize(0)}/>
                            <div class="middle">
                                <FiMaximize2 class="Maximise"/>
                            </div>
                        </div>
                        <FiChevronRight class="NextImage" onClick={() => changeImage(0,true)}/>
                        <FiChevronLeft class="PreviousImage" onClick={() => changeImage(0,false)}/>
                    </div>
                    <div class="ProjectInfo">
                        <div class="TitleDiv">
                            <div class="ProjectTitle">Voegen te Beerzel</div>
                            <div class="ImageCount">{projectIndexes[0]+1}/{project1.length}</div>
                        </div>
                        <div class="Info">Bij dit project werkten we een binnenmuur af met steenstrips.</div>

                    </div>
                </div>
                <div class="ProjectContainer">
                    <div class="ImageContainer">
                        <div class="Images">
                            <img class="Image" src={project2[projectIndexes[1]]} alt="Project 2" onClick={() => maximize(1)}/>
                            <div class="middle">
                                <FiMaximize2 class="Maximise"/>
                            </div>
                        </div>                        
                        <FiChevronRight class="NextImage" onClick={() => changeImage(1,true)}/>
                        <FiChevronLeft class="PreviousImage" onClick={() => changeImage(1,false)}/>
                    </div>
                    <div class="ProjectInfo">
                        <div class="TitleDiv">
                            <div class="ProjectTitle">Gevelrenovatie te Sint-Katlijne-Waver</div>
                            <div class="ImageCount">{projectIndexes[1]+1}/{project2.length}</div>
                        </div>
                        <div class="Info">Bekijk hier hoe we van een brouwerij 6 appartementen maakten met behoud van originele gevelzichten.</div>
                    </div>
                </div>
                <div class="ProjectContainer">
                    <div class="ImageContainer">
                        <div class="Images">
                            <img class="Image" src={project3[projectIndexes[2]]} alt="Project 3" onClick={() => maximize(2)}/>
                            <div class="middle">
                                <FiMaximize2 class="Maximise"/>
                            </div>
                        </div>
                        <FiChevronRight class="NextImage" onClick={() => changeImage(2,true)}/>
                        <FiChevronLeft class="PreviousImage" onClick={() => changeImage(2,false)}/>
                        </div>
                    <div class="ProjectInfo">
                        <div class="TitleDiv">
                            <div class="ProjectTitle">voegen3</div>
                            <div class="ImageCount">{projectIndexes[2]+1}/{project3.length}</div>
                        </div>
                        <div class="Info">info over dit project</div>
                    </div>
                </div>
            </div>
            <div class="RowContainer">
                <div class="ProjectContainer">
                    <div class="ImageContainer">
                        <div class="Images">
                            <img class="Image" src={project4[projectIndexes[3]]} alt="Project 4" onClick={() => maximize(3)}/>
                            <div class="middle">
                                <FiMaximize2 class="Maximise"/>
                            </div>
                        </div>
                        <FiChevronRight class="NextImage" onClick={() => changeImage(3,true)}/>
                        <FiChevronLeft class="PreviousImage" onClick={() => changeImage(3,false)}/>
                    </div>
                    <div class="ProjectInfo">
                        <div class="TitleDiv">
                            <h1 class="ProjectTitle">Plaatsen van Plinten</h1>
                            <div class="ImageCount">{projectIndexes[3]+1}/{project4.length}</div>
                        </div>
                        <div class="Info">info over dit project</div>

                    </div>
                </div>
                <div class="ProjectContainer">
                    <div class="ImageContainer">
                        <div class="Images">
                            <img class="Image" src={project5[projectIndexes[4]]} alt="Project 5" onClick={() => maximize(4)}/>
                            <div class="middle">
                                <FiMaximize2 class="Maximise"/>
                            </div>
                        </div>
                        <FiChevronRight class="NextImage" onClick={() => changeImage(4,true)}/>
                        <FiChevronLeft class="PreviousImage" onClick={() => changeImage(4,false)}/>
                    </div>
                    <div class="ProjectInfo">
                        <div class="TitleDiv">
                            <div class="ProjectTitle">voegen5</div>
                            <div class="ImageCount">{projectIndexes[4]+1}/{project5.length}</div>
                        </div>
                        <div class="Info">info over dit project</div>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default Projecten
