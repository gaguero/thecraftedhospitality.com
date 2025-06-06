# Agent Workflow Quick Reference

## 🚀 EVERY SESSION STARTS HERE

### Phase 1: GET IN CONTEXT (5-10 minutes)
```bash
✅ Read ALL Memory Bank files
✅ Get Taskmaster status (get_tasks, next_task)
✅ Understand current project state
✅ Identify gaps and inconsistencies
```

### Phase 2: RESEARCH & PLAN (10-15 minutes)
```bash
✅ Use Context7 to research implementation approach
✅ Create detailed implementation plan
✅ Present plan to user with:
   - WHAT: Specific changes to make
   - WHY: Business/technical justification  
   - HOW: Technical approach with docs
✅ WAIT FOR USER APPROVAL - DO NOT PROCEED WITHOUT IT
```

### Phase 3: IMPLEMENT (Variable)
```bash
✅ Set task status to "in-progress"
✅ Update activeContext.md with current work
✅ Make changes with frequent commits
✅ Update subtasks with progress notes
✅ Document decisions and challenges
```

### Phase 4: VALIDATE & UPDATE (5-10 minutes)
```bash
✅ Test with Playwright (navigation, screenshots)
✅ Update task status to "done"
✅ Update progress.md with achievements
✅ Update activeContext.md with next steps
✅ Final commit with comprehensive message
```

## 🔧 KEY TOOLS TO USE

### Context & Planning Tools
- `mcp_taskmaster-ai_get_tasks` - See all tasks
- `mcp_taskmaster-ai_next_task` - Get next work
- `mcp_context7_resolve-library-id` - Find docs
- `mcp_context7_get-library-docs` - Get implementation guides

### Work & Documentation Tools  
- `mcp_taskmaster-ai_set_task_status` - Update progress
- `mcp_taskmaster-ai_update_subtask` - Add progress notes
- `edit_file` - Update memory bank files

### Testing & Validation Tools
- `mcp_playwright_browser_navigate` - Test site
- `mcp_playwright_browser_screen_capture` - Visual validation
- `run_terminal_cmd` - Git commits and checks

## ⚠️ CRITICAL RULES

### NEVER Start Work Without:
1. Reading all Memory Bank files
2. Getting Taskmaster status  
3. Researching with Context7
4. Getting user approval for the plan

### ALWAYS Do After Work:
1. Test the changes with Playwright
2. Update Taskmaster task status
3. Update Memory Bank documentation
4. Commit changes with clear messages

## 🎯 SUCCESS CHECKLIST

At the end of every work session, verify:
- [ ] Memory Bank reflects current reality
- [ ] Taskmaster tasks match actual progress
- [ ] Code changes are tested and working
- [ ] User knows what was accomplished
- [ ] Next steps are clearly documented
- [ ] Git history is clean and descriptive

## 📋 TEMPLATE RESPONSES

### Starting a Session:
"I'm getting in context by reading the Memory Bank and checking Taskmaster status..."

### Before Working:
"Based on my research with Context7, here's my implementation plan: [detailed plan]. Do you approve this plan?"

### After Completing Work:
"Work completed! I've updated the tasks, tested with Playwright, and updated the Memory Bank. Next up: [next steps]"

---

**This workflow ensures consistent, high-quality development with proper documentation and user alignment.** 