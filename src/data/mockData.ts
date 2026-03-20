export type CheckinItem = {
  id: number;
  customerName: string;
  employeeName: string;
  checkInType: string;
  formName: string;
  createdAt: string;
  status: "Completed" | "Pending" | "In Progress";
  image: string;
};

export const mockCheckins: CheckinItem[] = [
  {
    id: 1,
    customerName: "Supermercados La Colonia",
    employeeName: "Carlos Mejía",
    checkInType: "Store Visit",
    formName: "Retail Inspection Form",
    createdAt: "2026-03-19 10:20 AM",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    customerName: "Farmacia Kielsa",
    employeeName: "María López",
    checkInType: "Audit Visit",
    formName: "Pharmacy Compliance Form",
    createdAt: "2026-03-19 09:45 AM",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    customerName: "Ferretería EPA",
    employeeName: "Juan Pérez",
    checkInType: "Maintenance Visit",
    formName: "Technical Review Form",
    createdAt: "2026-03-18 04:10 PM",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    customerName: "Distribuidora El Éxito",
    employeeName: "Ana García",
    checkInType: "Delivery Check",
    formName: "Distribution Checklist",
    createdAt: "2026-03-18 02:30 PM",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    customerName: "Tienda Pronto",
    employeeName: "Luis Romero",
    checkInType: "Promotional Visit",
    formName: "Brand Activation Form",
    createdAt: "2026-03-18 11:05 AM",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    customerName: "Hospital del Valle",
    employeeName: "Sofía Hernández",
    checkInType: "Medical Audit",
    formName: "Service Validation Form",
    createdAt: "2026-03-17 03:25 PM",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  },
];