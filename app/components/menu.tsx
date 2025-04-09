import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter , usePathname} from 'expo-router';

export default function Menu() {
    const router = useRouter();
    const pathname = usePathname();

  const menuItemStyle = {
    paddingVertical: 2,
    paddingHorizontal: 16,
    marginBottom: 2,
    borderRadius: 8,
    backgroundColor: 'transparent',
  };

  const textStyle = {
    fontSize: 15,
    color: 'black',
  };

  return (
      <View style={{ paddingLeft: 30 }}>
          {
              pathname !== '/' && (
                <TouchableOpacity style={menuItemStyle} onPress={() => router.push('/')}>
                    <Text style={textStyle}>/ Home</Text>
                </TouchableOpacity>
              )
          }
          {
              pathname !== '/components/work_experience' && (
                <TouchableOpacity style={menuItemStyle} onPress={() => router.push('/components/work_experience')}>
                    <Text style={textStyle}>/ Work Experience</Text>
                </TouchableOpacity>
              )
          }
          {
              pathname !== '/components/projects' && (
                        <TouchableOpacity style={menuItemStyle} onPress={() => router.push('/components/projects')}>
                            <Text style={textStyle}>/ Projects</Text>
                        </TouchableOpacity>
              )
          }
          {
                pathname !== '/components/contact' && (
                            <TouchableOpacity style={menuItemStyle} onPress={() => router.push('/components/contact')}>
                                <Text style={textStyle}>/ Contact</Text>
                            </TouchableOpacity>
                )
          }
    </View>
  );
}
