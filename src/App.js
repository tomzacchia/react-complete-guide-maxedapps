import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  /**
   * NOTE:
   *  1) our custom hook useHttp manages states which are ultimate attached to <App />
   *  2) when we update state via  transformTasks() {... setTasks(loadedTasks)} it forces <App /> to re-render
   *  3) useHttp() is executed as such returns a new reference to a new sendRequest function object
   * in memory. If we execute sendRequest() in useEffect and have sendRequest() as a dependency this
   * would casue an infinite loop. As such we need to wrap the method returned by the hook in useCallback.
   *  4) Originally we had useHttp({configObj}, callback), we can pass in these
   * 2 args as inputs to sendRequest rather than inputs to useHttp due to problems with new object references.
   * This allows us to minimize the amounts of time we use useCallback, useMemo, etc...
   */
  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: "https://complete-react-http-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
