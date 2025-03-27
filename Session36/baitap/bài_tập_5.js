document.addEventListener("DOMContentLoaded", () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function showTasks() {
        document.getElementById("pendingTasks").innerHTML = "";
        document.getElementById("inProgressTasks").innerHTML = "";
        document.getElementById("doneTasks").innerHTML = "";

        tasks.forEach((task, index) => {
            let taskHTML = `
                <div class="task-card">
                    <p>${task.name}</p>
                    ${task.status !== "done" ? `<button onclick="moveTask(${index})">Chuyển tiếp</button>` : ""}
                </div>
            `;
            document.getElementById(task.status + "Tasks").innerHTML += taskHTML;
        });
    }

    window.addTask = function () {
        let taskName = document.getElementById("taskName").value.trim();
        if (taskName === "") {
            alert("Vui lòng nhập tên công việc!");
            return;
        }
        tasks.push({ name: taskName, status: "pending" });
        saveTasks();
        showTasks();
        document.getElementById("taskName").value = "";
    };

    window.moveTask = function (index) {
        if (tasks[index].status === "pending") {
            tasks[index].status = "inProgress";
        } else if (tasks[index].status === "inProgress") {
            tasks[index].status = "done";
        }
        saveTasks();
        showTasks();
    };

    document.querySelector(".task-input button").addEventListener("click", addTask);

    showTasks();
});
