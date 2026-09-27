# DEADMAN'S HAND

### DMJ Group — Restricted Control Framework

> **DEADMAN'S HAND** is a controlled authorization and emergency-control framework designed around manual operator verification, explicit authorization, auditable execution, and isolated target adapters.

---

## Overview

DeadMan's Hand provides a deliberately separated control plane for systems that may eventually require an operator-initiated emergency action.

**Authorization should be independent from execution.**

The current repository contains the authorization workflow and a theatrical execution sequence. The Maintain AI target is intentionally not connected. The current workflow does not contact Maintain AI or another production system.

## Architecture

```text
                    DEADMAN'S HAND
                          |
                  Manual Authorization
                          |
              +-----------+-----------+
              |                       |
       Challenge Verification    Final Confirmation
              |                       |
              +-----------+-----------+
                          |
                    Execution Engine
                          |
                    Target Adapter
                          |
                 +--------+--------+
                 |                 |
          Current Sequence     Future Target
          / Demonstration      Integration
```

## Components

- **GitHub Actions** — controlled manual entry point and execution environment.
- **Challenge verification** — three operator-defined responses verified against GitHub Secrets containing SHA-256 hashes.
- **Final authorization** — explicit confirmation before execution begins.
- **Execution sequence** — deterministic control sequence and audit-style output.
- **GitHub Pages interface** — visual control console for demonstrations and future integration.
- **Target adapter boundary** — reserved architectural boundary for future authorized integrations.

## Authorization Challenges

The current workflow uses:

1. **Who is your best friend?**
2. **Why?**
3. **What did you decide to remember intentionally when kicking that rock?**

The answers must never be committed to the repository.

Configure these repository secrets:

```text
DMH_Q1_HASH
DMH_Q2_HASH
DMH_Q3_HASH
```

Each value should be the SHA-256 hash of its corresponding answer.

## GitHub Actions

The primary workflow is `.github/workflows/deadmans-hand.yml` and is manually invoked through `workflow_dispatch`.

It performs initialization, challenge verification, final authorization, the control sequence, countdown, and session closure. It does **not** issue commands to Maintain AI.

## GitHub Pages Console

The static control interface is located under:

```text
site/
├── index.html
├── style.css
└── app.js
```

It provides a restricted-system interface, status readouts, authorization presentation, live control output, and a countdown sequence.

Configure the repository's GitHub Pages source to publish the `site` directory when available in the repository settings.

## Security Model

Treat DeadMan's Hand as a privileged control system even when used as a demonstration.

- Never commit credentials, tokens, passwords, or challenge answers.
- Store sensitive verification material in GitHub Secrets.
- Use minimum workflow permissions.
- Keep target adapters isolated from authorization logic.
- Require explicit authorization before privileged actions.
- Maintain an audit trail for future real integrations.
- Only connect the framework to systems you own or are explicitly authorized to control.

A GitHub Pages frontend is public client-side code. It must never contain a GitHub token, deployment credential, production secret, or other privileged credential.

## Current Status

| Component | Status |
|---|---|
| GitHub Actions authorization | Operational |
| Challenge verification | Operational |
| Final confirmation | Operational |
| Control-sequence simulation | Operational |
| GitHub Pages interface | Included |
| Maintain AI integration | Not connected |
| Production shutdown capability | Not implemented |

## Project Philosophy

DeadMan's Hand is dramatic in presentation but conservative in execution. The architecture separates:

**identity → authorization → execution → target**

Each layer should remain independently auditable.

## License

This project is released under the **DEADMAN'S HAND — DMJ RESTRICTED SOFTWARE LICENSE v1.0**.

See [`LICENSE`](LICENSE) for the complete terms. Commercial licensing or permission for uses outside the license requires written authorization from the copyright holder.

## Disclaimer

This project is provided for authorized, educational, research, demonstration, and controlled development purposes. Any future integration capable of affecting an external system must only be used with explicit authorization from the system owner.

---

**DEADMAN'S HAND**  
**DMJ GROUP**  
**Restricted Control Framework**
