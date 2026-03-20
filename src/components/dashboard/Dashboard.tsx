import React, { useMemo, useState } from "react";
import { mockCheckins } from "../../data/mockData";

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Completed":
      return {
        background: "rgba(16, 185, 129, 0.15)",
        color: "#34d399",
      };
    case "In Progress":
      return {
        background: "rgba(59, 130, 246, 0.15)",
        color: "#60a5fa",
      };
    default:
      return {
        background: "rgba(245, 158, 11, 0.15)",
        color: "#fbbf24",
      };
  }
};

const Dashboard = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return mockCheckins.filter((item) => {
      const value = search.toLowerCase();
      return (
        item.customerName.toLowerCase().includes(value) ||
        item.employeeName.toLowerCase().includes(value) ||
        item.checkInType.toLowerCase().includes(value) ||
        item.formName.toLowerCase().includes(value)
      );
    });
  }, [search]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("demoUser");
    window.location.href = "/login";
  };

  const demoUser = localStorage.getItem("demoUser") || "Demo User";

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", color: "white", padding: 24 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ color: "#60a5fa", marginBottom: 6 }}>Chekku Demo Dashboard</p>
            <h1 style={{ margin: 0, fontSize: 32 }}>Check-In Monitoring</h1>
            <p style={{ color: "#94a3b8" }}>
              Welcome back, {demoUser}. This dashboard displays simulated operational check-in data.
            </p>
          </div>

          <button
            onClick={handleLogout}
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid #334155",
              background: "#111827",
              color: "white",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div style={cardStyle}>
            <p style={cardLabel}>Total Check-Ins</p>
            <h2 style={cardValue}>{mockCheckins.length}</h2>
          </div>
          <div style={cardStyle}>
            <p style={cardLabel}>Completed</p>
            <h2 style={cardValue}>
              {mockCheckins.filter((item) => item.status === "Completed").length}
            </h2>
          </div>
          <div style={cardStyle}>
            <p style={cardLabel}>In Progress</p>
            <h2 style={cardValue}>
              {mockCheckins.filter((item) => item.status === "In Progress").length}
            </h2>
          </div>
          <div style={cardStyle}>
            <p style={cardLabel}>Pending</p>
            <h2 style={cardValue}>
              {mockCheckins.filter((item) => item.status === "Pending").length}
            </h2>
          </div>
        </section>

        <div style={{ marginBottom: 20 }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by customer, employee, visit type, or form..."
            style={{
              width: "100%",
              maxWidth: 480,
              padding: 14,
              borderRadius: 12,
              border: "1px solid #334155",
              background: "#111827",
              color: "white",
            }}
          />
        </div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
          }}
        >
          {filteredData.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#111827",
                border: "1px solid #1f2937",
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={item.image}
                alt={item.customerName}
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedImage(item.image)}
              />

              <div style={{ padding: 18 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <h3 style={{ margin: 0, fontSize: 20 }}>{item.customerName}</h3>
                    <p style={{ margin: "6px 0 0", color: "#94a3b8" }}>{item.checkInType}</p>
                  </div>

                  <span
                    style={{
                      ...getStatusStyles(item.status),
                      padding: "6px 10px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.status}
                  </span>
                </div>

                <div style={{ display: "grid", gap: 8, color: "#cbd5e1" }}>
                  <p style={metaText}>
                    <strong>Employee:</strong> {item.employeeName}
                  </p>
                  <p style={metaText}>
                    <strong>Form:</strong> {item.formName}
                  </p>
                  <p style={metaText}>
                    <strong>Date:</strong> {item.createdAt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.8)",
              display: "grid",
              placeItems: "center",
              padding: 24,
              zIndex: 999,
            }}
          >
            <img
              src={selectedImage}
              alt="Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "85vh",
                borderRadius: 16,
                boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  background: "#111827",
  border: "1px solid #1f2937",
  borderRadius: 18,
  padding: 18,
};

const cardLabel: React.CSSProperties = {
  margin: 0,
  color: "#94a3b8",
  fontSize: 14,
};

const cardValue: React.CSSProperties = {
  margin: "10px 0 0",
  fontSize: 32,
};

const metaText: React.CSSProperties = {
  margin: 0,
};

export default Dashboard;