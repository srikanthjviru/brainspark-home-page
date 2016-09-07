import React from 'react';
import Hexagon from 'react-hexagon';

class PortfolioGallery extends React.Component {
    render() {
        return(
            <div className='gallery gallery--portfolio'>
                {
                    this._sortProjects(this.props.viewProjects).map((projects, indexOne) =>
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

    _sortProjects = (data) => {
        const output = [];
        const galleryCounter = {
            one: 3,
            two: 2,
            trigger: false,
            cache: []
        };
        data.forEach((project, index, array) => {
            galleryCounter.cache.push(project);

             if(!galleryCounter.trigger) {
                 if((galleryCounter.one - 1) === 0 || (array.length - index) < 2) {
                    output.push(galleryCounter.cache);

                     galleryCounter.one = 3;
                     galleryCounter.trigger = true;
                     galleryCounter.cache = [];
                 } else {
                     galleryCounter.one--;
                 }
             } else if(galleryCounter.trigger) {
                 if((galleryCounter.two - 1) === 0 || (array.length - index) < 2) {
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
}

export default PortfolioGallery;
