import './App.css';
import React from "react";
import {PositionContainer} from "./Component/PositionComponent/PositionContainer";
import {ImageContainer} from "./Component/ImageComponent/ImageContainer";
import {PersonalInfoContainer} from "./Component/PersonalInfoComponent/PersonalInfoContainer";
import {AboutMeContainer} from "./Component/AboutMeComponent/AboutMeContainer";
import {EducationContainer} from "./Component/EducationComponent/EducationContainer";
import {ProjectsContainer} from "./Component/ProjectsComponent/ProjectsContainer";
/*import {SoftSkillsContainer} from "./Component/SoftSkillComponent/SoftSkillsContainer";
import {LanguagesContainer} from "./Component/LanguagesComponent/LanguagesContainer";*/
import {data} from './data/Data'
function App() {
    return (
        <div className={'app-main-grip-container'}>

            <div className={'position-component-container'}>
                <PositionContainer position={data.position}/>
            </div>

            <div className={'image-component-container'}>
                <ImageContainer source={data.image}/>
            </div>

            <div className={'personal-info-component-container'}>
                <PersonalInfoContainer info={data.personalInfo}/>
            </div>

            <div className={'about-me-component-container'}>
                <AboutMeContainer aboutMe={data.aboutMe}/>
            </div>

            <div className={'education-component-container'}>
                <EducationContainer education={data.education}/>
            </div>

            <div className={'project-component-container'}>
                <ProjectsContainer projects={data.projects}/>
            </div>
{/*
            <div className={'soft-skills-component-container'}>
                <SoftSkillsContainer/>
            </div>

            <div className={'languages-component-container'}>
                <LanguagesContainer/>
            </div>*/}

        </div>
    );
}

export default App;
