import React from "react";

export const AboutMe: React.FC = () => {
    return (
        <div className="center">

            <h1>Artem Zavhorodnii</h1>
            <h3>Frontend developer</h3>

            <div className="about">

                <div>
                    <h5>Skills:</h5>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Typescript</li>
                        <li>Git</li>
                        <li>Material ui</li>
                        <li>Materialize</li>
                    </ul>
                </div>

                <div>
                    <h5>English:</h5>
                    <p>intermediate</p>

                    <h5>Polish:</h5>
                    <p>intermediate</p>
                </div>
            </div>

        </div>
    )
}