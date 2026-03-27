const checklistData = [
  { phase: "Vision & Foundation", items: [
    { type: "Project-specific", text: "Define the core problem your product solves: {problem_statement}" },
    { type: "Project-specific", text: "Identify your target audience: {audience}" },
    { type: "Project-specific", text: "Articulate the unique value proposition: {value_proposition}" },
    { type: "Project-specific", text: "Decide platform: {web / mobile / both}" },
    { type: "Project-specific", text: "Choose tech stack (frontend, backend, database): {stack}" },
    { type: "Project-specific", text: "List compliance/security requirements: {e.g., GDPR, HIPAA}" },
    { type: "Generic", text: "Create a Product Requirements Document (PRD) using an AI assistant." },
    { type: "Project-specific", text: "List must-have features for the MVP: {list}" },
    { type: "Project-specific", text: "List should-have features for next iteration: {list}" },
    { type: "Project-specific", text: "List could-have features for later: {list}" },
    { type: "Project-specific", text: "Document user flows step-by-step (e.g., entry -> action -> exit): {flows}" },
    { type: "Project-specific", text: "Describe each main screen/view in text (or rough wireframes): {descriptions}" },
    { type: "Project-specific", text: "Explicitly state what is out of scope for this version: {items}" },
    { type: "Generic", text: "Define code style rules (naming conventions, formatting, etc.)." },
    { type: "Generic", text: "Specify testing requirements (e.g., unit tests, integration tests)." },
    { type: "Generic", text: "Adopt accessibility (WCAG 2.2 AA) as a non-negotiable standard." },
    { type: "Generic", text: "Create a .cursorrules or CLAUDE.md file with project conventions." },
    { type: "Project-specific", text: "Clone a template repository matching {stack} (or start from scratch)." },
    { type: "Generic", text: "Set up local development environment (dependencies, env vars)." },
    { type: "Generic", text: "Ensure the project runs with a single command (e.g., npm run dev)." }
  ]},
  { phase: "Prompting & Iterative Development", items: [
    { type: "Generic", text: "Start each new feature with a fresh chat session." },
    { type: "Generic", text: "Write prompts that are specific, structured, and goal-oriented." },
    { type: "Generic", text: "Always provide relevant file paths and existing code snippets." },
    { type: "Generic", text: "Use phrases like \"think step-by-step\" to encourage reasoning." },
    { type: "Generic", text: "Break complex features into a sequence of 3-5 smaller tasks." },
    { type: "Generic", text: "Ask for a plan before implementation: \"Outline how you would build X.\"" },
    { type: "Generic", text: "Request code in small, verifiable increments." },
    { type: "Generic", text: "After each AI response, run the app and test manually." },
    { type: "Generic", text: "If the AI introduces unrelated changes, ask: \"Only modify filename.js.\"" },
    { type: "Generic", text: "Use explicit instructions: \"Do not change any other files.\"" },
    { type: "Generic", text: "Ask the AI to explain code you do not understand." },
    { type: "Generic", text: "When stuck, paste the exact error message back into the AI." },
    { type: "Generic", text: "Tell the AI what you expected vs. what happened." },
    { type: "Generic", text: "Iterate: apply a fix, test, and if it fails, repeat with the new outcome." },
    { type: "Generic", text: "Keep a list of working prompts that you reuse for similar tasks." },
    { type: "Generic", text: "Use the AI to generate mock data or seed files for testing." },
    { type: "Generic", text: "Ask the AI to add inline comments for complex logic." },
    { type: "Generic", text: "Request code that follows your pre-defined style guide." },
    { type: "Generic", text: "Use the AI to refactor as you go: \"Simplify this function.\"" },
    { type: "Project-specific", text: "For UI, ask for responsive design with {CSS framework}." },
    { type: "Generic", text: "Verify that the AI uses the correct version of libraries (pin versions)." },
    { type: "Generic", text: "Ask for error boundaries or graceful fallbacks where needed." },
    { type: "Generic", text: "Prompt the AI to add loading states and skeleton screens." },
    { type: "Generic", text: "Use the AI to generate commit messages after a successful feature." },
    { type: "Generic", text: "When you hit a dead end, revert to a previous commit and re-prompt with new context." }
  ]},
  { phase: "Testing & Quality Assurance", items: [
    { type: "Generic", text: "Write tests as you develop, not at the end." },
    { type: "Generic", text: "Ask the AI: \"Write unit tests for this utility function.\"" },
    { type: "Generic", text: "Run tests after every significant change." },
    { type: "Generic", text: "Use the AI to generate integration tests for API endpoints." },
    { type: "Generic", text: "Manually test edge cases (empty states, invalid inputs, slow networks)." },
    { type: "Generic", text: "Test on different screen sizes and devices." },
    { type: "Generic", text: "Ask the AI to identify potential accessibility violations." },
    { type: "Generic", text: "Use a screen reader to test critical user flows." },
    { type: "Generic", text: "Verify keyboard navigation works everywhere." },
    { type: "Generic", text: "Check color contrast using browser dev tools." },
    { type: "Generic", text: "Run Lighthouse audits and address any scores below 90." },
    { type: "Generic", text: "Ask the AI: \"What security risks exist in this code?\"" },
    { type: "Generic", text: "Ensure no secrets are hardcoded (use .env files)." },
    { type: "Generic", text: "Validate and sanitize all user inputs on both client and server." },
    { type: "Generic", text: "Ask the AI to add rate limiting or CAPTCHA where appropriate." },
    { type: "Generic", text: "Review generated code for performance anti-patterns (e.g., unnecessary re-renders)." },
    { type: "Generic", text: "Use browser performance tools to identify bottlenecks." },
    { type: "Generic", text: "Ask the AI: \"Optimize this query or component for speed.\"" },
    { type: "Generic", text: "Keep an eye on bundle size; ask the AI to lazy-load heavy modules." },
    { type: "Generic", text: "Document any known issues or limitations for future maintenance." }
  ]},
  { phase: "Version Control & Deployment", items: [
    { type: "Generic", text: "Initialize a Git repository on day one." },
    { type: "Project-specific", text: "Create a .gitignore file appropriate for {stack}." },
    { type: "Generic", text: "Commit after every successfully implemented feature." },
    { type: "Generic", text: "Write clear, conventional commit messages (feat:, fix:, docs:)." },
    { type: "Generic", text: "Create a develop branch and keep main stable." },
    { type: "Generic", text: "Tag milestones (e.g., v0.1.0, mvp-v1)." },
    { type: "Generic", text: "Push to a remote repository (GitHub, GitLab, etc.) daily." },
    { type: "Generic", text: "Deploy to a staging environment as soon as you have a working prototype." },
    { type: "Project-specific", text: "Use hosting platforms like {Vercel / Netlify / Railway / etc.}." },
    { type: "Generic", text: "Set up environment variables in your deployment dashboard." },
    { type: "Generic", text: "Configure automatic deployments from your main branch." },
    { type: "Generic", text: "Test the live staging environment thoroughly." },
    { type: "Generic", text: "Invite a friend or colleague to test and gather feedback." },
    { type: "Generic", text: "Fix bugs found in staging before merging to main." },
    { type: "Generic", text: "Use the AI to help debug staging-specific issues (CORS, build failures)." },
    { type: "Generic", text: "Keep a deployment checklist that includes DB migrations, env sync, etc." },
    { type: "Generic", text: "After deployment, run smoke tests on the live URL." },
    { type: "Generic", text: "Roll back immediately if a critical bug slips through." },
    { type: "Generic", text: "Document your deployment process in a DEPLOY.md file." },
    { type: "Generic", text: "Celebrate every successful deployment (yes, vibe coding is fun)." }
  ]},
  { phase: "Polish, Security & Handover", items: [
    { type: "Generic", text: "Run a final accessibility audit using automated tools and manual testing." },
    { type: "Generic", text: "Ask the AI: \"List all WCAG 2.2 rules this app might violate.\"" },
    { type: "Generic", text: "Fix any security warnings from dependency scanners (e.g., npm audit)." },
    { type: "Generic", text: "Ensure all secrets are rotated before final launch." },
    { type: "Generic", text: "Ask the AI to generate an API documentation page (if applicable)." },
    { type: "Generic", text: "Write a short user manual or in-app help." },
    { type: "Generic", text: "Use the AI to draft a README.md with setup, usage, and deployment instructions." },
    { type: "Project-specific", text: "Add a license file ({MIT / Apache / etc.}) if open-sourcing." },
    { type: "Generic", text: "Remove all console.log statements and debug code." },
    { type: "Generic", text: "Ask the AI to suggest final performance improvements." },
    { type: "Generic", text: "Run a final full-flow test covering all must-have features." },
    { type: "Generic", text: "Prepare a launch announcement (social media, email, etc.)." },
    { type: "Generic", text: "Set up basic analytics to track usage." },
    { type: "Generic", text: "Create a feedback channel (GitHub Issues, Discord, etc.)." },
    { type: "Generic", text: "After launch, review what worked and what did not; update your .cursorrules accordingly." },
    { type: "Generic", text: "Breathe. You've vibe-coded a full product. Go celebrate with a walk outside." }
  ]}
];

