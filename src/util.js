export function getDate() {
    return new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
  }
