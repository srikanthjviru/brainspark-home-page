import React from 'react';
import Hexagon from 'react-hexagon';
import api from '../api';

import './ProjectPage.less'

class ProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: {},
            technologies: {}
        }

        this._getTechnologies();
        this._getProjectByID();
    }

    render() {
        const project = this.state.project;
        const allTechnologies = this.state.technologies;

        let imgHead = null,
            platforms = null,
            mainHexagonPreview = null,
            allHexagonPreview = null,
            projectTechnologies = null;

        if( Object.keys(project).length ) {
            imgHead = <img src={`/static/projects/${project.imgs.head}`} alt=""/>;
            platforms = project.platforms.map((item, index) =>
                <div
                    key={index}
                    className={`platforms__item platforms__item--${item}`}
                />
            );
            mainHexagonPreview =  <Hexagon
                                        className='project__about-hexagon-main'
                                        backgroundImage={`/static/projects/${project.imgs.main}`}
                                        style={{stroke: 'transparent', strokeWidth: 0}}
                                   />;
            allHexagonPreview =  project.imgs.all.map((img, index) =>
                <Hexagon
                    key={index}
                    className='project__about-hexagon-all'
                    backgroundImage={`/static/projects/${img}`}
                    style={{stroke: 'transparent', strokeWidth: 0}}
               />
           );

           if( Object.keys(allTechnologies).length ) {
                const filterTechnologies = allTechnologies.filter(technology => {
                    if(project.technologies.indexOf(technology.name) !== -1) {
                        return technology.name;
                    }
                })

               projectTechnologies =  filterTechnologies.map((technology, index) =>
                  <div className='technologies__item' key={index}>
                      <div className='technologies__item-icon'>
                          <img src={`/static/technologies/${technology.img}`} alt={`${technology.name}-icon`} />
                      </div>
                      <div className='technologies__item-name'>
                          {technology.name}
                      </div>
                  </div>
              )
           }
        }

        return(
            <section className='project'>
                <div className="project__head">
                    <div className="project__head-image">
                        {imgHead}
                    </div>
                    <div className="project__title">
                        {project.name}
                    </div>
                    <div className="project__head-description">
                        {project.description}
                    </div>
                </div>
                <div className="project__about">
                    <div className="project__about-head">About project</div>
                    <div className="platforms platforms--project">
                        {platforms}
                    </div>
                    <div className="project__about-description">
                        {project.description}
                    </div>
                    <div className="project__about-preview">
                        {mainHexagonPreview}
                        <div className="project__about-preview-all">
                            {allHexagonPreview}
                        </div>
                        <div className="project__about-additional">
                            <ul className="project__about-add-props">
                                <li className="project__about-duration">
                                    <span className="project__about-add-value">{project.duration} months</span>
                                </li>
                                <li className="project__about-team">
                                    <span className="project__about-add-value">{project.team} people</span>
                                </li>
                            </ul>
                        </div>
                        <div className='technologies technologies--project'>
                            {projectTechnologies}
                        </div>
                    </div>
            </div>
            </section>
        )
    }

    _getProjectByID = () => {
        const that = this;
        const projectID = this.props.params.projectID;

        api.getProjectByID(projectID, (err, data) => {
            if(err) return console.log(err);

            that.setState({
                project: data
            });
        })
    }

    _getTechnologies = () => {
        const that = this;

        api.getTechnologies((err, data) => {
            if(err) return console.log(err);

            that.setState({
                technologies: data
            });
        })
    }
}

export default ProjectPage;
