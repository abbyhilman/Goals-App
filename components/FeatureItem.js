import { StyleSheet, View, Text, Pressable } from 'react-native';

function FeatureItem(props) {
    return (
        <View style={styles.featureItem}>
         <Pressable 
            android_ripple={{color: '#210644'}} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.featureText}>{props.text}</Text>
          </Pressable>
        </View>
    );
}

export default FeatureItem;

const styles = StyleSheet.create({
    featureItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      pressedItem: {
        opacity: 0.5
      },
      featureText: {
        color: 'white',
        padding: 8,
      }
})