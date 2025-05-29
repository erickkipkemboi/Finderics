import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Data {
  id: number;
  name: string;
  course: string;
  email: string;
  phone: string;
  amount:string;
  status:string;
}

const sampleData: Data[] = [
  { id: 1, name: "Erick Olande", course: "Germany", email: "alice@example.com", phone: "254793042033", amount:"10000", status:"approved"},
  { id: 2, name: "Bob Smith", course: "French", email: "bob@example.com",phone: "254793042033", amount:"10000", status:"approved" },
  { id: 3, name: "Charlie Brown", course: "Ielts", email: "charlie@example.com",phone: "254793042033", amount:"10000", status:"approved"},  
  { id: 1, name: "Erick Olande", course: "Germany", email: "alice@example.com", phone: "254793042033", amount:"10000", status:"approved"},
  { id: 2, name: "Bob Smith", course: "French", email: "bob@example.com",phone: "254793042033", amount:"10000", status:"approved" },
  { id: 3, name: "Charlie Brown", course: "Ielts", email: "charlie@example.com",phone: "254793042033", amount:"10000", status:"approved"},
  { id: 1, name: "Erick Olande", course: "Germany", email: "alice@example.com", phone: "254793042033", amount:"10000", status:"approved"},
  { id: 2, name: "Bob Smith", course: "French", email: "bob@example.com",phone: "254793042033", amount:"10000", status:"approved" },
  { id: 3, name: "Charlie Brown", course: "Ielts", email: "charlie@example.com",phone: "254793042033", amount:"10000", status:"approved"},
  { id: 1, name: "Erick Olande", course: "Germany", email: "alice@example.com", phone: "254793042033", amount:"10000", status:"approved"},
  { id: 2, name: "Bob Smith", course: "French", email: "bob@example.com",phone: "254793042033", amount:"10000", status:"approved" },
  { id: 3, name: "Charlie Brown", course: "Ielts", email: "charlie@example.com",phone: "254793042033", amount:"10000", status:"approved"},
  { id: 1, name: "Erick Olande", course: "Germany", email: "alice@example.com", phone: "254793042033", amount:"10000", status:"approved"},
  { id: 2, name: "Bob Smith", course: "French", email: "bob@example.com",phone: "254793042033", amount:"10000", status:"approved" },
  { id: 3, name: "Charlie Brown", course: "Ielts", email: "charlie@example.com",phone: "254793042033", amount:"10000", status:"approved"},
];

export default function DataTable() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(sampleData);

  const filteredData = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <Input placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button onClick={() => setData([...data].reverse())}>Sort</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Cource</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.course}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
