const TodoStats = ({ todos }) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div className="todo-stats">
      <p>Total Tasks: {totalTodos}</p>
      <p>Completed Tasks: {completedTodos}</p>
    </div>
  );
};

export default TodoStats;
