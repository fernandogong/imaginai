import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { CadastroStyles } from '../Styles/CadastroStyles';

const CadastroScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    return (
        <View style={CadastroStyles.containerMaster}>
            <Image
                style={CadastroStyles.background}
                source={require('../Assets/rpg_background.png')}
                blurRadius={5}
            />
            <View style={CadastroStyles.header}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.goBack()
                    }>
                    <FontAwesome
                        style={CadastroStyles.arrowIcon}
                        name='arrow-left'
                        color='white'>
                    </FontAwesome>
                </TouchableOpacity>
                <Text style={CadastroStyles.titleText}>CADASTRO</Text>
            </View>
            <View style={CadastroStyles.body}>
                <Text style={CadastroStyles.credencialsTitle}>EMAIL</Text>
                <View style={CadastroStyles.inputContainer}>
                    <MaterialCommunityIcons
                        style={CadastroStyles.emailIcon}
                        name='email'
                        color='#AB8103'>
                    </MaterialCommunityIcons>
                    <TextInput
                        style={CadastroStyles.input}
                        onChangeText={(text) =>
                            setEmail(text)
                        }
                        value={email} placeholder='digite seu email'
                        placeholderTextColor="#AB8103"
                        keyboardType='email-address'>
                    </TextInput>
                </View>
                <View style={CadastroStyles.underline}></View>
                <Text style={CadastroStyles.credencialsTitle}>SENHA</Text>
                <View style={CadastroStyles.inputContainer}>
                    <FontAwesome
                        style={CadastroStyles.lockIcon}
                        name='lock'
                        color='#AB8103'>
                    </FontAwesome>
                    <TextInput
                        style={CadastroStyles.input}
                        onChangeText={(text) =>
                            setSenha(text)
                        }
                        value={senha} placeholder='digite sua senha'
                        placeholderTextColor="#AB8103"
                        keyboardType='email-address'>
                    </TextInput>
                </View>
                <View style={CadastroStyles.underline}></View>
                <Text style={CadastroStyles.credencialsTitle}>CONFIRMAR SENHA</Text>
                <View style={CadastroStyles.inputContainer}>
                    <FontAwesome
                        style={CadastroStyles.lockIcon}
                        name='lock'
                        color='#AB8103'>  
                    </FontAwesome>
                    <TextInput
                        style={CadastroStyles.input}
                        onChangeText={(text) =>
                            setConfirmarSenha(text)
                        }
                        value={confirmarSenha}
                        placeholder='confirme sua senha'
                        placeholderTextColor="#AB8103"
                        keyboardType='email-address'>
                    </TextInput>
                </View>
                <View style={CadastroStyles.underline}></View>
                <TouchableWithoutFeedback
                    onPress={() =>
                        navigation.navigate('LoginScreen')
                    }>
                    <Text style={CadastroStyles.alreadyHaveAccountText}>Já tenho uma conta</Text>
                </TouchableWithoutFeedback>
                <TouchableOpacity
                    style={CadastroStyles.cadastrarButton}
                    onPress={() =>
                        navigation.navigate('MenuScreen')
                    }>
                    <Text style={CadastroStyles.cadastrarText}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export { CadastroScreen };