const storageKey = "vc-checklist-state-v1";
const totalItems = 101;
const state = {
  projectName: "",
  projectSummary: "",
  completed: {},
  placeholderValues: {},
  activeTypeFilter: "all",
  showCompleted: true
};

const phaseList = document.querySelector("#phase-list");
const phaseSummary = document.querySelector("#phase-summary");
const progressFill = document.querySelector("#progress-fill");
const progressText = document.querySelector("#progress-text");
const completedText = document.querySelector("#completed-text");
const heroTitle = document.querySelector("#hero-title");
const projectNameInput = document.querySelector("#project-name");
const projectSummaryInput = document.querySelector("#project-summary");
const showCompletedInput = document.querySelector("#show-completed");
const downloadCsvButton = document.querySelector("#download-csv-button");
const resetButton = document.querySelector("#reset-button");
const phaseTemplate = document.querySelector("#phase-template");
const itemTemplate = document.querySelector("#item-template");
const typeFilterButtons = [...document.querySelectorAll("[data-filter-type]")];

function itemId(phaseIndex, itemIndex) {
  return `phase-${phaseIndex}-item-${itemIndex}`;
}

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    state.projectName = parsed.projectName || "";
    state.projectSummary = parsed.projectSummary || "";
    state.completed = parsed.completed || {};
    state.placeholderValues = parsed.placeholderValues || {};
    state.activeTypeFilter = parsed.activeTypeFilter || "all";
    state.showCompleted = parsed.showCompleted !== false;
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function escapeCsvCell(value) {
  const normalized = String(value ?? "").replace(/\r?\n|\r/g, " ").trim();
  return `"${normalized.replace(/"/g, '""')}"`;
}

