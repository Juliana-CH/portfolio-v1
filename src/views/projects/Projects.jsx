import SideImageContent from "../../components/sideimage/SideImage";
import "./projects.scss";

function Projects() {
    return (
        <>
        <section id="projects">

            <div className="title-container">
            <h2 className="titles-second-word">Meus<span className="titles-first-word">Projetos</span></h2>
            </div>

            <div className="projects-content">

                <div className="project1-content">
                    <SideImageContent
                    imgAlt="Gatito Fofito"
                    imgSrc="https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/3008811440.jpg">
                    </SideImageContent>
                    <button className="btn-blue">ME CONHEÇA</button>
                </div>

            </div>

                <div className="project2-content">
                    <SideImageContent 
                    imgAlt="Gatito Fofito"
                    imgSrc="https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/3008811440.jpg">
                    </SideImageContent>
                    <button className="btn-blue">ME CONHEÇA</button>
                </div>

                <div className="project3-content">
                    <SideImageContent 
                    imgAlt="Gatito Fofito"
                    imgSrc="https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/3008811440.jpg">
                    </SideImageContent>
                    <button className="btn-blue">ME CONHEÇA</button>
                </div>

                <div className="project4-content">
                    <SideImageContent 
                    imgAlt="Gatito Fofito"
                    imgSrc="https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/3008811440.jpg">
                    </SideImageContent>
                    <button className="btn-blue">ME CONHEÇA</button>
                </div>
 

            
    
        </section>
        </>
    );
};

export default Projects;