import { View, Text, TouchableOpacity, Image, ScrollView, Linking } from "react-native";
import { useState, useEffect } from "react";
import Menu from "./menu";
import { usePathname } from "expo-router";
import bbLogo from '../../assets/images/bb.png';
import ewaLogo from '../../assets/images/ewa.png'
import chatifyLogo from '../../assets/images/chatify.png';
import nlpLogo from '../../assets/images/nlp.png';


export default function Projects() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    
    return (
        <View style={{
                margin: 10,
                padding: 20,
            }}
        ><View style={{ marginBottom: 30,flexDirection: isMenuOpen? 'column': 'row', alignItems: 'flex-start', height: 100, justifyContent: 'flex-start'}}>
                <TouchableOpacity onPress={() => { setIsMenuOpen(!isMenuOpen)}} style={{justifyContent: 'flex-start'}}>
                    <Text style={{fontSize: 17}}>Menu </Text>
                </TouchableOpacity>
                {
                    isMenuOpen && pathname === '/components/projects'? (
                        <Menu />
                    ) : (
                        <Text style={{fontSize: 17}}>/ Projects</Text>
                    )
                }
            </View>
            
            <ScrollView contentContainerStyle={{ padding: 10 }}>
                <View>
                    <View style={{marginBottom:30,}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{ fontSize: 20, fontWeight: 800 }}>01. </Text>
                            <TouchableOpacity onPress={() => Linking.openURL('https://bid-bazaar-frontend.vercel.app/')}>
                                <Text style={{fontSize:20, color:'purple', marginBottom: 10, }}>
                                    BidBazaar
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={bbLogo} resizeMode="contain" style={{ width:'100%',height:160}}></Image>
                        <View>
                            <View >
                                <Text style={{color: '#024c69',marginTop: 10,marginBottom: 2, fontSize:15}}>TechStack and Tools Used:</Text>
                                <Text>NextJS, ExpressJS/NodeJS, SCSS, Socket.io, MongoDB, Firebase, Git</Text>
                            </View>
                            <View>
                                <Text style={{color: '#024c69',marginTop: 10,marginBottom: 5, fontSize:15}}>Description: </Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cumque quidem, nisi, at sapiente ipsum nam officia, rem expedita consectetur dolor distinctio in velit fugiat eaque delectus provident perspiciatis repudiandae quaerat temporibus eligendi consequatur nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem nesciunt ea architecto sunt similique. Architecto doloribus vel quos sint?</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom:30,}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{ fontSize: 20, fontWeight: 800 }}>02. </Text>
                            <TouchableOpacity onPress={() => Linking.openURL('https://explore-with-abnerr.vercel.app/')}>
                                <Text style={{fontSize:20, color:'#1e7af4', marginBottom: 10}}>ExploreWithAbnerr</Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={ewaLogo} resizeMode="contain" style={{ width:'100%',height:160}}></Image>
                        <View>
                            <View >
                                <Text style={{color: '#024c69',marginTop: 10,marginBottom: 2, fontSize:15}}>TechStack and Tools Used:</Text>
                                <Text>NextJS, ExpressJS/NodeJS, SCSS, MongoDB, Git</Text>
                            </View>
                            <View>
                                <Text style={{color: '#024c69',marginTop: 10,marginBottom: 5, fontSize:15}}>Description: </Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cumque quidem, nisi, at sapiente ipsum nam officia, rem expedita consectetur dolor distinctio in velit fugiat eaque delectus provident perspiciatis repudiandae quaerat temporibus eligendi consequatur nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem nesciunt ea architecto sunt similique. Architecto doloribus vel quos sint?</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom:30,}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{ fontSize: 20, fontWeight: 800 }}>03. </Text>
                            <TouchableOpacity onPress={() => Linking.openURL('https://chatify-qrfq.onrender.com/')}>
                                <Text style={{fontSize:20, color:'#e07bbb', marginBottom: 10}}>Chatify</Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={chatifyLogo} resizeMode="contain" style={{ width:'100%',height:160}}></Image>
                        <View>
                            <View >
                                <Text style={{color: '#024c69',marginTop: 10,marginBottom: 2, fontSize:15}}>TechStack and Tools Used:</Text>
                                <Text>ReactJS, ExpressJS/NodeJS, SCSS, Socket.io, MongoDB, Git</Text>
                            </View>
                            <View>
                                <Text style={{color: '#024c69',marginTop: 10,marginBottom: 5, fontSize:15}}>Description: </Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cumque quidem, nisi, at sapiente ipsum nam officia, rem expedita consectetur dolor distinctio in velit fugiat eaque delectus provident perspiciatis repudiandae quaerat temporibus eligendi consequatur nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem nesciunt ea architecto sunt similique. Architecto doloribus vel quos sint?</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom:30,}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{ fontSize: 20, fontWeight: 800 }}>04. </Text>
                            <TouchableOpacity onPress={() => Linking.openURL('https://book-recomm-frontend.vercel.app/')}>
                                <Text style={{fontSize:20, color:'#ff5758', marginBottom: 10}}>NLPaginate</Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={nlpLogo} resizeMode="contain" style={{ width:'100%',height:160}}></Image>
                        <View>
                            <View >
                                <Text style={{color: '#024c69',marginTop: 10,marginBottom: 2, fontSize:15}}>TechStack and Tools Used:</Text>
                                <Text>Python, Flask, NextJS, SCSS, Google Collab, Git</Text>
                            </View>
                            <View>
                                <Text style={{color: '#024c69',marginTop: 10,marginBottom: 5, fontSize:15}}>Description: </Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cumque quidem, nisi, at sapiente ipsum nam officia, rem expedita consectetur dolor distinctio in velit fugiat eaque delectus provident perspiciatis repudiandae quaerat temporibus eligendi consequatur nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem nesciunt ea architecto sunt similique. Architecto doloribus vel quos sint?</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}