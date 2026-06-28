let tasks = [];
let currentFilter = "all";

const taskInput = document.querySelector("#taskInput");
const taskCounter = document.querySelector("#taskCounter");
const addBtn = document.querySelector("#addBtn");
const inputError = document.querySelector("#inputError");
const taskList = document.querySelector("#taskList");
const emptyState = document.querySelector("#emptyState");
const completedCount = document.querySelector("#completedCount");
const totalCount = document.querySelector("#totalCount");
const clearDoneBtn = document.querySelector("#clearDoneBtn");
const filterBtns = document.querySelectorAll(".filter-btn");

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasks = () => {
  const saved = localStorage.getItem("tasks");
  tasks = saved ? JSON.parse(saved) : [];
};

const getFilteredTasks = () => {
  if (currentFilter === "completed")
    return tasks.filter((task) => task.completed);
  if (currentFilter === "active")
    return tasks.filter((task) => !task.completed);

  return tasks;
};

const updateCounter = () => {
  const remainingTasks = tasks.filter((task) => !task.completed).length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  taskCounter.textContent = remainingTasks;
  totalCount.textContent = totalTasks;
  completedCount.textContent = completedTasks;
};

const renderTasks = () => {
  const filteredTask = getFilteredTasks();

  taskList.innerHTML = "";

  if (filteredTask.length === 0) {
    emptyState.classList.remove("hidden");
    taskList.classList.add("hidden");
  } else {
    emptyState.classList.add("hidden");
    taskList.classList.remove("hidden");
  }

  filteredTask.forEach((task) => {
    const taskEl = document.createElement("div");
    taskEl.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "p-3",
      "rounded-lg",
      "border",
      "group",
      task.completed ? "bg-gray-50" : "bg-white",
      task.completed ? "border-gray-100" : "border-gray-200",
    );

    taskEl.innerHTML = `
            <!-- Checkbox + Text -->
            <div class="flex items-center gap-3 flex-1 min-w-0">

                <!-- Checkbox -->
                <button
                    data-id="${task.id}"
                    class="toggle-btn flex-shrink-0 w-6 h-6 rounded-full border-2
                           flex items-center justify-center transition duration-300
                           ${
                             task.completed
                               ? "bg-blue-600 border-blue-600 text-white"
                               : "border-gray-300 hover:border-blue-600"
                           }">
                    ${task.completed ? "✓" : ""}
                </button>
                
                <!-- Task Text -->
             <div class="flex flex-1 ">
    <p class="text-sm ${
      task.completed ? "line-through text-gray-400" : "font-semibold text-gray-600"
    }">
        ${task.text}
    </p>

    <p class="text-xs text-black-400 ml-3 border border-blue-400 p-1">
        ${task.createdAt}
    </p>
</div>
                

            </div>

            <!-- Delete Button -->
            <button
                data-id="${task.id}"
                class="delete-btn ml-2 text-gray-300 hover:text-red-500
                       opacity-0 group-hover:opacity-100
                       transition duration-300 flex-shrink-0 text-lg">
                🗑
            </button>
        `;

    taskList.appendChild(taskEl);
  });

  updateCounter();
};

const addTask = () => {
  const text = taskInput.value.trim();

  if (text === "") {
    inputError.classList.remove("hidden");
    taskInput.classList.add("ring-2", "ring-red-400");

    setTimeout(() => {
      taskInput.classList.remove("ring-2", "ring-red-400");
      inputError.classList.add("hidden");
    }, 1000);
    return;
  }

  const newTask = {
    id: Date.now(),
    text: text,
    completed: false,
    createdAt: new Date().toLocaleString(),
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  taskInput.value = "";
  taskInput.focus();
};

const toggleTask = (taskId) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskId) {
      tasks[i].completed = !tasks[i].completed;
    }
  }

  saveTasks();
  renderTasks();
};

const deleteTask = (taskId) => {
  tasks = tasks.filter((task) => task.id !== taskId);
  saveTasks();
  renderTasks();
};

const clearCompleted = () => {
  if (!tasks.some((task) => task.completed)) {
    clearDoneBtn.classList.add("bg-blue-700");
    clearDoneBtn.textContent = "Nothing to clear!";

    setTimeout(() => {
      clearDoneBtn.classList.remove("bg-blue-700");
      clearDoneBtn.textContent = "Clear Completed";
    }, 1000);

    return;
  }

  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
};

const updateFilterBtn = (activeFilter) => {
  filterBtns.forEach((btn) => {
    const isSelected = btn.dataset.filter === activeFilter;

    if (isSelected) {
      btn.classList.add("bg-blue-600", "text-white");
      btn.classList.remove(
        "border-2",
        "border-gray-200",
        "text-gray-500",
        "hover:border-blue-600",
        "hover:text-blue-600",
      );
    } else {
      btn.classList.remove("bg-blue-600", "text-white");
      btn.classList.add(
        "border-2",
        "border-gray-200",
        "text-gray-500",
        "hover:border-blue-600",
        "hover:text-blue-600",
      );
    }
  });
};

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

taskList.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-id]");

  if (!btn) return;

  const id = Number(btn.dataset.id);

  if (btn.classList.contains("toggle-btn")) {
    toggleTask(id);
  }

  if (btn.classList.contains("delete-btn")) {
    deleteTask(id);
  }
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    updateFilterBtn(currentFilter);
    renderTasks();
  });
});

clearDoneBtn.addEventListener("click", clearCompleted);

loadTasks();
renderTasks();
updateFilterBtn("all");
