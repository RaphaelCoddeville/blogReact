import { arrayOf } from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';



class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          images: []
        };
    }


    componentDidMount() {
        fetch("https://picsum.photos/v2/list?limit=10")
          .then(res => res.json())
          .then((picsum) => this.setState({isLoaded : true, images : picsum}),
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
        }
        )
      }

    randomMason () {

      const height = ["grid-item--height2", "grid-item--height3", "grid-item--height4"];
      const width = ["grid-item--width2", "grid-item--width3"];

      const random ="grid-item " + height[Math.floor(Math.random() * height.length)] +" "+ width[Math.floor(Math.random() * width.length)];

      return random;
    }  

    


    render() {

        const { error, isLoaded, images } = this.state;
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {

        return (    
            <div className="main-container">
                    <div className="main-container-content">
                    <div className="grid">
                        <div className="grid-sizer"></div>

                        {this.state.images.map(picsum => 
                               <div key={picsum.id} className={this.randomMason()}>
                                 
                             <img className="grid-img" src={picsum.download_url}></img>
                                    <h4>Titre de l'article { picsum.author }</h4>
                            </div>
                        )}
                    
            </div>
            </div>
            </div>                 
            );
        }
      }
    }

export default Content;

