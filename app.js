const notifications = document.querySelector(".notifications"),
 buttons = document.querySelectorAll(".buttons .btn");


 const toastDetails = {
    timer:5000,
    success: {
        icon: "fa-circle-check",
        text: "Success: This is a success toast.",
    },
    error: {
        icon: "fa-circle-xmark",
        text: "error: This is a erroe toast.",
    },
    warning: {
        icon: "fa-triangle-exclamation",
        text: "warning: This is a warning toast.",
    },
    info: {
        icon: "fa-circle-check",
        text: "info: This is a information toast.",
    }
 }

 const removeToast = (toast) => {
       toast.classList.add("hide");
       if(toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
       setTimeout(() => toast.remove(), 500) // removing the toast after 500ms
 }
const createToast = (id) => {
    const {icon,text} = toastDetails[id];
    const toast  = document.createElement("li"); // Creating a new 'li' element for the toast
    toast.className = `toast ${id}`; // Setting the classes for the toast
    toast.innerHTML = ` <div class="column">
    <i class="fa-solid ${icon}"></i>
    <span>${text}</span>
  </div>
  <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`; // Setting the innerHTML for the toast

  notifications.appendChild(toast);
  // Setting a timeout to remove the toast after the specified durations
  toast.timeoutId = setTimeout(() => removeToast(), toastDetails.timer);
}

buttons.forEach(btn => {
     btn.addEventListener("click", () => createToast(btn.id));
});

