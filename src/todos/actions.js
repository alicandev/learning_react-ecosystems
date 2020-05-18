export const CREATE_TODO = 'CREATE_TODO'; //Redux Action
export const createTodo = text => ({ //Action Creator
    type: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});
