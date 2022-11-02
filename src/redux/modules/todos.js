const initialState = {
    todos: [
        {
            id: 1,
            title: "Test 1",
            desc: "Desc test 1",
            isDone: false
        },
        {
            id: 2,
            title: "Redux",
            desc: "Desc Redux",
            isDone: true
        },
    ],
    todo: {
        id: 0,
        title: '',
        desc: '',
        isDone: false
    }
};

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const STATUS_TODO = "STATUS_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";

export const addTodo = toDo => ({ type: ADD_TODO, payload: toDo });
export const delTodo = toDo => ({ type: DEL_TODO, payload: toDo });
export const statusTodo = toDo => ({ type: STATUS_TODO, payload: toDo});
export const getTodoByID = toDo => ({ type: GET_TODO_BY_ID, payload: toDo});
// Reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todos: [...state.todos, action.payload],
            };
        case DEL_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case STATUS_TODO:
            return{
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                      return {...todo, isDone: !todo.isDone,};
                    } else {
                      return { ...todo };
                    }
                  })
            };
            case GET_TODO_BY_ID:
                return {
                  ...state,
                  todo: state.todos.find((todo) => {
                    return todo.id === action.payload;
                  }),
                };
        default:
            return state;
    }
};

export default todos;