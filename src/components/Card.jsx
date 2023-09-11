import { Image, StyleSheet, Text, View } from "react-native";

const Card = ({title, content, imgUrl}) => {
    styles = StyleSheet.create ({
        title: {
            fontSize: 30,
            color: '#240326'
        },

        content: {
            fontSize: 20,
            color: '#451947',
        },

        imagem: {
            width: 100,
            height: 100,
        
        }
    })
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
            <Image style={styles.imagem} source={{uri: imgUrl}}/>
        </View>
    );
}

export default Card;