- Step 1: Build a static version

- Step 2: Identify states

  - The list of tasks: `tasks, status, incomplete, newTask`
  - The text of the new task that user has entered
  - The value of the checkbox Show incompleted tasks only

- Step 3: Handling events

  - Form submit for a new task
  - Change a task's status
  - Removing a task
  - Toggle show incomplete tasks only

- Trick nho tao id: `id: Date.now()`
- Để make sure data truyền đi là đúng `checked={Boolean(task.status)}`. có thể bỏ Boolean do Javascript tự cho
- Tips:

  - Phải khai báo `state` rồi mới setState đc. Kiểu làm cho giá trị đó là default (không tương tác được, sau đó thì mình update bằng `setState`) `    checked={showIncomplete}    onChange={(e) => setShowIncomplete(e.target.checked)}`

- Trick lord để dùng return 2 element là bọc trong dấu : `<> ......... </>`
