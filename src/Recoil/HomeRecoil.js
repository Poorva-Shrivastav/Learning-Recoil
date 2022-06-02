import { useState } from 'react'
import {useRecoilState, useRecoilValue, atom, RecoilRoot } from 'recoil'

const usersState = atom({
    key: "usersState",
    default: []
})

const loadingState = atom({
    key: "loadingState",
    default: false
})

function FetchUsersList(){
    const [, setUsers] = useRecoilState(usersState)
    const [, setLoadingState] = useRecoilState(loadingState)

    const refreshHandler = () => {
        setLoadingState(true)
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            setLoadingState(false)
        })
    }

    return(
        <>
        <button onClick={refreshHandler}>Refresh</button>
        </>
    )
}


function UsersList(){
    const [darkMode, setDarkMode] = useState(false)
    const users = useRecoilValue(usersState)
    const loading = useRecoilValue(loadingState)
     
    if(loading){
        return(<div>
            <p>Loading...</p>
        </div>)        
    }
    else{
        return(<div>
            <p>Users List : {users.length}</p>
        </div>)
    }
}

function HomeRecoil() {
  return (
      <RecoilRoot>
          <FetchUsersList />
          <UsersList />
      </RecoilRoot>
  )
}

export default HomeRecoil