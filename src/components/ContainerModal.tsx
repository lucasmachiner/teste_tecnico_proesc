import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';
import Ionicons from '@expo/vector-icons/Ionicons';

type ContainerModalProps = {
  children: React.ReactNode;
  title: string
};


export default function ContainerModal({ children, title }: ContainerModalProps,) {
  const navigation = useRouter();
  return (
    <Animated.View
      entering={FadeIn}
      style={styles.container}
    >
      <Pressable style={StyleSheet.absoluteFill} onPress={() => navigation.back()} />
      <Animated.View
        entering={SlideInDown}
        style={styles.contentAnimeted}
      >
        <View style={{
          width: "100%"
        }}>
          <Text style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: "600"
          }}>
            {title}
          </Text>
          <TouchableOpacity
            style={{ position: 'absolute', right: 0, top: 0 }}
            onPress={() => navigation.back()}
          >
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>

        </View>
        {children}
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00000040',
  },
  contentAnimeted: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    padding: 16
  },
  buttonClose: {
    width: "100%",
    justifyContent: "flex-end",
    flexDirection: "row"
  }
})