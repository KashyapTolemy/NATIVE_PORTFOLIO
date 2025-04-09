import { View, Text, TouchableOpacity,TextInput,Keyboard,Platform,TouchableWithoutFeedback,KeyboardAvoidingView,ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import Menu from './menu';
import { Linking } from 'react-native';

export default function Contact() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = async () => {
        if (!name || !subject || !message) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        const to = 'kashyaptolemy@gmail.com';
        const subjectMessage = `${subject}`;
        const body = `From ${name},\n\nMessage:\n${message}`;

        const url = `mailto:${to}?subject=${encodeURIComponent(subjectMessage)}&body=${encodeURIComponent(body)}`;

        try {
            const canOpen = await Linking.canOpenURL(url);
            if (!canOpen) {
            Alert.alert('Error', 'Could not open the email client.');
            return;
            }
            await Linking.openURL(url);
        } catch (error) {
            console.error('Failed to open mail client:', error);
            Alert.alert('Error', 'Something went wrong while opening the email client.');
        }
    };

    return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{
                                margin: 10,
                                padding: 20,
                            }}
                        >
                            <View style={{ marginBottom: 30,flexDirection: isMenuOpen? 'column': 'row',alignItems: 'flex-start', height: 100, justifyContent: 'flex-start' }}>
                                <TouchableOpacity onPress={() => { setIsMenuOpen(!isMenuOpen)}} style={{justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 17}}>Menu </Text>
                                </TouchableOpacity>
                                {
                                    isMenuOpen ? (
                                        <Menu />
                                    ) : (
                                        <Text style={{fontSize: 17}}>/ Contact</Text>
                                    )
                                }
                            </View>
                            <View style={{ justifyContent: 'center', height: 500}}>
                                <View style={{marginBottom: 8}}>
                                    <Text style={{marginBottom: 4}}>Name:</Text>
                                    <TextInput
                                        value={name}
                                        onChangeText={setName}
                                        placeholder="Enter your name"
                                        style={{borderWidth: 1,
                                            borderColor: '#ccc',
                                            borderRadius: 8,
                                            paddingHorizontal: 12,
                                            paddingVertical: 8,
                                        }}
                                    />
                                </View>
                                <View style={{marginBottom: 8}}>
                                    <Text style={{marginBottom: 4}}>Subject:</Text>
                                    <TextInput
                                        value={subject}
                                        onChangeText={setSubject}
                                        placeholder="Enter your subject"
                                        style={{borderWidth: 1,
                                            borderColor: '#ccc',
                                            borderRadius: 8,
                                            paddingHorizontal: 12,
                                            paddingVertical: 8,
                                        }}
                                    />
                                </View>
                                <View style={{marginBottom: 8}}>
                                    <Text style={{marginBottom: 4}}>Lets cook something together:</Text>
                                    <TextInput
                                        value={message}
                                        onChangeText={setMessage}
                                        placeholder="Drop me a message"
                                        multiline
                                        numberOfLines={6}
                                        style={{borderWidth: 1,
                                            borderColor: '#ccc',
                                            borderRadius: 8,
                                            paddingHorizontal: 12,
                                            paddingVertical: 8,
                                            height: 120, 
                                            textAlignVertical: 'top',
                                        }}
                                    />
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <TouchableOpacity
                                        onPress={handleFormSubmit}
                                        style={{marginTop: 10, alignItems: 'center', padding:10, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, backgroundColor: 'green', width: 100}}
                                    >
                                        <Text style={{color:'white',fontWeight:800}}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
    )
}