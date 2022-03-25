let id: number = parseInt(window.localStorage.getItem("_idMax") || "0") || 0;
function createId() {
  id += 1;
  return id;
}

export default createId;
