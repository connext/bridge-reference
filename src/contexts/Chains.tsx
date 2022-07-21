import * as React from 'react';

export function createCtx<StateType, ActionType>(reducer: React.Reducer<StateType, ActionType>, initialState: StateType) {
    const defaultDispatch: React.Dispatch<ActionType> = () => initialState;
    const ctx = React.createContext({
        state: initialState,
        dispatch: defaultDispatch
    });

    function Provider(props: React.PropsWithChildren<{}>) {
        const [state, dispatch] = React.useReducer<React.Reducer<StateType, ActionType>>(reducer, initialState);
        return <ctx.Provider value={{ state, dispatch }} {...props} />;
    }

    return [ctx, Provider] as const;
}

interface IAppState {
    chains: any[];
}

const initialState: IAppState = {
    chains: []
};

type AppState = typeof initialState;
type Action = { type: 'set'; payload: any[] } | { type: 'reset' };

function reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'set':
            return { chains: action.payload };
        default:
            throw new Error();
    }
}

const [ctx, ChainsProvider] = createCtx(reducer, initialState);

function useChains() {
    const context = React.useContext(ctx);

    if (context === undefined) {
        throw new Error('useChains must be used within a ChainsProvider');
    }

    return context;
}

export { ChainsProvider, useChains };
