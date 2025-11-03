import axios from "axios";
import {
  children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import DeleteModel from "../components/DeleteModel";
import EditModel from "../components/EditModel";

const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [delModopen, setDelModeopen] = useState(false);
  const [editModOpen, setEditModOpen] = useState(false);
  const [selectId, setSelectId] = useState(null);

  const addtodo = async (task) => {
    const data = {
      title: task,
    };
    try {
      const res = await axios.post("http://localhost:3002/users", data);
      setTodo([...todo, res.data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getdata = async () => {
    try {
      const res = await axios.get("http://localhost:3002/users");
      setTodo(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deletetodoitem = async () => {
    try {
      await axios.delete(`http://localhost:3002/users/${selectId}`);
      setTodo((prev) => prev.filter((item) => item.id !== selectId));
      setDelModeopen(false);
      setSelectId(null);
    } catch (error) {
      console.log(error.message);
    }
  };
  const updatetodo = async (newtitle) => {
    try {
      const res = await axios.put(`http://localhost:3002/users/${selectId}`, {
        title: newtitle,
      });
      setTodo(todo.map((item) => (item.id === selectId ? res.data : item)));
      setEditModOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deletemodel = (id) => {
    setDelModeopen(true);
    setSelectId(id);
  };
  const editmodel = (id) => {
    setEditModOpen(true);
    setSelectId(id);
  };
  const closedelmodel = () => {
    setDelModeopen(false);
  };
  const closeEditmodel = () => {
    setEditModOpen(false);
  };
  const currentvalue = todo.find((item) => item.id === selectId);
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      {delModopen && (
        <DeleteModel
          closedelmodel={closedelmodel}
            currentvalue={currentvalue.title}
          deletetodoitem={deletetodoitem}
        />
      )}
      {editModOpen && (
        <EditModel
          closeEditmodel={closeEditmodel}
          currentvalue={currentvalue.title}
          updatetodo={updatetodo}
        />
      )}
      <TodoContext.Provider value={{ addtodo, todo, deletemodel, editmodel }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const usetodo = () => useContext(TodoContext);