function getPlaceholders(text) {
  return [...text.matchAll(/\{([^}]+)\}/g)].map((match, index) => ({
    raw: match[0],
    label: match[1].trim(),
    index
  }));
}

function placeholderFieldId(itemKey, placeholderIndex) {
  return `${itemKey}::${placeholderIndex}`;
}

function resolveItemText(itemText, itemKey) {
  const placeholders = getPlaceholders(itemText);
  let resolvedText = itemText;

  placeholders.forEach((placeholder) => {
    const fieldId = placeholderFieldId(itemKey, placeholder.index);
    const value = (state.placeholderValues[fieldId] || "").trim();
    if (value) {
      resolvedText = resolvedText.replace(placeholder.raw, value);
    }
  });

  return resolvedText;
}

function buildCsv() {
  const rows = [
    ["Project Name", state.projectName],
    ["Project Summary", state.projectSummary],
    [],
    ["Phase", "Type", "Item", "Completed"]
  ];

  checklistData.forEach((phase, phaseIndex) => {
    phase.items.forEach((item, itemIndex) => {
      const currentItemId = itemId(phaseIndex, itemIndex);
      rows.push([
        phase.phase,
        item.type,
        resolveItemText(item.text, currentItemId),
        state.completed[currentItemId] ? "Yes" : "No"
      ]);
    });
  });

  return rows
    .map((row) => row.map((cell) => escapeCsvCell(cell)).join(","))
    .join("\n");
}

function slugifyFilenamePart(value, fallback) {
  const slug = String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || fallback;
}

function downloadCsv() {
  const csv = buildCsv();
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const projectSlug = slugifyFilenamePart(state.projectName, "new-project");
  const link = document.createElement("a");

  link.href = url;
  link.download = `${projectSlug}-vibe-coding-checklist.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderPhaseSummary() {
  phaseSummary.innerHTML = "";
  checklistData.forEach((phase, phaseIndex) => {
    const completedCount = phase.items.filter((_, itemIndex) => state.completed[itemId(phaseIndex, itemIndex)]).length;
    const pill = document.createElement("div");
    pill.className = "phase-pill";
    pill.innerHTML = `<span>${phase.phase}</span><span>${completedCount}/${phase.items.length}</span>`;
    phaseSummary.appendChild(pill);
  });
}

function updateProgress() {
  const completedCount = Object.keys(state.completed).length;
  const percent = Math.round((completedCount / totalItems) * 100);
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${percent}%`;
  completedText.textContent = `${completedCount} / ${totalItems}`;
  heroTitle.textContent = state.projectName.trim()
    ? `${state.projectName.trim()} | A Vibe Coding Checklist Nobody Asked For`
    : "A Vibe Coding Checklist Nobody Asked For";
  renderPhaseSummary();
}

