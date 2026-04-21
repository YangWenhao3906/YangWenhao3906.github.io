---
title: 'Beyond Banning AI: How 67 Open Source Projects Are Governing GenAI Contributions'
date: 2026-04-21
permalink: /posts/2026/04/Beyond Banning AI/
---


# Beyond Banning AI: How 67 Open Source Projects Are Governing GenAI Contributions

Over the past year, one question has dominated discussions about GenAI and open source:

**Should open source projects ban AI contributions?**

But after systematically reading the public governance materials of 67 high-visibility open source projects, we came away with a different conclusion:

**What maintainers are really trying to govern is not just AI itself, but the contribution interface in the age of AI.**

Today, GenAI is no longer just helping people autocomplete a few lines of code or draft some documentation. It is entering issues, pull requests, code review, and even security reports. It absolutely lowers the cost of producing something that looks like a contribution. But it does not lower the cost of understanding, validating, reviewing, attributing, and maintaining that contribution. For maintainers, that is where the real difficulty begins.

This post is based on our paper, [*Beyond Banning AI: A First Look at GenAI Governance in Open Source Software Communities*](https://arxiv.org/abs/2603.26487). Here, we want to translate the paper's findings into a blog post for the open source community, especially for maintainers.

## A growing reality: generation is getting cheaper, review is not

Start with two examples that many people in the community have already seen.

One is [this matplotlib PR](https://github.com/matplotlib/matplotlib/pull/31132), where a maintainer pointed out a key observation: **AI changes the cost balance between generating code and reviewing code.**

The other is [the nearly 19,000-line AI-generated PR in Node.js](https://github.com/nodejs/node/pull/61478). That incident later led to a public [petition](https://www.change.org/p/no-ai-code-in-node-js-core), along with a matching [GitHub repository](https://github.com/indutny/no-ai-in-nodejs-core), calling on the project not to accept LLM-generated pull requests.

These incidents matter not because they are unusual, but because they amplify a reality that many maintainers are already dealing with:

- It is becoming easier and easier to generate a PR, issue, or report.
- It is still expensive to decide whether that input deserves to enter the project.
- In practice, maintainers are usually the ones paying that cost.

So from a maintainer's point of view, GenAI is not simply "more productivity." It is a redistribution of collaboration costs.

## What did we study?

In this study, we analyzed public governance materials from 67 high-visibility open source projects, including:

- `CONTRIBUTING`
- `SECURITY`
- issue and PR templates
- governance files under `.github/`
- repository-level instructions for AI tools, such as `AGENTS.md`
- and surrounding announcements, discussions, and commit messages tied to those rules

Our goal was not to rank projects, and not to count who is "pro-AI" or "anti-AI." We wanted to understand three things:

- What exactly are maintainers worried about?
- How do projects interpret those problems?
- What concrete rules and strategies are they using in response?

## What maintainers are struggling with is often not "AI-generated code" itself

Outside commentary often focuses on whether AI-generated code is good or bad. But from a maintainer's perspective, the problem is broader than code quality. More often, the problem is this:

**AI makes many inputs look more complete without making them more processable.**

### 1. The PR problem is often not size, but review cost

In [Docusaurus's contribution guide](https://github.com/facebook/docusaurus/blob/main/CONTRIBUTING.md), maintainers describe receiving PRs that are "1k LOC," obviously AI-generated, and implementing unsolicited features. The issue is not just that the patch is large. The issue is that maintainers are forced to decide during review: **why does this change exist at all?**

[Metasploit's contributing guide](https://github.com/rapid7/metasploit-framework/blob/master/CONTRIBUTING.md) describes another familiar pattern. Some AI-assisted submissions are well formatted, polished, and seemingly thoughtful, but they do not actually do what they claim to do. In other words, AI can raise the level of surface completeness without guaranteeing semantic correctness.

In [a typescript-eslint discussion](https://github.com/typescript-eslint/typescript-eslint/issues/11416), maintainers worried that code review could turn into "babysitting someone's Claude instance." That line is sharp, but it captures a very real form of maintainer fatigue: **the person behind the PR is not always someone who truly understands the change and can sustain the review process.**

The same point appears very clearly in [Oh My Zsh's post *Humans in the Loop*](https://robbyonrails.com/articles/2026/01/20/humans-in-the-loop/): **`review is the bottleneck. Not code generation.`**

[FastAPI's contribution guide](https://github.com/fastapi/fastapi/blob/master/docs/en/docs/contributing.md#automated-code-and-ai) goes even further, describing low-effort AI submissions as a denial-of-service attack on human effort.

None of these projects are simply objecting to AI in the abstract. They are pointing to something more concrete: **PR generation got cheaper, but review did not.**

### 2. Communication gets longer, but not necessarily better

GenAI does not only generate code. It also generates PR descriptions, discussion replies, and issue text.

In [typescript-eslint's AI policy](https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/contributing/AI_Contribution_Policy.mdx), maintainers note that many AI-generated PR descriptions simply restate the diff in prose, adding little value to review.

In [Jaeger's AI Usage Policy](https://github.com/jaegertracing/jaeger/blob/main/CONTRIBUTING_GUIDELINES.md#ai-usage-policy), maintainers make the expectation explicit: **code review is a discussion between people, not bots.**

The core problem here is not aesthetics. It is that maintainers increasingly have to spend time deciding whether a fluent, complete, polite block of text actually contains useful context, reasoning, and accountable explanation.

### 3. Issue triage is also being flooded with "plausible-looking" inputs

In [NewPipe's AI policy](https://github.com/TeamNewPipe/NewPipe/blob/dev/.github/CONTRIBUTING.md), the project explicitly disallows AI-written issue and PR template content because such texts are often long while still missing the critical details.

That pattern is deeply familiar to maintainers. The most frustrating issues are often not the shortest ones, but the ones that are **long, plausible, and still missing the exact information needed for triage**. AI makes these inputs easier to produce, which makes triage more attention-intensive.

### 4. Noise in security reports is especially expensive

This problem becomes even more acute in security workflows, where reports receive elevated priority by default.

[curl's contribution documentation](https://github.com/curl/curl/blob/master/docs/CONTRIBUTE.md) explicitly warns against simply copying and pasting an AI-generated security report. Once unverifiable, fabricated, or weakly grounded reports enter a high-priority channel, maintainers are forced to spend their scarcest security-handling time validating noise.

[llama.cpp's Security Policy](https://github.com/ggml-org/llama.cpp/blob/master/SECURITY.md) raises the bar further by requiring a working proof of concept. In other words, the project is no longer willing to treat something as high-priority merely because it sounds like a vulnerability. It wants evidence before scarce maintainer attention is engaged.

[curl later ended its bug bounty program altogether](https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/). That is revealing: in some cases, the issue is no longer just noise, but the way AI lowers the cost of generating exaggerated or fabricated inputs and thereby distorts incentives.

### 5. Some projects are less worried about quality than about provenance and licensing

Not every project starts from review overload.

In [QEMU's code provenance documentation](https://github.com/qemu/qemu/blob/master/docs/devel/code-provenance.rst), the problem is framed directly in terms of the uncertain copyright and licensing status of AI outputs.

[NetBSD's commit guidelines](https://www.netbsd.org/developers/commit-guidelines.html) go even further and treat LLM-generated code as presumed tainted code.

For these projects, the question is not simply "does this code work?" It is: **can this code be admitted into the repository's long-term history in a legally and institutionally defensible way?**

### 6. Sometimes the real amplifier is the platform, not the contributor

Some projects locate part of the problem in platform defaults.

[A Zig commit](https://github.com/ziglang/zig/commit/d238078ae87f1beb565d42caee01ebd6a7a00d43) added a warning in the issue flow against LLM use. Maintainers described how platform-provided AI features can inflate a short bug explanation into a long, distorted, and detail-poor text.

Later, Zig also published a post explaining its [migration from GitHub to Codeberg](https://ziglang.org/news/migrating-from-github-to-codeberg/).

[tldraw's contribution policy](https://github.com/tldraw/tldraw/issues/7695) is another strong example: the project temporarily stopped accepting external PRs and tied that move to the lack of better contribution-management tooling.

So in many cases, maintainers are not only responding to AI-assisted contributors. They are responding to a platform environment that makes low-cost input generation easy without making input governance equally robust.

## The community has not converged on one answer, but it has developed three distinct governance logics

After reading these projects, what we did not see was a single best practice. What we did see was three broad governance paths.

### 1. Some inputs simply should not enter the system

This is the path closest to what people usually imagine as "banning AI."

Projects like [QEMU](https://github.com/qemu/qemu/blob/master/docs/devel/code-provenance.rst) and [NetBSD](https://www.netbsd.org/developers/commit-guidelines.html) are not primarily asking how to review AI-related content better. They are asking whether certain kinds of AI-generated content should be treated as ordinarily admissible at all.

This logic often appears where provenance, licensing, and long-term compliance risk are especially salient. It looks like the strictest response, but it is often grounded in the clearest risk judgment.

### 2. AI can be used, but it must enter with boundaries, responsibility, and evidence

This was the most common path we saw across the 67 cases.

In [CloudNativePG's AI policy proposal](https://github.com/cloudnative-pg/governance/issues/45) and the resulting [formal policy](https://github.com/cloudnative-pg/governance/blob/main/AI_POLICY.md), maintainers are clear that the goal is not to ban AI outright, but to move the burden of proof back to contributors and require full human accountability.

[llama.cpp's AI policy](https://github.com/ggml-org/llama.cpp/blob/master/CONTRIBUTING.md) uses a similar logic: AI may be used, but only in an assistive capacity and with explicit disclosure.

[Spec Kit's AI contribution section](https://github.com/github/spec-kit/blob/main/CONTRIBUTING.md#ai-contributions-in-spec-kit) frames disclosure very pragmatically: maintainers need to know whether AI was used because that affects how much scrutiny should be applied.

[mpv's policy on AI-assisted contributions](https://github.com/mpv-player/mpv/blob/master/DOCS/contribute.md#ai-assisted-contributions) also does not ban AI outright, but makes contributors responsible for the resulting licensing and redistributability implications.

These projects are not simply "allowing AI." They are saying: **AI may be present, but it must remain visible, accountable, and verifiable.**

### 3. Do not start with AI. Start with quality and maintainer cost

Another set of projects does not want to build a fully separate governance system for AI.

[Oh My Zsh's *Humans in the Loop*](https://robbyonrails.com/articles/2026/01/20/humans-in-the-loop/) is highly representative here. The point is not moral panic and not tooling policing. The point is to clarify expectations and accountability.

[curl's documentation](https://github.com/curl/curl/blob/master/docs/CONTRIBUTE.md) reflects a similar stance: whether or not AI was used, contributors are still responsible for licensing, quality, and maintainability.

These projects are not ignoring AI. They are folding it back into existing standards. The key question remains: **is this contribution worth maintainers' time?**

## Maintainers have more options than simply "ban" or "do nothing"

If we look across these 67 projects, the most useful lesson is not their attitude toward AI, but the concrete things they actually do.

### 1. Require disclosure of AI use

[Spec Kit](https://github.com/github/spec-kit/blob/main/CONTRIBUTING.md#ai-contributions-in-spec-kit) and [llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/CONTRIBUTING.md) both require contributors to disclose AI use.

The point is not moral signaling. The point is to help maintainers decide how much scrutiny an input deserves.

### 2. Re-bind authorship to human responsibility

[CloudNativePG](https://github.com/cloudnative-pg/governance/blob/main/AI_POLICY.md) explicitly states that the human contributor is solely responsible for the contribution.

[Jaeger](https://github.com/jaegertracing/jaeger/blob/main/CONTRIBUTING_GUIDELINES.md#ai-usage-policy) makes a similar demand: you own what you submit.

These rules target a very practical problem: **if AI makes submission easier, projects need to re-establish who the actual author is in the governance sense of the term.**

### 3. Ask for evidence before spending review time

[Kornia's AI and Authorship Policy](https://github.com/kornia/kornia/blob/main/AI_POLICY.md) requires local test logs and references to existing implementations.

[llama.cpp's Security Policy](https://github.com/ggml-org/llama.cpp/blob/master/SECURITY.md) requires a working proof of concept for security reports.

[curl](https://github.com/curl/curl/blob/master/docs/CONTRIBUTE.md) also tells reporters to verify the issue themselves before submitting.

All of these projects are doing the same thing: **they are refusing to leave the full cost of proving worthiness to maintainers.**

### 4. Directly constrain agents and AI tooling

[JabRef's `AGENTS.md`](https://github.com/JabRef/jabref/blob/main/AGENTS.md) is especially revealing. It is not just written for people. It is written for agents. It says not to commit generated code without human review, not to write entire PRs, and not to automate code submission.

That shows how some projects are already broadening the governance target from contributors to contribution tools themselves.

### 5. Control scope so review does not become substitute problem-definition

[CloudNativePG](https://github.com/cloudnative-pg/governance/blob/main/AI_POLICY.md) expects design-first alignment for non-trivial changes and discourages "out of the blue" large PRs.

[PyTorch's AI-assisted development section](https://github.com/pytorch/pytorch/blob/main/CONTRIBUTING.md#ai-assisted-development) requires PRs to be linked to actionable issues.

That kind of strategy is especially important in the AI era because it directly protects one of the scarcest maintainer resources: contextual understanding.

### 6. Limit queues, close channels, and sometimes even change platforms

[Jaeger's PR limits](https://github.com/jaegertracing/jaeger/pull/7880) explicitly restrict how many simultaneous PRs new contributors can keep open.

[pandas' automated contributions policy](https://github.com/pandas-dev/pandas/blob/main/doc/source/development/contributing.rst#automated-contributions-policy) and [CPython's generative AI guidance](https://devguide.python.org/getting-started/generative-ai/) both make clear that low-value, repetitive, or unproductive AI submissions may be closed, and repeat offenders may face stronger moderation.

And then there are projects like [tldraw](https://github.com/tldraw/tldraw/issues/7695) and [Zig](https://ziglang.org/news/migrating-from-github-to-codeberg/) that moved beyond repository rules and directly changed the contribution channel or platform.

That matters because it shows that once repository-level policies are no longer enough, maintainers really do redraw collaboration boundaries.

## What does this mean for maintainers?

After reading these projects, we think there are three especially important takeaways.

### First, there is no one-size-fits-all AI policy

Some projects are most constrained by provenance and licensing.

Some are most constrained by PR review overload.

Some are most constrained by noise in security channels.

Others are most constrained by platforms that systematically amplify those problems.

So the better opening question is not:

**"Should we ban AI?"**

It is:

**"What is our actual bottleneck?"**

### Second, the real shift is that governance is moving upstream

Many projects are doing the same broad thing: pushing governance earlier in the workflow.

- Require issue alignment earlier
- Require disclosure earlier
- Require test logs, PoCs, and evidence earlier
- Reassert authorship earlier
- Constrain agent behavior earlier
- Sometimes reject certain inputs before review even starts

This is not just projects becoming more conservative. Under very low generation costs, **downstream review alone is no longer enough**.

### Third, platform and tool designers cannot stay invisible

If platforms keep optimizing for easier generation of more inputs without providing better traceability, AI metadata, intake control, and prioritization, then all of the added governance cost will continue to land on maintainers.

In that sense, GenAI governance is not just a matter of writing more Markdown inside repositories. It is also a platform and infrastructure problem.

## Closing

The most visible question in open source discussions about GenAI is always whether projects should ban AI. But from a maintainer's day-to-day perspective, that is only the surface layer.

The deeper questions are:

- What kinds of inputs should be allowed into a project?
- Who should be responsible for them?
- How do maintainers avoid being overwhelmed by low-cost, high-burden inputs?
- And how can platforms make those inputs more legible, traceable, and governable?

That is the core point we want to make in our paper:

**What open source communities are governing is not just AI itself, but the contribution interface, responsibility structure, and maintenance order of software collaboration in the age of AI.**

If you are interested, you can read the full paper here:  
[*Beyond Banning AI: A First Look at GenAI Governance in Open Source Software Communities*](https://arxiv.org/abs/2603.26487)

And if you are a maintainer working through similar questions in your own project, we would love to hear from you. We are only at the beginning of what GenAI governance in open source will become.

## Related Links

### Paper and Background

- Paper on arXiv: [Beyond Banning AI: A First Look at GenAI Governance in Open Source Software Communities](https://arxiv.org/abs/2603.26487)
- Immich discussion: [Object storage](https://github.com/immich-app/immich/discussions/23745)

### Cost Structure and Headline Incidents

- matplotlib PR: [[PERF] Replace np.column_stack with np.vstack().T](https://github.com/matplotlib/matplotlib/pull/31132)
- Node.js PR: [Virtual File System for Node.js](https://github.com/nodejs/node/pull/61478)
- Petition: [No AI Code in Node.js Core](https://www.change.org/p/no-ai-code-in-node-js-core)
- Petition repo: [No AI in Node.js Core](https://github.com/indutny/no-ai-in-nodejs-core)

### PR Review, Communication, and Responsibility

- Docusaurus: [Contributing to Docusaurus: AI-assisted PRs](https://github.com/facebook/docusaurus/blob/main/CONTRIBUTING.md)
- Metasploit: [Contributing to Metasploit Framework: Vibecoding, AI, and LLM](https://github.com/rapid7/metasploit-framework/blob/master/CONTRIBUTING.md)
- typescript-eslint discussion: [Establish and document expectations around use of AI in contributions](https://github.com/typescript-eslint/typescript-eslint/issues/11416)
- typescript-eslint policy: [AI Contribution Policy](https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/contributing/AI_Contribution_Policy.mdx)
- Oh My Zsh: [Humans in the Loop](https://robbyonrails.com/articles/2026/01/20/humans-in-the-loop/)
- FastAPI: [Automated Code and AI](https://github.com/fastapi/fastapi/blob/master/docs/en/docs/contributing.md#automated-code-and-ai)
- Jaeger: [AI Usage Policy](https://github.com/jaegertracing/jaeger/blob/main/CONTRIBUTING_GUIDELINES.md#ai-usage-policy)

### Issues, Security, and Evidence Thresholds

- NewPipe: [AI policy](https://github.com/TeamNewPipe/NewPipe/blob/dev/.github/CONTRIBUTING.md)
- curl: [On AI use in curl](https://github.com/curl/curl/blob/master/docs/CONTRIBUTE.md)
- curl: [The end of the curl bug-bounty](https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/)
- llama.cpp: [AI Usage Policy](https://github.com/ggml-org/llama.cpp/blob/master/CONTRIBUTING.md)
- llama.cpp: [Security Policy](https://github.com/ggml-org/llama.cpp/blob/master/SECURITY.md)
- Kornia: [AI and Authorship Policy](https://github.com/kornia/kornia/blob/main/AI_POLICY.md)

### Provenance, Licensing, and Governance Boundaries

- QEMU: [Code Provenance: Use of AI-generated content](https://github.com/qemu/qemu/blob/master/docs/devel/code-provenance.rst)
- NetBSD: [Commit Guidelines](https://www.netbsd.org/developers/commit-guidelines.html)
- mpv: [AI-assisted Contributions](https://github.com/mpv-player/mpv/blob/master/DOCS/contribute.md#ai-assisted-contributions)
- CloudNativePG proposal: [Proposal: Adoption of Official AI Contribution & Copyright Policy](https://github.com/cloudnative-pg/governance/issues/45)
- CloudNativePG formal policy: [CloudNativePG AI Contribution Policy](https://github.com/cloudnative-pg/governance/blob/main/AI_POLICY.md)
- Spec Kit: [AI Contributions in Spec Kit](https://github.com/github/spec-kit/blob/main/CONTRIBUTING.md#ai-contributions-in-spec-kit)

### Agents, Platforms, and Contribution Entry Points

- JabRef: [`AGENTS.md`](https://github.com/JabRef/jabref/blob/main/AGENTS.md)
- PyTorch: [AI-Assisted Development](https://github.com/pytorch/pytorch/blob/main/CONTRIBUTING.md#ai-assisted-development)
- Jaeger: [Introduce PR limits for new contributors](https://github.com/jaegertracing/jaeger/pull/7880)
- pandas: [Automated Contributions Policy](https://github.com/pandas-dev/pandas/blob/main/doc/source/development/contributing.rst#automated-contributions-policy)
- CPython: [Generative AI](https://devguide.python.org/getting-started/generative-ai/)
- Zig commit: [add link to issue template list warning against LLMs](https://github.com/ziglang/zig/commit/d238078ae87f1beb565d42caee01ebd6a7a00d43)
- Zig: [Migrating from GitHub to Codeberg](https://ziglang.org/news/migrating-from-github-to-codeberg/)
- tldraw: [Contributions policy](https://github.com/tldraw/tldraw/issues/7695)
