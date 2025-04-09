import { View, Text, Button, TouchableOpacity } from "react-native";
import Menu from "./menu";
import { useState } from "react";
import { usePathname } from "expo-router";

export default function WorkExperience() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    return (
        <View style={{
            margin: 10,
            padding: 20,
        }}>
            <View style={{ marginBottom: 30 ,flexDirection: isMenuOpen? 'column': 'row', alignItems: 'flex-start', height: 100, justifyContent: 'flex-start' }}>
                <TouchableOpacity onPress={() => { setIsMenuOpen(!isMenuOpen)}} style={{justifyContent: 'flex-start'}}>
                    <Text style={{fontSize: 17}}>Menu </Text>
                </TouchableOpacity>
                {
                    isMenuOpen && pathname==='/components/work_experience' ? (
                        <Menu />
                    ) : (
                        <Text style={{fontSize: 17}}>/ Work Experience</Text>
                    )
                }
            </View>
            <View style={{marginBottom:30,}}>
                <Text style={{fontSize:15, color: '#ff5758', fontWeight: 700,}}>TATA 1mg</Text>
                <Text style={{color: '#024c69',marginTop: 2,marginBottom: 10}}>January,2025 - Present</Text>
                <Text style={{marginBottom:5, color:'#4d4d4d'}}>→ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim consectetur reiciendis minus similique a delectus ea iusto fugit temporibus.</Text>
                <Text style={{marginBottom:5, color:'#4d4d4d'}}>→ Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti ducimus facere id doloribus! Eius facere sit esse necessitatibus expedita?</Text>
                <Text style={{marginBottom:5, color:'#4d4d4d'}}>→ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, illum. Illo sed beatae aspernatur amet officia non in, recusandae error!</Text>
            </View>
            <View style={{marginBottom:30,}}>
                <Text style={{color: '#a40ffe', fontWeight: 700}}>ACCENTURE</Text>
                <Text style={{justifyContent:'flex-end', color: '#024c69',marginTop: 2,marginBottom: 10}}>May,2024 - July,2024</Text>
                <Text style={{marginBottom:5, color:'#4d4d4d'}}>→ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim consectetur reiciendis minus similique a delectus ea iusto fugit temporibus.</Text>
                <Text style={{marginBottom:5, color:'#4d4d4d'}}>→ Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti ducimus facere id doloribus! Eius facere sit esse necessitatibus expedita?</Text>
                <Text style={{marginBottom:5, color:'#4d4d4d'}}>→ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, illum. Illo sed beatae aspernatur amet officia non in, recusandae error!</Text>
            </View>
        </View>
    )
}