import React from 'react';
import {connect} from 'react-redux';
import superagent from 'superagent';


const API_URL = 'http://localhost:4000';

class Slug extends React.Component {

  handleUpdate = (event) => {
    event.preventDefault();
    // superagent.patch(`${API_URL}/slugs/${this.props.slug.id}`)

    // this.props.updateStore(event.target.value, 'updated')
      
    // console.log('update value', event.target.value);

    superagent.patch(`${API_URL}/slugs/${event.target.value}`)
      .send({name:'Kali', text: 'updated'})
      .set('Accept', 'application/json')
      .then(res=>{this.props.loadStore(res.body)})
      .catch(console.log('not updating'));
  };

  componentDidMount(){
      superagent.get(`${API_URL}/slugs`)
        .then(results => {
            console.log(results.body);
          this.props.loadStore(results.body);
        });
  }



  render() {
    console.log(this.props.slugs)
    return (
      <>
      <ul>
      {this.props.slugs.map((slug) => (
        <li key={slug.id}>
            <p>{slug.name}</p>
            <p>{slug.text}</p>
            <button onClick={this.handleUpdate} value={slug.id}>update</button>
        </li>
          )
        )}
      </ul>
      </>);
    }
}

const mapStateToProps = (state) => ({
    slugs: state.slugs,
  });

const mapDispatchToProps = (dispatch) => ({
  loadStore : (slugs) => {
    dispatch({
      type: 'SLUG_LOAD',
      payload: slugs,
    });
  },
  updateStore : (slugs) => {
    dispatch({
      type: 'SLUG_UPDATE',
      payload: slugs,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slug);