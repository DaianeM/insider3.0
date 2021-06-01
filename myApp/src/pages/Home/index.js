import React from 'react';

import {LinearGradient} from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

import {Feather} from '@expo/vector-icons';


import {ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText
} from './styles';

export default function Home(){
    return(
        <LinearGradient 
            colors={['#1ddbb9', '#132742']}
            style={{flex:1, justifyContent:'center'}}
        >

        <StatusBarPage
            barStyle='light-content'
            backgroundColor='#1ddbb9'
        />

        <Menu />

        <ContainerLogo>
            <Logo source={require('../../assets/Logo.png')} resizeMode="contain"/>
        </ContainerLogo>

        <ContainerContent>
            <Title>SujeitoLink</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>

            <ContainerInput>
                <BoxIcon>
                    <Feather name="link" size={22} color="#FFF"/>
                </BoxIcon>
                <Input placeholder="Cole seu link aqui..." placeholderTextColor="white"/>
            </ContainerInput>

            <ButtonLink>
                <ButtonLinkText>Gerar Link</ButtonLinkText>
            </ButtonLink>
        </ContainerContent>
        
        </LinearGradient>
    )
}