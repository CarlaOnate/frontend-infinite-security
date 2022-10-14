import React from 'react';
import { Table as AntTable } from 'antd';

export const Table = props => {
  const { columns, data } = props;

  return (
    <section className="table">
      <AntTable
        bordered
        size="small"
        columns={columns}
        dataSource={data}
        scroll={{ y: '40vh' }}
        pagination={{
          position: ['bottomCenter'],
        }}
      />
    </section>
  )
}