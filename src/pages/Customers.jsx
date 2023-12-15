import React from 'react'
import { GridComponent,ColumnsDirective,  ColumnDirective, Page,Selection, Inject,Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import Header from '../components/Header'
import {customersData, customersGrid} from '../data/Data'


const Customers = () => {
  return (
    <div>
      <Header category="Page" title = "Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{allowDeleting: true, allowEditing: true}}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort]}/>
      </GridComponent>
    </div>
  )
}

export default Customers