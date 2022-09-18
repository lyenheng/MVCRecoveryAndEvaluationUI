export function convertFileSize(val) {
  let bSize = val;
  let kbSize = 0;

  if (val < 1024) {
    return bSize.toFixed(2) + " B";
  }

  kbSize = val / 1024;

  if (kbSize < 1024) {
    return kbSize.toFixed(2) + " KB";
  }

  return (kbSize / 1024).toFixed(2) + " MB";
}
