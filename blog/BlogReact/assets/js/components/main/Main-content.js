import { arrayOf } from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';


const images = fetch("https://picsum.photos/v2/list");

function Articles () {

    fetch("https://picsum.photos/v2/list")
    .then(res => res.json())
    

    
    const numbers = [1, 2, 3, 4, 5];
    
    const articleContent = numbers.map((number) =>
    <div key={number} className="grid-item grid-item--width2 grid-item--height4">
        
    <img className="grid-img" src="https://picsum.photos/1200/1300?random={number}"></img>
            <h4>Titre de l'article { number }</h4>
    </div>
    )

    return <div>{articleContent}</div>
};


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
        fetch("https://picsum.photos/v2/list")
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
                               <div key={picsum.id} className="grid-item grid-item--width2 grid-item--height4">
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

