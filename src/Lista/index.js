import React, {Component} from 'react';
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class Lista extends Component {
    constructor(props){
        super(props);
        this.state= {
            feed: this.props.data
        };

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.loadIcon = this.loadIcon.bind(this);
    }

    loadIcon(likeada){
        return likeada ? require('../img/likeada.png') : 
                        require('../img/like.png')
    }

    like(){
        let feed = this.state.feed;
        if(feed.likeada == true){
            this.setState({
                feed:{
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1,
                    }
                });
        }else{
            this.setState({
                feed:{
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1,
                    }
                });
        }
    }

    mostraLikes(likers){
        let feed = this.state.feed;

        if(feed.likers <=0){
            return;
        }
        return(
            <Text style={styles.likes}>
                {feed.likers} {feed.likers > 1 ? 'curtidas': 'curtida'}
            </Text>
        );
    }

    render(){
        return(
          <View style={styles.areaFeed}>
             <View style={styles.Perfil}>
             <Image 
                source={{uri:this.state.feed.imgperfil}}
                style={styles.photo}
             />
             <Text style={styles.perfilText}>{this.state.feed.nome}</Text>
            </View>

            <Image
             style={styles.photoPub}
             source={{uri: this.state.feed.imgPublicacao}}
            />

            <View style={styles.botoes}>
                <TouchableOpacity onPress={this.like}>
                    <Image
                     source={this.loadIcon(this.state.feed.likeada)}
                     style={styles.likeIcon}
                    />
                </TouchableOpacity>    

                <TouchableOpacity style={styles.btnSend}>
                    <Image
                     source={require('../img/send.png')}
                     style={styles.sendIcon}
                    />
                </TouchableOpacity>
            </View>
            
            {this.mostraLikes(this.state.feed.likers)}

            <View style={styles.rodape}>
             <Text style={styles.nomeRodape}>
                 {this.state.feed.nome}
             </Text>
             <Text style={styles.descricao}>
                 {this.state.feed.descricao}
             </Text> 
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    areaFeed:{
        flex:1

    },

    Perfil:{
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        flex: 1


    },

    perfilText:{
        fontWeight:'bold',
        fontSize:22,
        textAlign:'left'


    },

    photo:{
        height:50,
        width:50,
        borderRadius:50
    },

    photoPub:{
        height:400,
        flex:1,
        alignItems:'center',
        resizeMode:'cover'   
    },

    descricao:{
        paddingLeft:5,
        fontSize:15,
        color:'#000'

    },

    botoes: {
        flexDirection:'row',
        padding:5
    },

    likeIcon:{
        height:30,
        width:30,
    },

    sendIcon:{
        height:30,
        width:30,
        
    },

    btnSend:{
        paddingLeft:5
    },

    rodape:{
        flexDirection: 'row',
        alignItems:'center'
    },

    nomeRodape: {
        fontSize:18,
        fontWeight:'bold',
        color:'#000',
        paddingLeft:5

    },
    likes: {
        fontWeight:'bold',
        marginLeft:5
    }


})
export default Lista;