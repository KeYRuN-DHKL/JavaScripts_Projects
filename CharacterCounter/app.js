const textArea = document.querySelector("#textArea");
const charCount = document.querySelector("#charCount");
const wordCount = document.querySelector("#wordCount");
const sentenceCount = document.querySelector("#sentenceCount");
const textPercentage = document.querySelector("#percentage");
const progressBar = document.querySelector("#progressBar");
const limitWarning = document.querySelector("#limitWarning");
const copyBtn = document.querySelector("#copy");
const clearBtn = document.querySelector("#clear");

const MAX_LIMIT = 200;

const wordsCount = (text) => {
  if(text.trim() === "") return 0;
  return text.trim().split(/\s+/).length;
}

const sentencesCount = (text) => {
  if(text.trim() === "") return 0;
  return text.split(/[.?!]+/).filter((text) => text.trim() !== "").length;
}

const updateProgressBarColor = (count) => {
    progressBar.classList.remove(
      "bg-green-500",
      "bg-orange-500",
      "bg-blue-500",
      "bg-red-500"
    );


    if(count <= 50)
      progressBar.classList.add("bg-green-500");
    else if(count > 50 && count <= 100)
      progressBar.classList.add("bg-orange-500");
    else if(count > 100 && count <= 150)
      progressBar.classList.add("bg-blue-500");
    else
      progressBar.classList.add("bg-red-500");
}

const updateStats = () => {
  const text = textArea.value;
  const noOfLetters = text.length;
  const noOfWords = wordsCount(text);
  const noOfSentences = sentencesCount(text);

  charCount.textContent = noOfLetters;
  wordCount.textContent = noOfWords;
  sentenceCount.textContent = noOfSentences;

  const percentage = `${(noOfLetters / MAX_LIMIT) * 100}`;
  textPercentage.textContent = `${noOfLetters}/${MAX_LIMIT}`

  progressBar.style.width = `${percentage}%`;

  updateProgressBarColor(noOfLetters)

  if(noOfLetters >= 200)
    limitWarning.classList.remove("hidden");
  else
    limitWarning.classList.add("hidden");
}

textArea.addEventListener("input", () => {
    updateStats();
});

copyBtn.addEventListener("click", async () => {
    if(textArea.value === ""){
      copyBtn.textContent = "Nothing to copy!";
      copyBtn.classList.remove("bg-blue-600","hover:bg-blue-700");
      copyBtn.classList.add("bg-gray-500");

      setTimeout(() => {
        copyBtn.textContent = "Copy";
        copyBtn.classList.remove("bg-gray-500");
        copyBtn.classList.add("bg-blue-600","hover:bg-blue-700");
      },1000);
      return;
    }

    try{
      await navigator.clipboard.writeText(textArea.value);

      copyBtn.textContent = "Copied";
      copyBtn.classList.remove("text-blue-600","hover:text-blue-700");
      copyBtn.classList.add("text-green-600");

      setTimeout(() => {
        copyBtn.textContent = "Copy";
        copyBtn.classList.add("text-blue-600","hover:text-blue-700");
        copyBtn.classList.remove("text-green-600");
      },1000);
    }catch(Error){
      copyBtn.textContent = "Failed to copy";
      copyBtn.classList.remove("text-blue-600","hover:text-blue-700");
      copyBtn.classList.add("text-red-600");

      setTimeout(() => {
        copyBtn.textContent = "Copy";
        copyBtn.classList.add("text-blue-600","hover:text-blue-700");
        copyBtn.classList.remove("text-red-600");
      },1000);
    }
});

clearBtn.addEventListener("click", () => {
    if(textArea.value == ""){
      clearBtn.textContent = "Nothing to Copy!";
      
      setTimeout(() => {
        clearBtn.textContent = "Copy";
      },1000);

      return;
    }

    textArea.value = "";
    updateStats();

    clearBtn.textContent = "Clearing...";

    setTimeout(() => {
      clearBtn.textContent = "Clear";
    },1000);
});

