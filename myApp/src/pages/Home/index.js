import React, {useState} from 'react';
import {TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal, ActivityIndicator} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

import {Feather} from '@expo/vector-icons';

import api from '../../services/api';
import {saveLink} from '../../utils/storeLinks';

import {ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText
} from './styles';
import ModalLink from '../../components/ModalLink';

export default function Home(){

    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState({});


    async function handleShortLink(){
        setLoading(true);

        try {
            const response = await api.post('/shorten',{
                long_url: input
            })
            setData(response.data);
            setModalVisible(true);

            saveLink('sujeitolinks', response.data);

            Keyboard.dismiss();
            setLoading(false);
            setInput('');

        } catch (error) {
            alert('Ops parece que algo deu errado!');
            Keyboard.dismiss();
            setInput('');
            setLoading(false);
        }

    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <LinearGradient 
            colors={['#1ddbb9', '#132742']}
            style={{flex:1, justifyContent:'center'}}
        >

        <StatusBarPage
            barStyle='light-content'
            backgroundColor='#1ddbb9'
        />

        <Menu />

        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'position'}
            enabled
        >

        <ContainerLogo>
            <Logo 
                source={require('../../assets/Logo.png')} 
                resizeMode="contain"
            />
        </ContainerLogo>

        <ContainerContent>
            <Title>SujeitoLink</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>

            <ContainerInput>
                <BoxIcon>
                    <Feather 
                        name="link" 
                        size={22} 
                        color="#FFF"
                    />
                </BoxIcon>
                <Input 
                    placeholder="Cole seu link aqui..." 
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    autoCorrect={false}
                    KeyboardType="url"
                    value={input}
                    onChangeText={(texto)=> setInput(texto)}
                />
            </ContainerInput>

            <ButtonLink onPress={handleShortLink}>
                {
                    loading ? 
                    (<ActivityIndicator color="#121212" size={24}/>) : 
                    (<ButtonLinkText>Gerar Link</ButtonLinkText>)
                }
            </ButtonLink>
        </ContainerContent>

        </KeyboardAvoidingView>
        
        <Modal visible={modalVisible} transparent animationType="slide">
            <ModalLink onClose={() => setModalVisible(false)} data={data}/>
        </Modal>

        </LinearGradient>
        </TouchableWithoutFeedback>
    )
}