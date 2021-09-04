import React,{
    useState,
} from 'react';

import { 
    GlobalStyle,
    Container,
    HeadDiv,
    InputValue,
    ContainerPage,
    Button,
    DivInput,
    ButtonText,
    DivCard,
    TextElement,
    DivText,
    LabelTextElement,
    Avatar,
    CardContainer,
    DivInfos,
    DivHTMLURL,
} from './styles';


import {
    ReposRouter,
    UserReposRouter,
} from '../../services/GithubService'


interface IOwner{
    login:string;
    avatar_url:string;
}

interface IRepo{
    owner:IOwner;
    html_url:string;
    size:number;
    language:string;
    forks_count:number;
}

const Principal: React.FC = () => {

    const [repo, SetRepo] = useState('');
    const [user, SetUser] = useState('');

    const [repoList, SetRepoList] = useState<IRepo[]>([]);

    const inputvalidate = () =>{
        if(repo === '' || repo.replace(/\s/g, '').length === 0) return false;
        return true;
    }

    const routeController = async() =>{
        let response;

        user === '' || user.replace(/\s/g, '').length === 0?
            response = await ReposRouter({reponame: repo})
        :
            response = await UserReposRouter({username:user, reponame:repo})

        if(!response.status){
            console.log(response)
            if(response.items){
                SetRepoList(response.items);
            }
            else{
                const arr:IRepo[] = [response];
                SetRepoList(arr);
            }
        }
        else{
            user === '' || user.replace(/\s/g, '').length === 0?
            alert('Erro na requisição.\nVerifique o valor no nome do repositório.')
        :
            alert('Erro na requisição.\nVerifique o valor do nome do usuário e do repositório.')
        }    
    }


    const CardElement = (element:IRepo, index:number) =>{
        
        return(
            <DivCard key={index}>
                <CardContainer>
                    <Avatar
                        src={element.owner.avatar_url}
                    />
                    <DivInfos>
                    <DivText>
                        <LabelTextElement>
                            Login: 
                        </LabelTextElement>
                        <TextElement>
                            {element.owner.login}
                        </TextElement>
                    </DivText>
                    <DivHTMLURL>
                        <LabelTextElement>
                            HTML URL: 
                        </LabelTextElement>
                        <TextElement>
                            {element.html_url}
                        </TextElement>
                    </DivHTMLURL>
                    <DivText>
                        <LabelTextElement>
                            Size: 
                        </LabelTextElement>
                        <TextElement>
                            {element.size}
                        </TextElement>
                    </DivText>
                    <DivText>
                        <LabelTextElement>
                            Language: 
                        </LabelTextElement>
                        <TextElement>
                            {element.language}
                        </TextElement>
                    </DivText>
                    <DivText>
                        <LabelTextElement>
                            Forks Count:  
                        </LabelTextElement>
                        <TextElement>
                            {element.forks_count}
                        </TextElement>
                    </DivText>
                    </DivInfos>
                </CardContainer>
            </DivCard>
        );
    }

  return (
      <>
        <GlobalStyle />
        <Container>
            <HeadDiv />
            <ContainerPage>
                <DivInput>
                    
                    <InputValue
                        placeholder="Insira um nome de usuário(Opcional)"
                        value={user}
                        onChange={(e)=>{SetUser(e.target.value)}}
                    />
                    
                    <InputValue
                        placeholder="Insira um nome de repositório"
                        value={repo}
                        onChange={(e)=>{SetRepo(e.target.value)}}
                    />
                    <Button
                        onClick={async()=>{
                            if(!inputvalidate()){
                                alert('Error\nO nome do repositório deve ser preenchido!');
                            }
                            else{
                                await routeController();
                            }
                        }}
                    >
                        <ButtonText>
                            Pesquisar
                        </ButtonText>
                    </Button>
                </DivInput>

                {
                    
                    repoList.length > 0?
                        repoList.map((element, index) => {
                           return CardElement(element, index);
                        })
                    :null
                }
                
            </ContainerPage>
        </Container>
      </>
  );
}

export default Principal;