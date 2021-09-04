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
} from './styles';


import CardComponent from '../../components/CardComponent';

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
                            return <CardComponent index={index} element={element}  />
                        })
                    :null
                }
                
            </ContainerPage>
        </Container>
      </>
  );
}

export default Principal;