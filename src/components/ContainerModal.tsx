import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '@/theme';
import { ThemeColors } from '@/theme/colors';

type ContainerModalProps = {
  children: React.ReactNode;
  title: string
};


export default function ContainerModal({ children, title }: ContainerModalProps,) {
  const navigation = useRouter();
  const { theme } = useTheme();

  return (
    <Animated.View
      entering={FadeIn}
      style={styles(theme).container}
    >
      <Pressable style={StyleSheet.absoluteFill} onPress={() => navigation.back()} />
      <Animated.View
        entering={SlideInDown}
        style={styles(theme).contentAnimeted}
      >
        <View style={{
          width: "100%"
        }}>
          <Text style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: "600",
            color: ThemeColors(theme).text
          }}>
            {title}
          </Text>
          <TouchableOpacity
            style={{ position: 'absolute', right: 0, top: 0 }}
            onPress={() => navigation.back()}
          >
            <Ionicons name="close" size={24} color={ThemeColors(theme).text} />
          </TouchableOpacity>
        </View>
        {children}
      </Animated.View>
    </Animated.View>
  )
}

const styles = (theme: string) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: ThemeColors(theme).transparent,
  },
  contentAnimeted: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeColors(theme).background,
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