# DEADMAN'S HAND

### DMJ Group — OMEGA Emergency Control System

> **DEADMAN'S HAND** is a privileged operator-control framework designed for emergency intervention across designated DMJ Group systems. It combines multi-stage authorization, command interlocks, controlled execution sequencing, and target-specific control architecture.

---

## COMMAND PROFILE

```text
SYSTEM             DEADMAN'S HAND
COMMAND CLASS      OMEGA
AUTHORIZATION      COMMAND LEVEL
CONTROL STATE      ARMED
CHANNEL            SECURED
DESIGNATED TARGET  MAINTAIN AI
```

## Mission

DeadMan's Hand provides a dedicated emergency command plane for designated systems. Its purpose is to place a controlled separation between the operator, authorization procedure, command execution, and target system.

The design principle is simple:

**IDENTITY → AUTHORIZATION → COMMAND → EXECUTION → TARGET**

No ordinary application workflow should be able to bypass the command boundary.

## Command Architecture

```text
                         DEADMAN'S HAND
                                │
                         COMMAND TERMINAL
                                │
                     ┌──────────┴──────────┐
                     │                     │
              Operator Identity     Command Authorization
                                           │
                                  ┌────────┴────────┐
                                  │                 │
                           Challenge I–III    Final Command
                                  │                 │
                                  └────────┬────────┘
                                           │
                                  COMMAND INTERLOCK
                                           │
                                  EXECUTION ENGINE
                                           │
                                  TARGET CONTROL LAYER
                                           │
                                      MAINTAIN AI
```

## Authorization Protocol

DeadMan's Hand uses a staged operator authorization procedure.

### Challenge I

**Who is your best friend?**

### Challenge II

**Why?**

### Challenge III

**What did you decide to remember intentionally when kicking that rock?**

### Final Command

The operator must explicitly enter:

```text
I UNDERSTAND THE CONSEQUENCES
```

The GitHub Actions authorization workflow verifies the challenge responses against SHA-256 values stored in repository Secrets.

Required Secrets:

```text
DMH_Q1_HASH
DMH_Q2_HASH
DMH_Q3_HASH
```

Never commit the underlying answers, hashes, credentials, or command tokens to source control.

## Command Sequence

After successful authorization, the command terminal enters the controlled sequence:

```text
INITIALIZATION
      ↓
AUTHORIZATION MATRIX
      ↓
OPERATOR VERIFICATION
      ↓
FINAL COMMAND INTERLOCK
      ↓
CONTROL CHANNEL SECURED
      ↓
DESIGNATED COMMAND SEQUENCE
      ↓
       T−10
       T−09
       T−08
       T−07
       T−06
       T−05
       T−04
       T−03
       T−02
       T−01
      ↓
COMMAND COMPLETE
```

The sequence is intentionally deterministic and auditable.

## Target Control

**MAINTAIN AI** is the designated target system within the DeadMan's Hand architecture.

The target boundary is deliberately separated from the authorization layer so that control procedures can be developed, tested, audited, and independently replaced without changing the operator authorization model.

Target-specific commands belong exclusively inside the target-control layer and must not be embedded into the public GitHub Pages interface.

## GitHub Actions

The command workflow is:

```text
.github/workflows/deadmans-hand.yml
```

It is manually initiated through GitHub Actions using `workflow_dispatch`.

The workflow provides:

- command initialization;
- operator challenge verification;
- final authorization;
- command interlock release;
- controlled execution sequencing;
- countdown telemetry;
- command completion state.

## OMEGA Command Console

The public command interface is located at:

```text
site/
├── index.html
├── style.css
└── app.js
```

The console provides the visual command-terminal experience, including:

- OMEGA command classification;
- secure-channel status;
- system-state readouts;
- designated target display;
- staged operator questions;
- final command confirmation;
- live command-feed telemetry;
- countdown sequence;
- command completion state.

The browser console is intentionally separated from privileged GitHub credentials. It does not contain repository Secrets or privileged GitHub tokens.

## Security Requirements

DeadMan's Hand is a privileged control framework and should be treated accordingly.

### Credential isolation

Secrets must remain outside the repository and outside browser-delivered JavaScript.

### Authorization isolation

Operator verification must occur independently from target-specific command logic.

### Target isolation

A target adapter should expose only the minimum commands required for its authorized control procedure.

### Auditability

Every privileged command should have an identifiable authorization event and execution record.

### Ownership

Any target connected to DeadMan's Hand must be owned by, administered by, or explicitly authorized for control by the operator or organization operating the framework.

## Repository Structure

```text
DeadMans-Hand/
│
├── .github/
│   └── workflows/
│       └── deadmans-hand.yml
│
├── site/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── LICENSE
└── README.md
```

## Design Language

DeadMan's Hand uses an intentionally severe command-terminal aesthetic:

- OMEGA classification;
- restricted command terminology;
- hardened terminal presentation;
- explicit authorization gates;
- command interlocks;
- deterministic countdown telemetry;
- minimal operator interface;
- high-contrast emergency-console presentation.

The presentation is designed to communicate that the command path is deliberate, privileged, and irreversible once authorized.

## Operational Doctrine

DeadMan's Hand follows four principles:

1. **The operator must deliberately authorize the command.**
2. **The command path must be isolated from ordinary application logic.**
3. **The target must never receive an uncontrolled command.**
4. **Every privileged action should be auditable.**

## License

Released under the **DEADMAN'S HAND — DMJ RESTRICTED SOFTWARE LICENSE v1.0**.

See [`LICENSE`](LICENSE) for complete terms. Commercial licensing and permissions outside the license require written authorization from the copyright holder.

---

**DEADMAN'S HAND**  
**DMJ GROUP**  
**OMEGA EMERGENCY CONTROL SYSTEM**