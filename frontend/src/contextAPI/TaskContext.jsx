import { createContext, useContext } from "react";

const TaskContextProvider = createContext();

export const useTaskContext = () => {
  return useContext(TaskContextProvider);
};

const TaskContext = ({ children, value }) => {
  return (
    <TaskContextProvider.Provider value={value}>
      {children}
    </TaskContextProvider.Provider>
  );
};

export default TaskContext;
