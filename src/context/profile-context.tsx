import { createContext,useState } from "react";

type ProfileContextProps={
  userName:string;
};

export const ProfileContext = createContext<ProfileContextProps>(
  {} as ProfileContextProps
)

export function ProfileProvider({children}:{children:React.ReactNode}){
  const  [userName, setUserName] = useState('Victor Daniel')
  
  return(
    <ProfileContext.Provider value={{userName}}>
      {children}
    </ProfileContext.Provider>
  )
}
