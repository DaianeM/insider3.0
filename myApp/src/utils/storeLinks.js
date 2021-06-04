import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar os links salvos.
export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}

//salvar link no storage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //Se tiver algum link salvo com esse mesmo ID / ou duplicado ignora
    const hasLink = linksStored.some(link => link.id === newLink.id);

    if(hasLink){
        return; //parar execução aqui..
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
}

//deletar algum link especifico
export async function deleteLink(links, id){
    let myLinks = links.filter((item)=>{
        return(item.id !== id)
    })

    await AsyncStorage.setItem('sujeitolinks', JSON.stringify(myLinks));
    return myLinks;
}