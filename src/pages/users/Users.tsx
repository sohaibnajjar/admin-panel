import { ColumnsType } from "antd/es/table";
import MainGrid from "../../components/MainGrid";
import { useNavigate } from "react-router-dom";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];

const Users = () => {
  const navigate = useNavigate();
  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: i,
      address: `London, Park Lane no. ${i}`,
    });
  }

  const handleRowClick = (data: DataType) => {
    navigate(`/users/${data.key}`);
  };

  return (
    <MainGrid<DataType>
      columns={columns}
      data={data}
      onRowClick={handleRowClick}
    />
  );
};

export default Users;
