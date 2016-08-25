import React from 'react';
import Hexagon from 'react-hexagon';
import api from '../../api';

class PortfolioGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }

        this._getProjects();
    }
    render() {
        return(
            <div className='gallery gallery--portfolio'>
                {
                    this._sortProjects().map((projects, indexOne) =>
                        <div className="gallery__row" key={indexOne}>
                            {
                                projects.map((project, indexTwo) =>
                                    <span key={indexTwo}>
                                        <Hexagon
                                            className='gallery__hexagon'
                                            backgroundImage={`/static/projects/${project.img[0]}`}
                                            style={{stroke: 'transparent', strokeWidth: 0}}
                                         />
                                    </span>
                                )
                            }
                        </div>
                    )
                }
            </div>
        )
    }

    _sortProjects = () => {
        const output = [];
        const galleryCounter = {
            one: 3,
            two: 2,
            trigger: false,
            cache: []
        };
        this.state.projects.forEach((project, index) => {
            galleryCounter.cache.push(project);

             if(galleryCounter.one && !galleryCounter.trigger) {
                 if((galleryCounter.one - 1) === 0) {
                    output.push(galleryCounter.cache)

                     galleryCounter.one = 3;
                     galleryCounter.trigger = true;
                     galleryCounter.cache = [];
                 } else {
                     galleryCounter.one--;
                 }
             } else if(galleryCounter.two && galleryCounter.trigger) {
                 if((galleryCounter.two - 1) === 0) {
                    output.push(galleryCounter.cache)

                     galleryCounter.two = 2;
                     galleryCounter.trigger = false;
                     galleryCounter.cache = [];
                 } else {
                     galleryCounter.two--;
                 }
             }
        })

        return output;
    }

    _getProjects = () => {
        const that = this;

        api.getProjects((err, data) => {
            if(err) return console.log(err);

            that.setState({
                projects: data
            });
        })
    }
}

export default PortfolioGallery;
