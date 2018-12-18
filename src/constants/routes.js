import Main from "../containers/todos/main";

export const PATHS = Object.freeze({
  INDEX: '/',
  TODOS: '/todos',
  SING_UP: '/sign_up',
  LOGIN: '/login',
  TODOS_DETAILS: '/todos/:id'
});

export const ROUTES = Object.freeze([
  {
    path: PATHS.INDEX,
    component: Main
  }
]);
