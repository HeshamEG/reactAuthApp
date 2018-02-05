/**
 * Created by hesham on 1/26/2018.
 */
import React,{Component} from 'react';
import {ScrollView}from 'react-native';
import AlbumDetail from './AlbumDetail'
import axios from 'axios';
// const AlbumList=(probs)=>{
class AlbumList extends Component {
state={
    albums:[]
};
  componentWillMount(){
console.log('componentWillMount')
      axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
          response=>
              this.setState({albums:response.data}));
  }
  renderAlbums(){
     return this.state.albums.map(album=>
         <AlbumDetail key={album.title} data={album}/>
     );
  }
    render(){
console.log(this.state)
    return(
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
    );
    }
}

export default AlbumList;