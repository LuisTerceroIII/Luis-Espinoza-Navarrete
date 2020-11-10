import React from 'react';
import './ProjectsPresentation.css'

export const ProjectsPresentation = () => {
    return (
        <div className={'project-view-main-container'}>
            <h3 className={'project-view-title'}>Projects</h3>
            <ul className={'project-view-list'}>
                <li>
                    <i className="fas fa-angle-right arrow"/>
                    (Academic) Game for "Introduction to programming" - UNGS : Python, PyGame
                    <a className={'code-link-project-view'}
                       target={"_blank"}
                       href={"https://github.com/LuisTerceroIII/Simpson-Text-Game"}>
                        <i className="fas fa-code"/>
                    </a>
                </li>
                <li><i className="fas fa-angle-right arrow"/>
                    (Academic) Game for "Programming I" - UNGS : Java
                    <a className={'code-link-project-view'}
                       target={"_blank"}
                       href={"https://github.com/LuisTerceroIII/Super-Elizabeth-Sis---Game"}>
                        <i className="fas fa-code"/>
                    </a>
                </li>
                <li><i className="fas fa-angle-right arrow"/>
                    (Personal) API - Contacts store : Node Js, Express, Mongo DB, Mongoose, Robo 3T
                    <a className={'code-link-project-view'}
                       target={"_blank"}
                       href={"https://github.com/LuisTerceroIII/Restful-API-Nodejs-Express-MongoDB"}>
                        <i className="fas fa-code"/>
                    </a>
                </li>
                <li>
                    <i className="fas fa-angle-right arrow"/>
                    (Personal) Single Page Application - TO DO - Angular, Angular material
                    <a className={'code-link-project-view'}
                       target={"_blank"}
                       href={"https://github.com/LuisTerceroIII/Contact-List-Angular"}>
                        <i className="fas fa-code"/>
                    </a>
                </li>
                <li>
                    <i className="fas fa-angle-right arrow"/>
                    (Personal) API REST - SHOP : Java, PostgresSQL, Spring Boot, Spring Data, Spring web,Spring HATEOAS (REST PRINCIPLES)
                    <a className={'code-link-project-view'}
                       target={"_blank"}
                       href={"https://github.com/LuisTerceroIII/REST-API-MADE-WITH-SPRING-BOOT"}>
                        <i className="fas fa-code"/>
                    </a>
                </li>
                <li>
                    <i className="fas fa-angle-right arrow"/>
                    (Personal) React Site - "Filosofia Web" : React
                    <a className={'code-link-project-view'}
                       target={"_blank"}
                       href={"https://github.com/LuisTerceroIII/Web-Filosofia"}>
                        <i className="fas fa-code"/>
                    </a>
                </li>
                <li>
                    <i className="fas fa-angle-right arrow"/>
                    (Actual) Web Application - "Jardín" : Java, Spring Boot,Spring Data, Spring web, Spring Security, Heroku PostgrestSQL, AWS S3, AWS EC2, React
                    <a className={'code-link-project-view'}
                       target={"_blank"}
                       href={""}>
                        <i className="fas fa-code"/>
                    </a>
                </li>

            </ul>
        </div>
    )
}