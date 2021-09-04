interface IRepos{
    username:string;
    reponame:string;
}

interface INameRepo{
    reponame:string;
}

const url = 'https://api.github.com';

export const ReposRouter = async(objRepo : INameRepo) =>{

    return await fetch(url+`/search/repositories?q={name=${objRepo.reponame}}`)
            .then( response => { 
                return !response.ok? {status:response.status} : response.json()
            })
            .catch( error => { return error })

}


export const UserReposRouter = async(objRepo : IRepos) =>{
    return await fetch(url+`/repos/${objRepo.username}/${objRepo.reponame}`)
            .then( response => { 
                return !response.ok? {status:response.status} : response.json()
            })
            .catch( error => { return error })
}