function applyFilters() {
  [...document.querySelectorAll(".phase-card")].forEach((phaseCard) => {
    let visibleCount = 0;
    [...phaseCard.querySelectorAll(".check-item")].forEach((item) => {
      const isCompleted = item.querySelector(".check-input").checked;
      const matchesType = state.activeTypeFilter === "all" || item.dataset.type === state.activeTypeFilter;
      const matchesCompletion = state.showCompleted || !isCompleted;
      const visible = matchesType && matchesCompletion;
      item.classList.toggle("is-complete", isCompleted);
      item.classList.toggle("is-hidden", !visible);
      if (visible) visibleCount += 1;
    });
    phaseCard.classList.toggle("is-hidden", visibleCount === 0);
  });

  typeFilterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filterType === state.activeTypeFilter);
  });
}

function renderChecklist() {
  phaseList.innerHTML = "";
  checklistData.forEach((phase, phaseIndex) => {
    const phaseNode = phaseTemplate.content.firstElementChild.cloneNode(true);
    phaseNode.querySelector(".phase-kicker").textContent = `Phase ${phaseIndex + 1}`;
    phaseNode.querySelector(".phase-title").textContent = phase.phase;
    phaseNode.querySelector(".phase-badge").textContent = `${phase.items.length} items`;
    const itemList = phaseNode.querySelector(".item-list");

    phase.items.forEach((item, itemIndex) => {
      const id = itemId(phaseIndex, itemIndex);
      const itemNode = itemTemplate.content.firstElementChild.cloneNode(true);
      const checkbox = itemNode.querySelector(".check-input");
      const checkCopy = itemNode.querySelector(".check-copy");
      const placeholders = getPlaceholders(item.text);
      itemNode.dataset.type = item.type;
      checkbox.checked = Boolean(state.completed[id]);
      checkbox.dataset.itemId = id;
      itemNode.querySelector(".check-type").textContent = item.type;
      itemNode.querySelector(".check-text").textContent = item.text;

      if (placeholders.length > 0) {
        const placeholderGroup = document.createElement("div");
        placeholderGroup.className = "placeholder-group";

        placeholders.forEach((placeholder) => {
          const fieldId = placeholderFieldId(id, placeholder.index);
          const field = document.createElement("label");
          const caption = document.createElement("span");
          const input = document.createElement("input");

          field.className = "placeholder-field";
          caption.className = "placeholder-label";
          caption.textContent = placeholder.label;

          input.className = "placeholder-input";
          input.type = "text";
          input.placeholder = `Enter ${placeholder.label}`;
          input.value = state.placeholderValues[fieldId] || "";

          input.addEventListener("input", (event) => {
            const value = event.target.value;
            if (value.trim()) {
              state.placeholderValues[fieldId] = value;
            } else {
              delete state.placeholderValues[fieldId];
            }
            saveState();
          });

          field.appendChild(caption);
          field.appendChild(input);
          placeholderGroup.appendChild(field);
        });

        checkCopy.appendChild(placeholderGroup);
      }

      checkbox.addEventListener("change", (event) => {
        if (event.target.checked) state.completed[id] = true;
        else delete state.completed[id];
        saveState();
        applyFilters();
        updateProgress();
      });

      itemList.appendChild(itemNode);
    });

    phaseList.appendChild(phaseNode);
  });
}

function attachControls() {
  projectNameInput.value = state.projectName;
  projectSummaryInput.value = state.projectSummary;
  showCompletedInput.checked = state.showCompleted;

  projectNameInput.addEventListener("input", (event) => {
    state.projectName = event.target.value;
    saveState();
    updateProgress();
  });

  projectSummaryInput.addEventListener("input", (event) => {
    state.projectSummary = event.target.value;
    saveState();
  });

  showCompletedInput.addEventListener("change", (event) => {
    state.showCompleted = event.target.checked;
    saveState();
    applyFilters();
  });

  typeFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTypeFilter = button.dataset.filterType;
      saveState();
      applyFilters();
    });
  });

  downloadCsvButton.addEventListener("click", () => {
    downloadCsv();
  });

  resetButton.addEventListener("click", () => {
    localStorage.removeItem(storageKey);
    window.location.reload();
  });
}

loadState();
renderChecklist();
attachControls();
updateProgress();
applyFilters();
