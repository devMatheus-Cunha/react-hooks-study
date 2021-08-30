import React, { createContext, ReactNode, useState } from "react";

// Inteface
interface ContextProps {
  children: ReactNode;
}

interface IAuthContextProps {
  number: number;
  text: string;
  setNumber: (props: any) => void;
  setText: (props: any) => void;
}

interface IStateProps {
  number: number;
  text: string;
}

export const AuthContext = createContext({} as IAuthContextProps);

// Function context
function ContexStore({ children }: ContextProps) {
  const [state, setState] = useState<IStateProps>({
    number: 123,
    text: "Context API + Hooks",
  });

  function handleUpdateState(key: any, newValue: any) {
    setState({
      ...state,
      [key]: newValue,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        number: state.number,
        text: state.text,
        setNumber: (props: any) => handleUpdateState("number", props),
        setText: (props: any) => handleUpdateState("text", props),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default ContexStore
