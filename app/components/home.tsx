import { View, Text, TouchableOpacity, Linking, ScrollView } from "react-native";
import { useState } from "react";
import * as Animatable from 'react-native-animatable';
import { usePathname } from "expo-router";
import Menu from "./menu";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <View style={{
                margin: 10,
                padding: 20,
            }}
        >
            <View style={{ marginBottom: 30,flexDirection: isMenuOpen? 'column': 'row', alignItems: 'flex-start', height: 80, justifyContent: 'flex-start' }}>
                <TouchableOpacity onPress={() => { setIsMenuOpen(!isMenuOpen)}} style={{justifyContent: 'flex-start'}}>
                    <Text style={{fontSize: 17}}>Menu </Text>
                </TouchableOpacity>
                {
                    isMenuOpen && pathname === '/' && <Menu />
                }
            </View>
            <ScrollView>
                <View>
                    <Animatable.View animation="fadeInLeft" duration={1000} delay={200} style={{ marginBottom: 5}}>
                        <Text style={{ color:'black', fontSize: 20}}>👋 Hi, I'm</Text>
                        <Text style={{fontSize: 75, fontWeight: 800, color: 'green'}}>Tolemy Kashyap</Text>
                    </Animatable.View>
                    <View style={{padding: 15, marginBottom: 10}}>
                        <Text style={{fontWeight:800,marginTop:10, marginBottom: 10}}>
                            Full Stack Developer | Tech Enthusiast
                        </Text>
                        <Text>
                            I build intuitive, performant, and scalable web applications. With a strong foundation in JavaScript and frameworks like React, React-Native, Next.js, and Node.js, I focus on crafting seamless user experiences and clean architectures. From real-time bidding platforms to NLP-powered tools, I love turning ideas into live, interactive products.
                            Let's build something great together 🚀
                        </Text>
                    </View>
                    <Animatable.View animation="pulse" iterationCount="infinite" duration={1000} style={{alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={()=>{Linking.openURL('https://drive.google.com/file/d/1qlY7IFo6bqzGTOiv_m4ES12IrrL6BmTe/view?usp=sharing')}}
                            style={{marginBottom:25, alignItems: 'center', padding:10, borderWidth: 1, borderColor: 'green', borderRadius: 8, backgroundColor: '#fff7ed'}}
                        >
                            <Text style={{color:'green',fontWeight:800,}}>Download Resume</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                    <View style={{marginBottom: 50,padding: 15}}>
                        <View style={{marginBottom: 10}}>
                            <Text style={{fontSize:15,color:'#024c69' }}>Find me on: </Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <TouchableOpacity onPress={()=> Linking.openURL('https://www.linkedin.com/in/tolemy-kashyap/')}>
                                <AntDesign name="linkedin-square" size={24} color="#33691d" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/KashyapTolemy')}>
                                <AntDesign name="github" size={24} color="#33691d" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://medium.com/@kashyaptolemy03')}>
                                <AntDesign name="medium-monogram" size={24} color="#33691d" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>Linking.openURL('https://www.instagram.com/tolemy_kashyap/')}>
                                <AntDesign name="instagram" size={24} color="#33691d" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )    
}