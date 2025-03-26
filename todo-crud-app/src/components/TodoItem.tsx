import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: () => void;
  onUpdate: (id: number) => void;
  editingId: number | null;
  editText: string;
  setEditText: (text: string) => void;
}

const TodoItem: React.FC<Props> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
  onUpdate,
  editingId,
  editText,
  setEditText
}) => {
  return (
    <li>
      {editingId === todo.id ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => onUpdate(todo.id)}>✅ Update</button>
        </>
      ) : (
        <>
          <span
            onClick={() => onToggle(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>
          <button onClick={onEdit}>✏️ Edit</button>
          <button onClick={() => onDelete(todo.id)}>❌ Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
