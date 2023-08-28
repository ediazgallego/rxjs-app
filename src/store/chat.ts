import { Subject } from "rxjs";

const subject = new Subject();

const initialState = {
    data: [],
    newDataCount: 0,
}

let state = initialState;

const chatStore = {
    init: () => {
        state = {...state, newDataCount: 0}
        subject.next(state)
    },
    subscribe: (setState: any) => subject.subscribe(setState),
    sendMessage: (message: any) => {
        state = {
            ...state,
            //@ts-expect-error
            data: [...state.data, message],
            newDataCount: state.newDataCount + 1
        };
        subject.next(state);
    },
    clearChat: () => {
        state = initialState;
        subject.next(state);
    },
    initialState
}

export default chatStore;
