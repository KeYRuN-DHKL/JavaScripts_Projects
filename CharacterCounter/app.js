const textArea = document.querySelector("#textarea");
const charCount = document.querySelector("#charCount");
const wordCount = document.querySelector("#wordCount");
const sentenceCount = document.querySelector("#sentenceCount");
const percentage = document.querySelector("#percentage");
const progressBar = document.querySelector("#progressBar");
const copyBtn = document.querySelector("#copy");
const clearBtn = document.querySelector("#clear");
const limitWarning = document.querySelector("#limitWarning");

const MAX_LIMIT = 200;

const countWords = (text) => {
  if (text.trim() === "") return 0;
  return text.trim().split(/\s+/).length;
};

const countSentence = (text) => {
  if (text.trim() === "") return 0;
  return text.split(/[.?!]+/).filter((s) => s.trim() !== "").length;
};

const updateColor = (count) => {
  progressBar.classList.remove(
    "bg-green-500",
    "bg-yellow-500",
    "bg-orange-500",
    "bg-red-500",
  );

  if (count <= 50) {
    progressBar.classList.add("bg-green-500");
  } else if (count <= 100) {
    progressBar.classList.add("bg-yellow-500");
  } else if (count <= 150) {
    progressBar.classList.add("bg-blue-500");
  } else {
    progressBar.classList.add("bg-red-500");
  }
};

const updateStats = () => {
  const text = textArea.value;
  const chars = text.length;
  const words = countWords(text);
  const sentences = countSentence(text);

  charCount.textContent = chars;
  wordCount.textContent = words;
  sentenceCount.textContent = sentences;

  const percent = Math.round((chars / MAX_LIMIT) * 100);
  progressBar.style.width = `${percent}%`;

  percentage.textContent = `${chars} / ${MAX_LIMIT}`;

  updateColor(chars);

  if (chars >= 200) {
    limitWarning.classList.remove("hidden");
  } else {
    limitWarning.classList.add("hidden");
  }
};

textArea.addEventListener("input", () => {
  updateStats();
});

copyBtn.addEventListener("click", async () => {
  if (textArea.value.trim() === "") {
    copyBtn.textContent = "Nothing to copy";
    copyBtn.classList.remove("bg-blue-600", "hover:bg-blue-700");
    copyBtn.classList.add("bg-gray-600");

    setTimeout(() => {
      copyBtn.textContent = "Copy";
      copyBtn.classList.remove("bg-gray-600");
      copyBtn.classList.add("bg-blue-600", "hover:bg-blue-700");
    }, 1000);
    return;
  }

  try {
    await navigator.clipboard.writeText(textArea.value);

    copyBtn.textContent = "Copied";
    copyBtn.classList.remove("bg-blue-600", "hover:bg-blue-700");
    copyBtn.classList.add("bg-green-500");

    setTimeout(() => {
      copyBtn.textContent = "Copy";
      copyBtn.classList.remove("bg-green-500");
      copyBtn.classList.add("bg-blue-600", "hover:bg-blue-700");
    }, 1000);
  } catch (error) {
    copyBtn.textContent = "Failed to copy";
    copyBtn.classList.remove("bg-blue-600", "hover:bg-blue-700");
    copyBtn.classList.add("bg-red-500");

    setTimeout(() => {
      copyBtn.textContent = "Copy";
      copyBtn.classList.remove("bg-red-500");
      copyBtn.classList.remove("bg-blue-600", "hover:bg-blue-700");
    }, 1000);
  }
});

clearBtn.addEventListener("click", () => {
  if (textArea.value == "") {
    clearBtn.textContent = "Already Empty!";

    setTimeout(() => {
      clearBtn.textContent = "Clear";
    }, 500);
    return;
  }

  textArea.value = "";
  updateStats();

  clearBtn.textContent = "Clearing...";

  setTimeout(() => {
    clearBtn.textContent = "Clear";
  }, 500);
});
