import { StyleSheet, Text, View, Image, Button } from 'react-native';

const myName = 'Chepe';
const userId = 'chepexd_4'

export default function App() {
  return (
    <View style={styles.container}>

      <Image style={styles.banner_image} source={require('./assets/traka.jpg')}/>

      <View style={styles.profile_view}>
        <View style={styles.profile_picture_view}>
          <Image style={styles.profile_image} source={require('./assets/gromit.jpeg')}/>
        </View>
        <View style={{width: '100%'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text_name}>{myName}</Text>
            <Text style={styles.text_seguir}>+ Follow</Text>
          </View>
          <Text style={styles.text_id}>@{userId}</Text>
          <Text style={styles.text_desc}>Me llamo José Manuel pero me dicen Chepe. Estudio en la facultad de informática de la UAQ. Me gusta jugar Smash y ULTRAKILL.</Text>
        </View>
      </View>
      
      <View style={styles.view_posts}>
        <Text style={styles.text_nav}>Posts</Text>

        <View>
          <View style={styles.view_post}>
            <View style={styles.view_post_profile}>
              <Image style={styles.post_profile_image} source={require('./assets/gromit.jpeg')}/>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.post_profile_name}>{myName}</Text>
                <Text style={styles.post_id_date}>
                  @{userId}      21 Nov
                </Text>
              </View>
            </View>
            <Text style={styles.text_post}>Banda perdi el torneo de smash de la facultad pipipi <Text style={{color: '#1A8CD8'}}>#washed #fueElLag</Text> </Text>

            <View style={styles.view_actions}>
              <View style={styles.view_icon_numbers}>
                <Image style={styles.post_icon} source={require('./assets/comment-icon.png')}/>
                <Text style={styles.post_numbers}>3</Text>
              </View>
              <View style={styles.view_icon_numbers}>
                <Image style={styles.post_icon} source={require('./assets/retweet-icon.png')}/>
                <Text style={styles.post_numbers}>1</Text>
              </View>
              <View style={styles.view_icon_numbers}>
                <Image style={styles.post_icon} source={require('./assets/heart-icon.png')}/>
                <Text style={styles.post_numbers}>32</Text>
              </View>
            </View>
          </View>


          <View style={styles.view_post}>
            <View style={styles.view_post_profile}>
              <Image style={styles.post_profile_image} source={require('./assets/gromit.jpeg')}/>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.post_profile_name}>{myName}</Text>
                <Text style={styles.post_id_date}>
                  @{userId}      20 Nov
                </Text>
              </View>
            </View>
            <Text style={styles.text_post}>Me dejo la ruta no maches 😞</Text>

            <View style={styles.view_actions}>
              <View style={styles.view_icon_numbers}>
                <Image style={styles.post_icon} source={require('./assets/comment-icon.png')}/>
                <Text style={styles.post_numbers}>2</Text>
              </View>
              <View style={styles.view_icon_numbers}>
                <Image style={styles.post_icon} source={require('./assets/retweet-icon.png')}/>
                <Text style={styles.post_numbers}>3</Text>
              </View>
              <View style={styles.view_icon_numbers}>
                <Image style={styles.post_icon} source={require('./assets/heart-icon.png')}/>
                <Text style={styles.post_numbers}>16</Text>
              </View>
            </View>
          </View>
          

          <View style={styles.view_post}>
            <View style={styles.view_post_profile}>
              <Image style={styles.post_profile_image} source={require('./assets/gromit.jpeg')}/>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.post_profile_name}>{myName}</Text>
                <Text style={styles.post_id_date}>
                  @{userId}      13 Nov
                </Text>
              </View>
            </View>
            <Text style={styles.text_post}>Otravez me persiguió el mismo perro camino a la parada. Pasen tips para espantarlo</Text>

            <View style={styles.view_actions}>
              <View style={styles.view_icon_numbers}>
                <Image style={styles.post_icon} source={require('./assets/comment-icon.png')}/>
                <Text style={styles.post_numbers}>9</Text>
              </View>
              <View style={styles.view_icon_numbers}>
                <Image style={styles.post_icon} source={require('./assets/retweet-icon.png')}/>
                <Text style={styles.post_numbers}>4</Text>
              </View>
              <View style={styles.view_icon_numbers}>
                <Image style={styles.post_icon} source={require('./assets/heart-icon.png')}/>
                <Text style={styles.post_numbers}>68</Text>
              </View>
            </View>
          </View>
        </View>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center'
  },
  profile_view: {
    marginTop: -50,
    paddingLeft: 20,
    marginHorizontal: 1,
    width: '100%',
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
  },
  banner_image: {
    width: '100%',
    height: 180
  },
  profile_image: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderColor: '#000',
    borderWidth: 4
  },
  text_name: {
    fontSize: 25,
    textAlign: 'left',
    marginTop: 20,
    color: '#fff',
    fontWeight: 700
  },
  text_id: {
    color: '#fafafadd',
    fontSize: 15,
    fontWeight: 300,
    width: '100%'
  },
  text_desc: {
    color: '#fff',
    marginTop: 18,
    lineHeight: 22,
    paddingRight: 60
  },
  text_seguir: {
    color: '#fff',
    backgroundColor: '#1A8CD8',
    marginTop: 25,
    marginLeft: 180,
    textAlign: 'center',
    verticalAlign: 'middle',
    width: 90,
    height: 25,
    fontSize: 15,
    fontWeight: 600,
    borderRadius: 100
  },
  view_posts: {
    width: '100%',
    paddingTop: 15
  },
  view_post: {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#404040'
  },
  text_nav: {
    height: 30,
    borderBottomColor: '#1A8CD8',
    borderBottomWidth: 1,
    textAlign: 'center',
    color: '#1A8CD8'
  },
  post_profile_image: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  post_id_date: {
    fontWeight: 400, 
    fontSize: 14, 
    color: '#f9f9f977',
    verticalAlign: 'top',
    marginTop: 8,
    marginLeft: 5
  },
  text_post: {
    color: '#fff',
    width: '100%',
    marginLeft: 57,
    marginTop: -10,
    paddingRight: 40
  },
  view_post_profile: {
    flexDirection: 'row'
  },
  post_profile_name: {
    color: '#fff',
    marginLeft: 10,
    paddingTop: 4,
    verticalAlign: 'top',
    fontSize: 20,
    fontWeight: 600,
  },
  view_actions: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 57
  },
  view_icon_numbers: {
    flexDirection: 'row',
    marginRight: 50
  },
  post_numbers: {
    color: '#fff',
    verticalAlign: 'top',
    marginLeft: 6,
    marginTop: -2
  },
  post_icon: {
    width: 15,
    height: 15,
    color: '#000',
  }
});
