import { Card, Table } from "antd";
import { ColumnType } from "antd/es/table";
import { ReactElement } from "react";

interface MainGridProps<T> {
  data: T[];
  columns: ColumnType<T>[];
  onRowClick?: (record: T) => void;
}

const MainGrid = <T extends object>({
  data,
  columns,
  onRowClick,
}: MainGridProps<T>): ReactElement => {
  return (
    <div style={{ padding: 10 }}>
      <Card bordered={false}>
        <Table
          dataSource={data}
          columns={columns}
          pagination={{
            pageSize: 10,
            hideOnSinglePage: true,
            showSizeChanger: false,
          }}
          onRow={(record) => {
            return {
              onClick: () => onRowClick && onRowClick(record),
            };
          }}
        />
      </Card>
    </div>
  );
};

export default MainGrid;
