import React from 'react';
import {View, Text} from 'react-native';

import ListItem from '../../components/ListItem';
import Menu from '../../components/Menu';
import {Container, Title, ListLinks} from './styles';
import StatusBarPage from '../../components/StatusBarPage'

export default function MyLinks(){
    return(
        <Container>

            <StatusBarPage
            barStyle="light-content"
            backgroundColor="#132742"
            />

            <Menu />

            <Title>Meus Links</Title>

            <ListLinks
                data={[{id:1, link:'teste.com'}, {id:2, link:'teste.com'}]}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <ListItem/> }
                contentContainerStyle={{paddingBottom: 20}}
                showsVerticalScrollIndicator={false}
            >

            </ListLinks>
        </Container>
    )
}
