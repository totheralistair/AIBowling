# Development Process

## Guiding Principles

- **Hexagonal Architecture (Ports & Adapters):** BizLogic knows nothing about adapters. Adapters know about BizLogic.
- **"Not My Job":** Each app enforces tight responsibility boundaries. See RESPONSIBILITIES.md.
- **"Need-To-Know":** No object receives data it doesn't need.
- **Naming conventions:**
  - Methods that return a result are named after the result: `cost()` not `getCost()`
  - Method names use active voice: `pinSituation(pins)` not `receivePinSituation(pins)` — verbs like `receive`, `handle`, `process` are passive and describe the implementation, not the event
  - Test cases use long descriptive names: `test_it_returns_a_greeting`, `test_04_can_tag_a_muffin_to_another`
  - Slice descriptions always use active voice: "laneFreed frees up the lane" not "lane is freed"

## Folder Structure (per app)

```
AppForXxx/
  BizLogic/
    XxxService.js         ← core logic, no adapter dependencies
    Tests/
      XxxService.test.js  ← primary actor is always the test case
  Adapters/
    IncomingAdapters/     ← UI, HTTP, CLI — things that call into BizLogic
    OutgoingAdapters/     ← external services, databases, hardware
      MockYyy.js          ← mocks live here, one per secondary actor
  package.json
  jest.config.js
```

## Working Sequence (repeat for every slice)

1. **Dialog** — discuss the new code and tests with Claude before anything is written. Agree on what will be created.
2. **SLICES.md** — Claude adds the new slice to SLICES.md and waits for review and approval before writing any code.
3. **Code** — Claude creates the code and tests, then says: "Run `npm test` in AppForXxx."
4. **Local test passes** — Claude gives the git push instructions. Do not push until local tests pass.
5. **GitHub Actions** — push, then check the Actions tab. Report any errors back to Claude.

## Slice Sequence (repeat for each app)

### Slice 1 — Constant return, no secondary actor
- Add a single method to XxxService that returns a constant string.
- Test case calls the method and asserts the constant comes back.
- No constructor arguments, no adapters.

### Slice 2 — First secondary actor, with mock
- Identify the first outgoing dependency (e.g. LanesManager, POS).
- Add a mock for it in `Adapters/OutgoingAdapters/MockYyy.js`.
  - The mock's method returns a simple, observable result (not void).
  - Do not expose internal mock state as the assertion — return a value instead.
- Inject the mock via the constructor of XxxService.
- Add a method to XxxService that calls the mock and returns the result.
- Test case injects the mock, calls the method, asserts the return value.

### Slice N — Each additional secondary actor
- Repeat Slice 2 pattern for each new outgoing dependency.
- One mock per secondary actor, one new test per mock.
- **Each new secondary actor extends the constructor** — add the new mock as an additional constructor argument alongside existing ones. Do not replace existing constructor arguments.

## CI — GitHub Actions

Tests run automatically on every push and pull request via `.github/workflows/test.yml`. Each app runs independently in parallel. To see results, go to the Actions tab in the GitHub repo.

To run tests locally before pushing:
```bash
cd "/Users/alistaircockburn/Desktop/AI_Games/Bowling/AppForXxx"
npm test
```

## Key Rules
- Mocks live in `Adapters/OutgoingAdapters/`, not in `Tests/`.
- The test case is always the primary (incoming) actor in BizLogic tests.
- Real adapters are dropped in later without touching BizLogic.
- Before proposing any new slice, re-read RESPONSIBILITIES.md.
- **Do one slice at a time.** Stop after each slice, run tests, get approval before proceeding to the next.
- **Slice 1 code must have no constructor arguments.** If a constructor appears in slice 1, that is a bug.
