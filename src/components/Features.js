export default function Features() {
  return (
    <section
      style={{
        padding: "20rem 6vw",
        borderTop: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <div style={{ maxWidth: "1100px" }}>
        {/* SECTION TITLE */}
        <h3
          style={{
            fontSize: "3.2rem",
            marginBottom: "3.5rem",
            letterSpacing: "-0.02em"
          }}

          id="features"
        >
          Designed as a system, not a tool
        </h3>

        {/* INTRO PARAGRAPH */}
        <p
          style={{
            maxWidth: "760px",
            fontSize: "1.1rem",
            lineHeight: "1.75",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "6rem"
          }}
        >
          AlgoLedger is built around a single principle: long-term consistency
          requires ownership. Instead of cloud dashboards, accounts, or opaque
          automation, AlgoLedger operates as a local, deterministic system that
          you fully control — from data storage to progress computation.
        </p>

        {/* FEATURE LIST */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            rowGap: "5rem"
          }}
        >
          {/* FEATURE 1 */}
          <div>
            <h4
              style={{
                fontSize: "1.6rem",
                marginBottom: "1.2rem"
              }}
            >
              Offline-first by design
            </h4>
            <p
              style={{
                maxWidth: "720px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.6)"
              }}
            >
              AlgoLedger does not depend on servers, APIs, or network availability.
              All data lives on your machine and is persisted locally. The platform
              starts instantly, works without internet access, and remains usable
              regardless of external service availability.
            </p>
          </div>

          {/* FEATURE 2 */}
          <div>
            <h4
              style={{
                fontSize: "1.6rem",
                marginBottom: "1.2rem"
              }}
            >
              Deterministic progress tracking
            </h4>
            <p
              style={{
                maxWidth: "720px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.6)"
              }}
            >
              Progress metrics in AlgoLedger are derived directly from your problem
              dataset. No cached summaries, no hidden state, and no inferred
              completion logic. Completion, revision, and topic-level statistics
              are computed dynamically, ensuring accuracy and long-term integrity.
            </p>
          </div>

          {/* FEATURE 3 */}
          <div>
            <h4
              style={{
                fontSize: "1.6rem",
                marginBottom: "1.2rem"
              }}
            >
              Flexible data ingestion
            </h4>
            <p
              style={{
                maxWidth: "720px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.6)"
              }}
            >
              Import DSA sheets from JSON exports of Excel or Google Sheets.
              AlgoLedger normalizes inconsistent columns, handles missing fields,
              and maps varied status formats into a strict internal schema —
              without requiring manual cleanup or rigid templates.
            </p>
          </div>

          {/* FEATURE 4 */}
          <div>
            <h4
              style={{
                fontSize: "1.6rem",
                marginBottom: "1.2rem"
              }}
            >
              Topic-centric workflow
            </h4>
            <p
              style={{
                maxWidth: "720px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.6)"
              }}
            >
              Problems are organized by topic, allowing you to track completion
              depth instead of raw counts. Topic-level views, revision states,
              and global summaries make it easier to identify weak areas and
              prioritize review over repetition.
            </p>
          </div>

          {/* FUTURE FEATURES */}
          <div
            style={{
              paddingTop: "3.5rem",
              borderTop: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            <h4
              style={{
                fontSize: "1.6rem",
                marginBottom: "1.6rem"
              }}
            >
              Planned enhancements
            </h4>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                rowGap: "1.4rem",
                color: "rgba(255,255,255,0.6)",
                fontSize: "1rem"
              }}
            >
              <li>
                — Fast global search by problem title or keyword
              </li>
              <li>
                — Topic and difficulty-based filtering
              </li>
              <li>
                — Versioned data migrations to preserve progress across updates
              </li>
              <li>
                — Optional encrypted local backups
              </li>
              <li>
                — macOS desktop build
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
