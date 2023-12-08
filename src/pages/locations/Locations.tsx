import { ColumnsType } from "antd/es/table";
import MainGrid from "../../components/MainGrid";
import { useNavigate } from "react-router-dom";

interface DataType {
  key: React.Key;
  name: string;
  location: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Location",
    dataIndex: "location",
    sorter: (a, b) => a.location.localeCompare(b.location),
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const Locations = () => {
  const navigate = useNavigate();
  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `The State Name ${i}`,
      location: `location ${Math.round(Math.random() * 100)}`,
      address: `London, Park Lane no. ${i}`,
    });
  }

  const handleRowClick = (data: DataType) => {
    navigate(`/locations/${data.key}`);
  };

  return (
    <MainGrid<DataType>
      columns={columns}
      data={data}
      onRowClick={handleRowClick}
    />
  );
};

export default Locations;
