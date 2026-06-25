// ─── State ────────────────────────────────────────────────
let tasks         = [];
let currentFilter = "all";

// ─── Element Selection ────────────────────────────────────
const taskInput      = document.querySelector("#taskInput");
const addBtn         = document.querySelector("#addBtn");
const taskList       = document.querySelector("#taskList");
const emptyState     = document.querySelector("#emptyState");
const inputError     = document.querySelector("#inputError");
const clearDoneBtn   = document.querySelector("#clearDoneBtn");
const taskCounter    = document.querySelector("#taskCounter");
const completedCount = document.querySelector("#completedCount");
const totalCount     = document.querySelector("#totalCount");
const filterBtns     = document.querySelectorAll(".filter-btn");

// ─── LocalStorage ─────────────────────────────────────────
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const saved = localStorage.getItem("tasks");
    tasks = saved ? JSON.parse(saved) : [];
}

// ─── Get Filtered Tasks ───────────────────────────────────
function getFilteredTasks() {
    if (currentFilter === "active") {
        return tasks.filter(task => !task.completed);
    }
    if (currentFilter === "completed") {
        return tasks.filter(task => task.completed);
    }
    return tasks; // all
}

// ─── Update Counter ───────────────────────────────────────
function updateCounter() {
    const remaining  = tasks.filter(task => !task.completed).length;
    const completed  = tasks.filter(task =>  task.completed).length;
    const total      = tasks.length;

    taskCounter.textContent    = remaining;
    completedCount.textContent = completed;
    totalCount.textContent     = total;
}

// ─── Render Tasks ─────────────────────────────────────────
function renderTasks() {
    const filtered = getFilteredTasks();

    // clear list
    taskList.innerHTML = "";

    // show/hide empty state
    if (filtered.length === 0) {
        emptyState.classList.remove("hidden");
        taskList.classList.add("hidden");
    } else {
        emptyState.classList.add("hidden");
        taskList.classList.remove("hidden");
    }

    // render each task
    filtered.forEach(task => {
        const taskEl = document.createElement("div");
        taskEl.classList.add(
            "flex", "items-center", "justify-between",
            "p-3", "rounded-lg", "border", "group",
            task.completed ? "bg-gray-50" : "bg-white",
            task.completed ? "border-gray-100" : "border-gray-200"
        );

        taskEl.innerHTML = `
            <!-- Checkbox + Text -->
            <div class="flex items-center gap-3 flex-1 min-w-0">

                <!-- Checkbox -->
                <button
                    data-id="${task.id}"
                    class="toggle-btn flex-shrink-0 w-6 h-6 rounded-full border-2
                           flex items-center justify-center transition duration-300
                           ${task.completed
                               ? "bg-blue-600 border-blue-600 text-white"
                               : "border-gray-300 hover:border-blue-600"
                           }">
                    ${task.completed ? "✓" : ""}
                </button>

                <!-- Task Text -->
                <span class="text-sm flex-1 truncate transition duration-300
                             ${task.completed
                                 ? "line-through text-gray-400"
                                 : "text-gray-700"
                             }">
                    ${task.text}
                </span>

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
}

// ─── Add Task ─────────────────────────────────────────────
function addTask() {
    const text = taskInput.value.trim();

    // validate
    if (text === "") {
        inputError.classList.remove("hidden");
        taskInput.classList.add("ring-2", "ring-red-400");
        setTimeout(() => {
            inputError.classList.add("hidden");
            taskInput.classList.remove("ring-2", "ring-red-400");
        }, 1500);
        return;
    }

    // create task
    const newTask = {
        id:        Date.now(),
        text:      text,
        completed: false
    };

    // add to array
    tasks.push(newTask);
    saveTasks();
    renderTasks();

    // clear input
    taskInput.value = "";
    taskInput.focus();
}

// ─── Toggle Task ──────────────────────────────────────────
function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );
    saveTasks();
    renderTasks();
}

// ─── Delete Task ──────────────────────────────────────────
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

// ─── Clear Completed ──────────────────────────────────────
function clearCompleted() {
    // nothing to clear
    if (!tasks.some(task => task.completed)) {
        clearDoneBtn.textContent = "Nothing to clear!";
        setTimeout(() => {
            clearDoneBtn.textContent = "Clear Completed";
        }, 1500);
        return;
    }

    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    renderTasks();
}

// ─── Update Active Filter Button ──────────────────────────
function updateFilterBtns(activeFilter) {
    filterBtns.forEach(btn => {
        const isActive = btn.dataset.filter === activeFilter;

        if (isActive) {
            btn.classList.add("bg-blue-600", "text-white");
            btn.classList.remove(
                "border-2", "border-gray-200",
                "text-gray-500", "hover:border-blue-600",
                "hover:text-blue-600"
            );
        } else {
            btn.classList.remove("bg-blue-600", "text-white");
            btn.classList.add(
                "border-2", "border-gray-200",
                "text-gray-500", "hover:border-blue-600",
                "hover:text-blue-600"
            );
        }
    });
}

// ─── Event Listeners ──────────────────────────────────────

// add button click
addBtn.addEventListener("click", addTask);

// Enter key
taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});

// task list — event delegation for toggle and delete
taskList.addEventListener("click", (e) => {
    // find closest button with data-id
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

// filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;
        updateFilterBtns(currentFilter);
        renderTasks();
    });
});

// clear completed
clearDoneBtn.addEventListener("click", clearCompleted);

// ─── Initialize ───────────────────────────────────────────
loadTasks();
renderTasks();
updateFilterBtns("all");