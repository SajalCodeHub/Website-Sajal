console.log("📬 contact.js loaded");

const form = document.querySelector(".hire-form");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const specialization = form.elements["specialization"].value.trim();
  const message = form.elements["project"].value.trim();
  const type = form.elements["collabType"].value;

  const button = form.querySelector("button");
  button.disabled = true;
  button.innerText = "Sending...";

  try {
    const res = await fetch("http://localhost:5000/api/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          specialization,
          message,
          type
        })
      });
      

    const data = await res.json();

    if (data.success) {
      alert("✅ Proposal sent successfully!");
      form.reset();
      button.innerText = "Send Proposal 💌";
    } else {
      throw new Error(data.message || "Something went wrong.");
    }
  } catch (err) {
    console.error("❌ Submission failed:", err);
    alert("❌ Failed to send proposal. Please try again.");
    button.innerText = "Try Again 💌";
  }

  button.disabled = false;
});
