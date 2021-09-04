import React from 'react';

// import { Container } from './styles';


import {
    DivCard,
    TextElement,
    DivText,
    LabelTextElement,
    Avatar,
    CardContainer,
    DivInfos,
    DivHTMLURL,
} from './styles';


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


interface Props{
    element:IRepo;
    index:number;
}

const CardComponent: React.FC<Props> = ({index,element}) => {
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

export default CardComponent;