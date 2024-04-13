function checkName(value) {
  if (!value) value = "username";
  return value[0].toUpperCase() + value.substring(1).toLowerCase();
}

function checkSpam(str) {
  return str.replaceAll(/viagra/gi, "***");
}

function sendComment() {
  const newName = document.getElementById("name").value;
  const newUrl = document.getElementById("url").value;
  const newComment = document.getElementById("comment").value;
  const result = document.getElementById("writtenComment");
  const nameVisible = document.getElementById("nameVisible").checked;

  const validateName = checkName(newName);
  const validatedComment = checkSpam(newComment);

  let nameHTML = "<div>Имя скрыто</div>";
  const today = new Date();
  const imageIndex = Math.floor(Math.random() * 5) + 1;
  const src = newUrl || `./assets/images/image_${imageIndex}.png`;

  if (nameVisible) {
    const normName = checkName(newName);
    nameHTML = `<div>Имя: ${normName}</div>`;
  }

  let prevComments = result.innerHTML;

  result.innerHTML = `${nameHTML} <img src='${src}'/> <div>Comment: ${newComment}</div> <div>Comment: ${today.toDateString()}</div> <div>Comment: ${prevComments}</div>`;
}
