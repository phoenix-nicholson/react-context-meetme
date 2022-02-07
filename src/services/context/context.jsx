import { useContext, createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')

  return <UserContext.Provider value={(user, setUser)}>{children}</UserContext.Provider>
}

const useUser = () => {
  const context = useContext(UserContext)
  if (UserContext === undefined) {
    throw new Error('useUser needs to be used within a UserContext provider')
  }
  return context
}

export { useUser, UserProvider }
