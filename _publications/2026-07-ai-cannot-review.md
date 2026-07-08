---
title: "AI Cannot Review What Humans Catch: An Empirical Study of Agent Instruction File Review"
permalink: /publication/2026-07-ai-cannot-review
date: 2026-07-02
venue: "Preprint"
pdf: "/files/ai-cannot-review-what-humans-catch.pdf"
authors: "<strong>Wenhao Yang</strong>, Runzhi He, Minghui Zhou"
excerpt: "Agents increasingly shape software, and instruction files steer them. Files such as AGENTS.md, CLAUDE.md, .cursorrules, and SKILL.md act as executable policy: prose that a machine reads and acts on. Unlike ordinary documentation, a single edit to one of these files can silently redirect how an agent behaves across an entire repository. Natural-language rules have no per-change oracle, so they slip past the compilers, type-checkers, and test suites that guard code. Review is therefore the only quality gate, but no prior work has studied how that review happens. We analyzed 2,870 instruction-file pull requests across 2,246 repositories. The gate is largely broken: over 70% of instruction-file changes receive no substantive review. When an AI reviewer substitutes for a human, it is structurally blind to the concerns that most need human judgment. It catches surface structure but misses factual errors, necessity questions, and staleness problems. We contribute the first taxonomy of instruction-file review concerns (16 categories), which exposes this sharp human/AI divergence, and a benchmark of 1,962 human-checked concerns across 468 PRs. We ran three widely-used agents (Codex, OpenCode, and Claude Code) against the benchmark, giving each reviewer the full repository at review time. They recovered only 1.3–3.9% of the concerns humans raise. Even the strongest current agents cannot substitute for human attention on these files."
---
